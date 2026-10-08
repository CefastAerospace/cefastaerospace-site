import { copy } from "../data/copy";
import {
  ArrowUpRight,
  Instagram,
  Facebook,
  Linkedin,
  Github,
  Youtube,
  Mail,
} from "lucide-react";
import { contacts } from "../data/site";
import { Section } from "./Shared";
const icons = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
  github: Github,
  email: Mail,
};
export default function Contact() {
  return (
    <Section
      id="contato"
      eyebrow={copy.contactEyebrow}
      title={copy.contactTitle}
      className="contact-section"
    >
      <div className="contact-grid">
        <div>
          <p className="lead-small">{copy.contactLead}</p>
          <p>{copy.contactIntro}</p>
          <p className="contact-note">{copy.contactNote}</p>
        </div>
        <ul className="contact-list">
          {contacts.map((c) => {
            const Icon = icons[c.icon];
            const content = (
              <>
                <span>
                  <Icon size={19} />
                  {c.name}
                </span>
                {c.url ? (
                  <ArrowUpRight size={18} />
                ) : (
                  <small>{copy.contactPending}</small>
                )}
              </>
            );
            return (
              <li key={c.name}>
                {c.url ? (
                  <a
                    href={c.url}
                    target={c.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <div>{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
