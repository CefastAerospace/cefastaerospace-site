import { Section, Pending } from "./Shared";
import { projects } from "../data/projects";
import { pageUrl } from "../data/pages";
import { cansat } from "../data/cansat";

export default function CansatProject() {
  const project = projects.find((item) => item.id === "cansat")!;
  return (
    <Section
      id="cansat"
      eyebrow={cansat.eyebrow}
      title={project.name}
      className="tinted"
    >
      <Pending>{project.status}</Pending>
      <p className="section-description">{project.description}</p>
      <h2 className="content-heading">{cansat.aboutTitle}</h2>
      <p>{cansat.about}</p>
      <div className="about-grid">
        {cansat.facts.map((fact) => (
          <article key={fact.title}>
            <h3>{fact.title}</h3>
            <p>{fact.text}</p>
          </article>
        ))}
      </div>
      <h2 className="content-heading detail-heading">
        {cansat.technicalTitle}
      </h2>
      <p>{cansat.technical}</p>
      <a className="text-link" href={pageUrl("projetos/")}>
        {cansat.back} ↗
      </a>
    </Section>
  );
}
