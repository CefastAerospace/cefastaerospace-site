import { copy } from "../data/copy";
import { pageUrl, assetUrl } from "../data/pages";
import { projects } from "../data/projects";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { InstitutionLabel } from "./Shared";

export default function Hero() {
  const featured = projects.find((project) => project.id === "fcp-01")!;
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="container hero-content">
        <div className="hero-bottom">
          <div className="hero-intro">
            <InstitutionLabel />
            <h1 id="hero-title">
              <span>{copy.brandPrefix}</span>
              {copy.brandName}
              <span className="title-dot">.</span>
            </h1>
            <h2>{copy.heroTagline}</h2>
            <p>
              {copy.heroDescription}
              <br className="desktop-break" />
              {copy.heroInstitution}
            </p>
            <div className="hero-actions">
              <a className="button primary" href={pageUrl("equipe/")}>
                {copy.meetTeam}
                <ArrowUpRight size={18} />
              </a>
              <a className="button secondary" href={pageUrl("patrocinadores/")}>
                {copy.becomeSponsor}
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <article className="hero-feature" aria-labelledby="featured-title">
            <span className="overline">{copy.featuredProject}</span>
            <h2 id="featured-title">{featured.name}</h2>
            {featured.image ? (
              <img
                src={assetUrl(featured.image)}
                alt={featured.imageAlt}
                width="480"
                height="240"
              />
            ) : (
              <div className="featured-placeholder">
                {copy.featuredImagePending}
              </div>
            )}
            <p>{copy.featuredSummary}</p>
            <a className="button primary" href={pageUrl(featured.url!)}>
              {copy.featuredCta}
              <ArrowUpRight size={18} />
            </a>
          </article>
        </div>
        <div className="home-summaries">
          {copy.homeSummaries.map((summary) => (
            <a href={pageUrl(summary.path)} key={summary.path}>
              <h3>
                {summary.title}
                <ArrowUpRight size={18} />
              </h3>
              <p>{summary.text}</p>
            </a>
          ))}
        </div>
        <div className="hero-foot">
          <a href="#sobre">
            <ArrowDown size={16} />
            {copy.exploreHistory}
          </a>
          <span>{copy.heroFooter}</span>
        </div>
      </div>
    </section>
  );
}
