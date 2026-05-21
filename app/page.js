import SiteHeader from "@/components/SiteHeader";

const experiences = [
  {
    term: "Co-op Term 1",
    period: "Year",
    role: "Software Developer Intern",
    company: "Company / Organization Name",
    summary:
      "Summarize the product, tools, team, and one measurable contribution here. Keep it outcome-first and specific.",
    stack: ["React", "APIs", "Testing"],
  },
  {
    term: "Co-op Term 2",
    period: "Year",
    role: "Developer / Analyst Intern",
    company: "Company / Organization Name",
    summary:
      "Use this slot for a second placement, technical project, research role, or professional experience that shows range.",
    stack: ["Automation", "Data", "Systems"],
  },
];

const projects = [
  {
    title: "Portfolio System",
    description:
      "A fast, responsive portfolio rebuilt with a modern component structure and a stronger editorial rhythm.",
  },
  {
    title: "Project Placeholder",
    description:
      "Replace this with a course project, hackathon app, or shipped tool. Lead with the problem, your role, and the result.",
  },
  {
    title: "Technical Case Study",
    description:
      "Use this space for a short case study that shows how you break down messy problems into maintainable systems.",
  },
];

const notes = [
  "Software development, systems thinking, and clean interfaces",
  "Currently focused on practical full-stack engineering",
  "Interested in developer tools, automation, and product-minded teams",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="intro-section" id="home">
          <h1>Hi, I'm Arav.</h1>
          <p>Software developer focused on building useful products with clean, maintainable systems.</p>
          <p>
            I like practical engineering, thoughtful interfaces, and teams that care about shipping work
            people can rely on.
          </p>
          <ul className="plain-list" aria-label="Current focus">
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>

        <section className="content-section" id="work">
          <div className="section-title-row">
            <h2>Work</h2>
            <a href="#contact">hiring?</a>
          </div>
          <div className="simple-stack">
            {experiences.map((item) => (
              <article className="list-item" key={item.term}>
                <h3>{item.role}</h3>
                <p>
                  {item.company} / {item.term} / {item.period}
                </p>
                <p>{item.summary}</p>
                <p>{item.stack.join(" / ")}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="section-title-row">
            <h2>Projects</h2>
            <a href="#contact">see more</a>
          </div>
          <div className="link-list">
            {projects.map((project) => (
              <article className="list-item" key={project.title}>
                <a href="#contact">{project.title}</a>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" id="contact">
          <h2>Know More</h2>
          <ul className="contact-list">
            <li>
              <a href="mailto:your.email@example.com">email</a>
            </li>
            <li>
              <a href="#" aria-label="GitHub profile">
                github
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn profile">
                linkedin
              </a>
            </li>
            <li>
              <a href="#" aria-label="Resume">
                resume
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
