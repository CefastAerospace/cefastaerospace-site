import { copy } from "../data/copy";
import { pageUrl, currentPath } from "../data/pages";
import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const Heading =
    (
      {
        equipe: "sobre",
        projetos: "projetos",
        "projetos/fcp-01": "fcp-01",
        "projetos/cansat": "cansat",
        patrocinadores: "patrocinadores",
        contato: "contato",
      } as Record<string, string>
    )[currentPath] === id
      ? "h1"
      : "h2";
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`section ${className}`}
    >
      <div className="container">
        <motion.div
          initial={false}
          whileInView={reduced ? {} : { opacity: [0.7, 1], y: [12, 0] }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
        >
          {Heading === "h1" && <InstitutionLabel />}
          <div
            className={`section-label${Heading === "h1" ? " page-section-label" : ""}`}
          >
            <span>{eyebrow}</span>
          </div>
          <Heading className="section-title" id={`${id}-title`}>
            {title}
          </Heading>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
export function InstitutionLabel() {
  return (
    <div className="eyebrow">
      <span className="tiny-line" aria-hidden="true" />
      {copy.heroEyebrow}
    </div>
  );
}
export function Pending({
  children = copy.contentPending,
}: {
  children?: ReactNode;
}) {
  return <span className="pending">{children}</span>;
}
export function Brand() {
  return (
    <a href={pageUrl("")} className="brand" aria-label={copy.homeLabel}>
      <img
        src={`${import.meta.env.BASE_URL}aerospace-logo.jpg`}
        alt={copy.logoAlt}
        width="70"
        height="70"
      />
      <span>
        <small>{copy.logoPrefix}</small> {copy.logoName}
      </span>
    </a>
  );
}
