export const profile = {
  name: "Kishan K Shetty",
  headline: "GOOGLE STUDENT AMBASSADOR · AI/ML ENGINEER",
  intro:
    "CSE student at Rathinam Institute of Technology, Bangalore. Building AI-powered products that solve real problems — from Bangalore to the world.",

  about: [
    "I'm an 18-year-old AI/ML engineer and Google Student Ambassador (GID: 4696) at Rathinam Institute of Technology, Bangalore. I specialize in building AI-powered products that solve real problems.",
    "My mission is simple — build things that matter, ship before perfecting, and document every step of the journey on Kishanbuilds.",
  ],

  facts: [
    { label: "College", value: "Rathinam Institute of Technology" },
    { label: "Specialization", value: "AI/ML Engineering" },
    { label: "Batch", value: "2025 - 2029" },
    { label: "Role", value: "Google Student Ambassador" },
    { label: "Location", value: "Bangalore, India" },
    { label: "Status", value: "Open to Opportunities 🟢" },
  ],

  skills: [
    { skill: "Python", level: "Advanced", proof: "FocusIQ" },
    { skill: "React", level: "Intermediate", proof: "KishanOS — this site" },
    { skill: "Flask", level: "Intermediate", proof: "FocusIQ backend" },
    { skill: "AI/ML", level: "Intermediate", proof: "FocusIQ AI layer" },
    { skill: "Groq API", level: "Intermediate", proof: "FocusIQ" },
    { skill: "Git & GitHub", level: "Advanced", proof: "github.com/kishankshetty77" },
    { skill: "Tailwind CSS", level: "Intermediate", proof: "KishanOS — this site" },
    { skill: "REST APIs", level: "Intermediate", proof: "FocusIQ backend" },
  ],

  projects: [
    {
      name: "FocusIQ",
      tag: "AI · Productivity",
      status: "Live",
      problem: "I never knew what to work on first, so my tasks kept piling up.",
      built:
        "A Flask web app where you add tasks and get AI advice on what to do first, powered by the Groq API. It started as a CLI tool and grew into a deployed web app with a separate task list for each visitor.",
      role: "Solo: backend, AI integration, UI and deployment.",
      tech: ["Python", "Flask", "Groq API", "Render"],
      live: "https://focusiq-pwr6.onrender.com",
      source: "https://github.com/kishankshetty77/focusiq",
    },
    {
      name: "KishanOS",
      tag: "AI · Identity",
      status: "Building",
      problem: "A PDF resume can't show recruiters what a fresher can actually build.",
      built:
        "A living profile where every skill links to proof, with an AI chat that answers only from verified facts. This is the site you're looking at right now.",
      role: "Solo: design, frontend, AI chat and deployment.",
      tech: ["React", "Tailwind", "Vite", "Vercel"],
      live: "https://kishan-os.vercel.app",
      source: "https://github.com/kishankshetty77/kishanOS",
    },
  ],

  contact: [
    { label: "GitHub", value: "github.com/kishankshetty77", link: "https://github.com/kishankshetty77" },
    { label: "LinkedIn", value: "linkedin.com/in/kishan-k-shetty", link: "https://linkedin.com/in/kishan-k-shetty" },
    { label: "Instagram", value: "@kishanbuilds", link: "https://instagram.com/kishanbuilds" },
    ],
}