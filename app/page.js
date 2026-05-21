import SiteHeader from "@/components/SiteHeader";

const experiences = [
  {
    company: "Cerebras",
    period: "Current",
    logo: "/logos/cerebras.svg",
    summary: "Working on software systems in the AI/ML infrastructure space.",
    details: "Software Engineering / Internship / AI Infrastructure",
  },
  {
    company: "Nokia",
    period: "2025",
    logo: "/logos/nokia.svg",
    summary: "Built engineering experience across production software and infrastructure-oriented work.",
    details: "Software Engineering / Internship",
  },
  {
    company: "Ford",
    period: "2024",
    logo: "/logos/ford.svg",
    summary: "Worked on practical software systems in a large engineering organization.",
    details: "Software Engineering / Internship",
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
  "Computer Science student at the University of Waterloo",
  "Prior internship experiences at Nokia, Ford. Currently working at Cerebras.",
  "Interested and exploring the AI/ML infrastructure space.",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="page-shell">
        <section className="intro-section" id="home">
          <ul className="plain-list" aria-label="Current focus">
            {notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </section>

        <section className="content-section" id="experience">
          <div className="section-title-row">
            <h2>Experience</h2>
            <a href="#contact">hiring?</a>
          </div>
          <div className="experience-list">
            {experiences.map((item) => (
              <article className="experience-item" key={item.company}>
                <div className="company-logo" aria-hidden="true">
                  <img src={item.logo} alt="" />
                </div>
                <div className="experience-topline">
                  <h3>{item.company}</h3>
                  <span>{item.period}</span>
                </div>
                <p>{item.summary}</p>
                <p>{item.details}</p>
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
