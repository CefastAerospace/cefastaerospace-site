import { copy } from "../data/copy";
import { UserRound, Linkedin, Github } from "lucide-react";
import { team, sectors } from "../data/team";
import { Section } from "./Shared";
import { assetUrl } from "../data/pages";
export default function Team() {
  return (
    <Section
      id="equipe"
      eyebrow={copy.teamEyebrow}
      title={copy.teamTitle}
      className="tinted"
    >
      <p className="section-description">{copy.teamIntro}</p>
      <div className="about-grid sector-grid">
        {sectors.map((s) => (
          <article key={s.name}>
            <h3>{s.name}</h3>
            <p>{s.description}</p>
          </article>
        ))}
      </div>
      <div className="team-grid">
        {team.map((m) => (
          <article key={m.id} className="member">
            <div className="portrait">
              {m.photo ? (
                <img src={assetUrl(m.photo)} alt={m.name} loading="lazy" />
              ) : (
                <>
                  <UserRound size={48} strokeWidth={0.8} />
                  <span>{copy.memberPhotoPending}</span>
                </>
              )}
            </div>
            <h3>{m.name}</h3>
            <p>{m.role}</p>
            <small>{m.area ?? copy.areaPending}</small>
            <div className="member-socials">
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${copy.linkedinLabel} ${m.name}`}
                >
                  <Linkedin size={18} />
                </a>
              )}
              {m.github && (
                <a
                  href={m.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${copy.githubLabel} ${m.name}`}
                >
                  <Github size={18} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
