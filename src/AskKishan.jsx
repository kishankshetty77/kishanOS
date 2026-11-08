import { useState } from "react"

export default function AskKishan() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Kishan's AI. Ask me about his skills or projects." },
  ])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim() || loading) return
    const next = [...messages, { role: "user", content: input }]
    setMessages(next)
    setInput("")
    setLoading(true)
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      })
      const data = await res.json()
      if (!res.ok || !data.reply) throw new Error(data.error || "No reply")
      setMessages([...next, { role: "assistant", content: data.reply }])
    } catch (err) {
      setMessages([...next, { role: "assistant", content: "Sorry, I couldn't answer that right now. Try again in a moment." }])
    }
    setLoading(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-orange-500 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:bg-orange-400 z-50"
      >
        {open ? "Close" : "Ask Kishan AI 🤖"}
      </button>

      {open && (
        <div className="fixed bottom-20 right-6 w-80 max-w-[calc(100vw-3rem)] bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl z-50 flex flex-col">
          <div className="p-4 border-b border-zinc-700">
            <h3 className="text-orange-500 font-bold">Ask Kishan AI</h3>
            <p className="text-zinc-400 text-xs">Answers only from verified profile info</p>
          </div>

          <div className="p-4 h-64 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div key={i} className={msg.role === "user" ? "text-right" : "text-left"}>
                <span
                  className={`inline-block px-3 py-2 rounded-lg text-sm max-w-[16rem] ${
                    msg.role === "user" ? "bg-orange-500 text-black" : "bg-zinc-800 text-zinc-200"
                  }`}
                >
                  {msg.content}
                </span>
              </div>
            ))}
            {loading && (
              <div className="text-left">
                <span className="inline-block px-3 py-2 rounded-lg bg-zinc-800 text-zinc-400 text-sm">
                  Thinking...
                </span>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-zinc-700 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask about Kishan..."
              className="flex-1 bg-zinc-800 text-white text-sm px-3 py-2 rounded-lg outline-none border border-zinc-700 focus:border-orange-500"
            />
            <button onClick={sendMessage} className="bg-orange-500 text-black font-bold px-4 py-2 rounded-lg">
              →
            </button>
          </div>
        </div>
      )}
    </>
  )
}