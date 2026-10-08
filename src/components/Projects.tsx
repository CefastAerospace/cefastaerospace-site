import { copy } from "../data/copy";
import { assetUrl, currentPath } from "../data/pages";
import { ArrowUpRight, ScanLine } from "lucide-react";
import { useState } from "react";
import {
  projects,
  projectStatuses,
  type ProjectStatus,
} from "../data/projects";
import { Section, Pending } from "./Shared";
export default function Projects() {
  const [status, setStatus] = useState<ProjectStatus | "all">("all");
  const visible = projects.filter(
    (project) => status === "all" || project.lifecycle === status,
  );
  const Heading = currentPath === "projetos" ? "h2" : "h3";
  return (
    <Section
      id="projetos"
      eyebrow={copy.projectsEyebrow}
      title={copy.projectsTitle}
      className="tinted"
    >
      <p className="section-description">{copy.projectsIntro}</p>
      <div
        className="project-filters"
        role="group"
        aria-label={copy.projectFilters}
      >
        {[
          { id: "all" as const, label: copy.allProjects },
          ...projectStatuses,
        ].map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={status === item.id}
            aria-controls="project-results"
            onClick={() => setStatus(item.id)}
          >
            {item.label} (
            {
              projects.filter(
                (project) => item.id === "all" || project.lifecycle === item.id,
              ).length
            }
            )
          </button>
        ))}
      </div>
      <p className="status-note">{copy.projectStatusNote}</p>
      <div id="project-results" aria-live="polite" aria-atomic="true">
        {visible.length === 0 && (
          <p className="empty-projects">{copy.noProjects}</p>
        )}
        <div className="project-grid">
          {visible.map((p, i) => (
            <article className="project-card" key={p.id}>
              <div className="project-image">
                {p.image ? (
                  <img
                    src={assetUrl(p.image)}
                    alt={p.imageAlt}
                    loading="lazy"
                  />
                ) : (
                  <>
                    <ScanLine size={50} strokeWidth={0.7} />
                    <span>{copy.projectImagePending}</span>
                    <b aria-hidden="true">0{i + 1}</b>
                  </>
                )}
              </div>
              <div className="project-body">
                <Pending>{p.status}</Pending>
                <p className="lifecycle">
                  {
                    projectStatuses.find((item) => item.id === p.lifecycle)
                      ?.label
                  }
                </p>
                <p className="overline">{p.category}</p>
                <Heading className="content-heading">
                  {p.url ? <a href={assetUrl(p.url)}>{p.name}</a> : p.name}
                </Heading>
                <p>{p.description}</p>
                <div className="tags">
                  {p.technologies.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                {p.url ? (
                  <a className="button primary" href={assetUrl(p.url)}>
                    {copy.projectLinkPrefix} {p.name}
                    <ArrowUpRight size={17} />
                  </a>
                ) : (
                  <span className="unavailable">
                    {copy.projectDetailsPending}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
