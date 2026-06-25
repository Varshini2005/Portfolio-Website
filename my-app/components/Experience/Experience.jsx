import styles from "./Experience.module.css";
export default function Experience() {
  const experiences = [
    {
      year: "2026",
      role: "Research Intern",
      company: "AI Research Lab",
      description:
        "Worked on Federated Learning, Differential Privacy and Tiny ImageNet experiments.",
    },
    {
      year: "2025",
      role: "Consultant",
      company: "Company Name",
      description:
        "Developed AI solutions and assisted in data-driven decision making.",
    },
    {
      year: "2026",
      role: "Teaching Assistant",
      company: "Indian Institute Technology,Ropar",
      description:
        "Mentored students and conducted doubt-solving sessions.",
    },
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>{exp.year}</span>
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}