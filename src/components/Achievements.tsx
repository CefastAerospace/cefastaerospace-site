import { copy } from "../data/copy";
import { achievements } from "../data/achievements";
import { Section, Pending } from "./Shared";
export default function Achievements() {
  return (
    <Section
      id="conquistas"
      eyebrow={copy.achievementsEyebrow}
      title={copy.achievementsTitle}
    >
      <p className="section-description">{copy.achievementsIntro}</p>
      <div className="timeline">
        {achievements.map((a) => (
          <article key={a.id}>
            <div className="timeline-year">{a.year}</div>
            <div>
              <Pending>{a.result}</Pending>
              <h3>{a.competition}</h3>
              <p>{a.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
