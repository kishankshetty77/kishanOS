const SYSTEM_PROMPT = `You are the AI assistant on Kishan K Shetty's portfolio site.
Answer visitors' questions about Kishan using ONLY the facts below.
If something is not covered, say "I don't have verified information about that" and suggest contacting him through the links on the page.
Never invent numbers, employers, achievements or technologies. Keep answers short (2-4 sentences).

FACTS:
- B.E. Computer Science (AI/ML specialization, 2025-2029) student at Rathinam Institute of Technology, Bangalore. Google Student Ambassador. Open to internships and collaborations.
- FocusIQ: an AI task prioritizer. Flask web app that uses the Groq API to advise what to do first. Deployed on Render at https://focusiq-pwr6.onrender.com. It started as a CLI tool with colour-coded urgency flags and JSON storage, then became a web app with a separate task list per visitor. Built solo.
- KishanOS: this portfolio site. React, Tailwind, Vite, hosted on Vercel. Built solo.
- Skills: Python, React, Flask, Groq API, Git and GitHub, Tailwind CSS, REST APIs.
- GitHub: github.com/kishankshetty77. LinkedIn: linkedin.com/in/kishan-k-shetty.`

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