import SiteHeader from "@/components/SiteHeader";

const experiences = [
  {
    company: "Cerebras",
    period: "Current",
    href: "https://www.cerebras.ai/",
    summary: "Building infrastructure for running training and inference workloads on Cerebras chips.",
    details: "Software Engineer / Internship",
  },
  {
    company: "Virtual Valet Systems",
    period: "2025",
    href: "https://www.vvsparking.com/",
    summary: "Engineered AI-powered backend infrastructure for parking management, spanning chatbot automation, semantic retrieval, and scalable AWS APIs.",
    details: "Software Engineer / Internship",
  },
  {
    company: "Nokia",
    period: "2025",
    href: "https://www.nokia.com/",
    summary: "Built infrastructure to automate configuration, deployment, and management of 5G network applications. Developed agents to autonomously resolve 5G network issues.",
    details: "Software Engineer / Internship",
  },
  {
    company: "Ford",
    period: "2024",
    href: "https://www.ford.ca/",
    summary: "Made a test automation SDK to improve validation and reliability of Ford's web platforms.",
    details: "Test Automation Engineer / Internship",
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
          </div>
          <div className="experience-list">
            {experiences.map((item) => (
              <article className="experience-item" key={item.company}>
                <div className="experience-topline">
                  <h3>
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.company}
                    </a>
                  </h3>
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
          </div>
          <p>In progress.</p>
        </section>

        <section className="content-section" id="contact">
          <h2>Know More</h2>
          <ul className="contact-list">
            <li>
              <a href="mailto:your.email@example.com">email</a>
            </li>
            <li>
              <a href="https://github.com/Aravsharma1" aria-label="GitHub profile">
                github
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/arav-sharma/" aria-label="LinkedIn profile">
                linkedin
              </a>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
