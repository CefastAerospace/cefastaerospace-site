import { copy } from "../data/copy";
import { about, metrics } from "../data/site";
import { Section } from "./Shared";
import { currentPath } from "../data/pages";
export default function About() {
  const Heading = currentPath === "equipe" ? "h2" : "h3";
  return (
    <Section
      id="sobre"
      eyebrow={copy.aboutEyebrow}
      title={copy.aboutTitle}
    >
      <div className="about-intro">
        <p className="lead">
          {copy.aboutLead}
          <br />
          {copy.aboutUniverse}
          <span>{copy.aboutPossibilities}</span>
        </p>
        <p>{copy.aboutIntro}</p>
      </div>
      <div className="about-grid">
        {about.map((a) => (
          <article key={a.title}>
            <Heading className="content-heading">{a.title}</Heading>
            {a.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            {a.items.length > 0 && (
              <ul className="content-list">
                {a.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {a.paragraphs.length === 0 && a.items.length === 0 && (
              <p>{a.pending}</p>
            )}
          </article>
        ))}
      </div>
      <dl className="metrics">
        {metrics.map((m) => (
          <div key={m.label}>
            <dt>{m.label}</dt>
            <dd>{m.value ?? "—"}</dd>
            {m.value === null && (
              <dd className="metric-note">{copy.pending}</dd>
            )}
          </div>
        ))}
      </dl>
    </Section>
  );
}
