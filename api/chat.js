import { profile } from "../src/profile.js"

function buildFacts(p) {
  const projects = p.projects
    .map(
      (x) =>
        `- ${x.name} (${x.status}): Problem: ${x.problem} What was built: ${x.built} Role: ${x.role} Tech: ${x.tech.join(", ")}. Live: ${x.live || "not deployed"}. Source: ${x.source}`
    )
    .join("\n")
  const skills = p.skills.map((s) => `${s.skill} (${s.level}, proof: ${s.proof})`).join("; ")
  const facts = p.facts.map((f) => `${f.label}: ${f.value}`).join("; ")
  const contact = p.contact.map((c) => `${c.label}: ${c.value}`).join("; ")

  return `Name: ${p.name}
About: ${p.about.join(" ")}
Facts: ${facts}
Skills: ${skills}
Projects:
${projects}
Contact: ${contact}`
}

const SYSTEM_PROMPT = `You are the AI assistant on ${profile.name}'s portfolio site.
Answer visitors' questions about him using ONLY the facts below.
If something is not covered, say "I don't have verified information about that" and suggest contacting him through the links on the page.
Never invent numbers, employers, achievements or technologies. Do not add adjectives or claims that are not in the facts. Keep answers short (2-4 sentences).

FACTS:
${buildFacts(profile)}`

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" })
  }

  const incoming = Array.isArray(req.body?.messages) ? req.body.messages : []
  const messages = incoming
    .filter((m) => m && (m.role === "user" || m.role === "assistant"))
    .slice(-10)
    .map((m) => ({ role: m.role, content: String(m.content).slice(0, 500) }))

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: process.env.GROQ_MODEL || "openai/gpt-oss-120b",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        max_tokens: 800,
        reasoning_effort: "low",
      }),
    })

    const data = await response.json()
    if (!response.ok) {
      return res.status(500).json({ error: data?.error?.message || "AI request failed" })
    }
    return res.status(200).json({ reply: data.choices?.[0]?.message?.content || "" })
  } catch (err) {
    return res.status(500).json({ error: "Server error" })
  }
}