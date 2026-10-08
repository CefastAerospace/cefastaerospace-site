import { Section, Pending } from "./Shared";
import { fcp } from "../data/projects";
import { pageUrl } from "../data/pages";
import { copy } from "../data/copy";
export default function FcpProject() {
  return (
    <Section
      id="fcp-01"
      eyebrow={fcp.eyebrow}
      title={fcp.title}
      className="tinted"
    >
      <Pending>{fcp.status}</Pending>
      <p className="section-description">{fcp.intro}</p>
      <h2 className="content-heading">{fcp.missionTitle}</h2>
      <p>{fcp.mission}</p>
      <h2 className="content-heading">{fcp.specsTitle}</h2>
      <div className="about-grid">
        {fcp.specs.map((s) => (
          <article key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
      <h2 className="content-heading detail-heading">{fcp.subsystemsTitle}</h2>
      <div className="about-grid">
        {fcp.subsystems.map((s) => (
          <article key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </article>
        ))}
      </div>
      <h2 className="content-heading detail-heading">{fcp.timelineTitle}</h2>
      <div className="timeline">
        {fcp.timeline.map((s) => (
          <article key={s.title}>
            <div className="timeline-year">
              {s.date ? (
                <time dateTime={s.date}>{s.date}</time>
              ) : (
                copy.datePending
              )}
            </div>
            <div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          </article>
        ))}
      </div>
      <h2 className="content-heading detail-heading">{fcp.competitionTitle}</h2>
      <p>{fcp.competition}</p>
      <a className="text-link" href={pageUrl("projetos/")}>
        {fcp.back} ↗
      </a>
    </Section>
  );
}
