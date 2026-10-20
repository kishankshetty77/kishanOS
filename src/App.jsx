export default function App() {
  return (
    <div className="bg-black min-h-screen text-white font-mono">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-6 border-b border-orange-500/20">
        <span className="text-orange-500 font-bold text-xl">KishanOS</span>
        <div className="flex gap-8 text-sm text-gray-400">
          <a href="#about" className="hover:text-orange-500 transition">About</a>
          <a href="#projects" className="hover:text-orange-500 transition">Projects</a>
          <a href="#skills" className="hover:text-orange-500 transition">Skills</a>
          <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col justify-center items-start px-8 md:px-24 py-32">
        <p className="text-orange-500 text-sm tracking-widest mb-4">
          GOOGLE STUDENT AMBASSADOR · AI/ML ENGINEER
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Hi, I'm <span className="text-orange-500">Kishan</span>.<br />
          I build AI things<br />
          that matter.
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mb-10">
          CSE student at Rathinam Institute of Technology, Bangalore.
          Building AI-powered products that solve real problems —
          from Bangalore to the world.
        </p>
        <div className="flex gap-4">
          <a href="#projects"
             className="bg-orange-500 text-black px-6 py-3 font-bold hover:bg-orange-400 transition">
            See My Work
          </a>
          <a href="#contact"
             className="border border-orange-500 text-orange-500 px-6 py-3 font-bold hover:bg-orange-500 hover:text-black transition">
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 md:px-24 py-24 border-t border-orange-500/20">
        <p className="text-orange-500 text-sm tracking-widest mb-4">ABOUT ME</p>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              From Bangalore.<br />
              Building for the <span className="text-orange-500">world.</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm an 18-year-old AI/ML engineer and Google Student Ambassador
              (GID: 4696) at Rathinam Institute of Technology, Bangalore.
              I specialize in building AI-powered products that solve real problems.
            </p>
            <p className="text-gray-400 leading-relaxed">
              My mission is simple — build things that matter, ship before
              perfecting, and document every step of the journey on Ultrathink.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { label: "College", value: "Rathinam Institute of Technology" },
              { label: "Specialization", value: "AI/ML Engineering" },
              { label: "Batch", value: "2025 - 2029" },
              { label: "Role", value: "Google Student Ambassador" },
              { label: "Location", value: "Bangalore, India" },
              { label: "Status", value: "Open to Opportunities 🟢" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between border-b border-gray-800 pb-3">
                <span className="text-gray-500 text-sm">{item.label}</span>
                <span className="text-white text-sm font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-8 md:px-24 py-24 border-t border-orange-500/20">
        <p className="text-orange-500 text-sm tracking-widest mb-4">SKILLS</p>
        <h2 className="text-4xl font-bold mb-12">
          What I <span className="text-orange-500">Build With</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { skill: "Python", level: "Advanced", proof: "github.com/kishankshetty77" },
            { skill: "React", level: "Intermediate", proof: "KishanOS — this site" },
            { skill: "Flask", level: "Intermediate", proof: "FocusIQ Backend" },
            { skill: "AI/ML", level: "Intermediate", proof: "FocusIQ AI Layer" },
            { skill: "Groq API", level: "Intermediate", proof: "FocusIQ" },
            { skill: "Git & GitHub", level: "Advanced", proof: "github.com/kishankshetty77" },
            { skill: "Tailwind CSS", level: "Intermediate", proof: "KishanOS — this site" },
            { skill: "REST APIs", level: "Intermediate", proof: "FocusIQ Backend" },
          ].map((item) => (
            <div key={item.skill} className="border border-gray-800 p-4 hover:border-orange-500 transition">
              <p className="text-white font-bold mb-1">{item.skill}</p>
              <p className="text-orange-500 text-xs mb-2">{item.level}</p>
              <p className="text-gray-600 text-xs">Proof: {item.proof}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="px-8 md:px-24 py-24 border-t border-orange-500/20">
        <p className="text-orange-500 text-sm tracking-widest mb-4">PROJECTS</p>
        <h2 className="text-4xl font-bold mb-12">
          Things I've <span className="text-orange-500">Shipped</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "FocusIQ",
              tag: "AI · Productivity",
              desc: "AI-powered task prioritizer that helps users focus on what matters most. Built with Python, Flask, and Groq API.",
              tech: ["Python", "Flask", "Groq API", "React"],
              link: "github.com/kishankshetty77",
              status: "Live"
            },
            {
              name: "KishanOS",
              tag: "AI · Identity",
              desc: "AI-powered professional identity platform replacing static resumes. The app you're looking at right now.",
              tech: ["React", "Tailwind", "Vite", "Claude API"],
              link: "github.com/kishankshetty77/kishanOS",
              status: "Building"
            },
          ].map((project) => (
            <div key={project.name} className="border border-gray-800 p-8 hover:border-orange-500 transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-orange-500 text-xs tracking-widest mb-1">{project.tag}</p>
                  <h3 className="text-2xl font-bold">{project.name}</h3>
                </div>
                <span className={`text-xs px-2 py-1 ${project.status === 'Live' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(t => (
                  <span key={t} className="text-xs border border-gray-700 px-2 py-1 text-gray-400">{t}</span>
                ))}
              </div>
              <a href={`https://${project.link}`}
                 className="text-orange-500 text-sm hover:underline">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 md:px-24 py-24 border-t border-orange-500/20">
        <p className="text-orange-500 text-sm tracking-widest mb-4">CONTACT</p>
        <h2 className="text-4xl font-bold mb-6">
          Let's <span className="text-orange-500">Connect</span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-lg">
          Open to internships, collaborations, and interesting problems.
          Reach out — I respond fast.
        </p>
        <div className="flex flex-col gap-4">
          {[
            { label: "GitHub", value: "github.com/kishankshetty77", link: "https://github.com/kishankshetty77" },
            { label: "LinkedIn", value: "linkedin.com/in/kishan-k-shetty", link: "https://linkedin.com/in/kishan-k-shetty" },
            { label: "Instagram", value: "@kishanbuilds", link: "https://instagram.com/kishanbuilds" },
          ].map((item) => (
            <a key={item.label} href={item.link}
               className="flex justify-between items-center border-b border-gray-800 pb-4 hover:border-orange-500 transition group">
              <span className="text-gray-500 text-sm">{item.label}</span>
              <span className="text-white group-hover:text-orange-500 transition text-sm">{item.value} →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 md:px-24 py-8 border-t border-orange-500/20 text-center">
        <p className="text-gray-600 text-sm">
          Built by <span className="text-orange-500">Kishan</span> · From Bangalore to the world 🌍
        </p>
      </footer>

    </div>
  )
}