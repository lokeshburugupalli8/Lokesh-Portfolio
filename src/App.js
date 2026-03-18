import "./App.css";
import { contactLinks, highlights, profile, projects, strengths } from "./portfolioData";

function App() {
  const initials = profile.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Go to home section">
          {initials}.
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">{profile.eyebrow}</p>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-text">{profile.intro}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View Projects
              </a>
              <a
                className="button button-secondary"
                href={profile.resumeHref}
                download="Lokesh-Burugupalli-Resume.pdf"
              >
                Download Resume
              </a>
              <a className="button button-secondary" href="#contact">
                Let&apos;s Talk
              </a>
            </div>

            <div className="hero-meta">
              <span>{profile.education}</span>
              <span>{profile.availability}</span>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Portfolio summary">
            <div className="hero-panel-top">
              <p className="panel-label">Current Focus</p>
              <h2>{profile.focus}</h2>
            </div>

            <div className="hero-highlights">
              {highlights.map((item) => (
                <article className="stat-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </aside>
        </section>

        <section className="section section-grid" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Learning fast, building steadily, and turning concepts into working software.</h2>
          </div>

          <div className="about-layout">
            <article className="about-card">
              <p>
                I am a Computer Science Engineering student with practical experience
                in Python, MySQL, data handling, automation, and machine learning
                workflows. Through internships and academic projects, I have focused
                on building reliable solutions with clear structure and documentation.
              </p>
              <p>
                I am especially interested in entry-level software, AI, and web
                development roles where I can keep improving, contribute to real
                products, and grow as an engineer.
              </p>
            </article>

            <article className="about-card">
              <p className="card-title">What I Can Help With</p>
              <div className="pill-list">
                {strengths.map((strength) => (
                  <span className="pill" key={strength}>
                    {strength}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work designed to show range, clarity, and execution.</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-card-top">
                  <span className="project-index">0{index + 1}</span>
                  <p className="project-category">{project.category}</p>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="pill-list">
                  {project.stack.map((item) => (
                    <span className="pill" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Looking for an intern or entry-level developer? Let&apos;s connect.</h2>
          </div>

          <div className="contact-layout">
            <article className="contact-card contact-card-featured">
              <p className="card-title">Available For</p>
              <h3>Internships, trainee programs, entry-level software roles, and project collaboration.</h3>
              <p>
                I am actively seeking opportunities where I can apply my skills in
                Python, web development, data handling, and AI/ML while continuing
                to learn from real-world engineering work.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href={`mailto:${profile.email}`}>
                  Email Me
                </a>
                <a
                  className="button button-secondary"
                  href={profile.resumeHref}
                  download="Lokesh-Burugupalli-Resume.pdf"
                >
                  Download Resume
                </a>
              </div>
            </article>

            <div className="contact-links">
              {contactLinks.map((link) => (
                <a
                  className="contact-card"
                  href={link.href}
                  key={link.label}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                >
                  <span className="card-title">{link.label}</span>
                  <strong>{link.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
