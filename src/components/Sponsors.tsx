import { copy } from "../data/copy";
import { pageUrl, assetUrl } from "../data/pages";
import { ArrowUpRight, Plus } from "lucide-react";
import { sponsors, sponsorTiers } from "../data/sponsors";
import { Section } from "./Shared";
export default function Sponsors() {
  return (
    <Section
      id="patrocinadores"
      eyebrow={copy.sponsorsEyebrow}
      title={copy.sponsorsTitle}
    >
      <p className="section-description">{copy.sponsorsIntro}</p>
      <div className="sponsor-tiers">
        {sponsorTiers.map((t) => (
          <div className={`sponsor-tier ${t.id}`} key={t.id}>
            <h2 className="tier-title">{t.label}</h2>
            {!sponsors.some((s) => s.tier === t.id) && (
              <div className="sponsor-slot">
                <Plus size={22} />
                <span>{copy.sponsorshipOpen}</span>
              </div>
            )}
            {sponsors
              .filter((s) => s.tier === t.id)
              .map((s) => {
                const content = s.logo ? (
                  <img src={assetUrl(s.logo)} alt={s.name} loading="lazy" />
                ) : (
                  <>
                    <Plus size={22} />
                    <span>{s.name}</span>
                  </>
                );
                return s.url ? (
                  <a
                    className="sponsor-slot"
                    key={s.id}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="sponsor-slot" key={s.id}>
                    {content}
                  </div>
                );
              })}
          </div>
        ))}
      </div>
      <div className="partnership">
        <div>
          <span className="overline">{copy.partnershipEyebrow}</span>
          <h2 className="partnership-title">{copy.partnershipTitle}</h2>
        </div>
        <a href={pageUrl("contato/")} className="button primary">
          {copy.becomePartner}
          <ArrowUpRight size={18} />
        </a>
      </div>
    </Section>
  );
}
