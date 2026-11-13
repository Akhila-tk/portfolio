import { Fragment, useEffect, useState } from "react";
import {
  profile, marquee, stats, projects, skills,
  experience, certifications, languages,
} from "./data.js";

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("pf-theme");
      return saved === "dark" || saved === "light" ? saved : "light";
    } catch {
      return "light";
    }
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("pf-theme", theme); } catch { /* ignore */ }
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}

function ProjectCard({ project }) {
  const [pos, setPos] = useState({ x: "50%", y: "50%" });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: `${e.clientX - r.left}px`, y: `${e.clientY - r.top}px` });
  };
  return (
    <article className="card reveal" onPointerMove={onMove} style={{ "--mx": pos.x, "--my": pos.y }}>
      <div>
        <div className="year">{project.period}</div>
        <h3>{project.title}</h3>
        <ul>{project.points.map((p) => <li key={p}>{p}</li>)}</ul>
        {project.links.length > 0 && (
          <div className="proj-links">
            {project.links.map((l) => (
              <a key={l.href} className="btn" href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label} <span className="arr">↗</span>
              </a>
            ))}
          </div>
        )}
        <div className="tags">{project.tags.map((t) => <span key={t}>{t}</span>)}</div>
      </div>
    </article>
  );
}

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      window.prompt("Copy this email:", profile.email);
    }
  };

  const heroWords = ["I", "build", "responsive", "web", "apps", "with", "React", "&", "FastAPI."];

  return (
    <>
      <div className="progress" aria-hidden="true" />

      <header className="nav">
        <a className="brand" href="#top"><i />{profile.name}</a>
        <nav aria-label="Sections">
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
          <button className="toggle" type="button" onClick={toggleTheme} aria-label="Switch between light and dark theme">
            {theme === "dark" ? "light" : "dark"}
          </button>
        </nav>
      </header>

      <main className="wrap" id="top">
        <div className="hero">
          <span className="status"><b />{profile.location} · Open to opportunities</span>
          <h1 className="big">
            {heroWords.map((w, i) => (
              <Fragment key={i}>
                <span className="w">
                  <span style={{ "--i": i }} className={w === "responsive" ? "accent" : undefined}>{w}</span>
                </span>{" "}
              </Fragment>
            ))}
          </h1>
          <p className="sub">
            Hi, I'm <strong>{profile.name}</strong>, a Software Developer at BRQ Glob Tech. I turn complex business
            workflows into clean, user-friendly interfaces connected to solid REST APIs.
          </p>
          <div className="cta">
            <a className="btn primary" href="#work">View my work <span className="arr">→</span></a>
            <a className="btn" href="#contact">Get in touch</a>
          </div>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="track">
            {[...marquee, ...marquee].map((m, i) => <span key={i}>{m}</span>)}
          </div>
        </div>

        <section id="about">
          <div className="eyebrow reveal">About</div>
          <div className="about reveal">
            <p>{profile.summary} <em>{profile.summaryMuted}</em></p>
          </div>
          <div className="stats reveal">
            {stats.map((s) => (
              <div className="stat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
            ))}
          </div>
        </section>

        <section id="work">
          <div className="eyebrow reveal">Selected work</div>
          <div className="projects">
            {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
        </section>

        <section id="skills">
          <div className="eyebrow reveal">Skills</div>
          <div className="skillgrid">
            {skills.map((g) => (
              <div className="group reveal" key={g.group}>
                <h3>{g.group}</h3>
                <div className="chips">{g.items.map((s) => <span key={s}>{s}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience">
          <div className="eyebrow reveal">Experience &amp; education</div>
          <div className="timeline">
            {experience.map((e) => (
              <div className="job reveal" key={e.title}>
                <div className="when">{e.when}</div>
                <h3>{e.title}</h3>
                <div className="org">{e.org}</div>
                {e.points.length > 0 && <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>}
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="eyebrow reveal">Certifications &amp; languages</div>
          <div className="pair">
            <div className="group reveal">
              <h3>Certifications</h3>
              <div className="chips">{certifications.map((c) => <span key={c}>{c}</span>)}</div>
            </div>
            <div className="group reveal">
              <h3>Languages</h3>
              <div className="chips">{languages.map((l) => <span key={l}>{l}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="eyebrow reveal">Contact</div>
          <h2 className="reveal">Let's build something <span className="accent">useful</span> together.</h2>
          <p className="reveal">Looking for a React and FastAPI developer for your team or project? Send me an email.</p>
          <div className="mail reveal">
            <code>{profile.email}</code>
            <button className="btn primary" type="button" onClick={copyEmail}>{copied ? "Copied" : "Copy email"}</button>
          </div>
          <div className="social reveal">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <span>{profile.location}, India</span>
          </div>
          <footer><span>© {new Date().getFullYear()} {profile.name}</span><span>Built with React</span></footer>
        </section>
      </main>
    </>
  );
}
