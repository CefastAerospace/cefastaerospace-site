import { copy } from "../data/copy";
import { pageUrl } from "../data/pages";
import { Brand } from "./Shared";
import { navigation, contacts } from "../data/site";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <Brand />
          <p>
            {copy.teamDescription}
            <br />
            {copy.teamInstitution}
          </p>
          <a className="text-link" href="#topo">
            {copy.backToTop}
          </a>
        </div>
        <nav className="footer-nav" aria-label={copy.footerNavigation}>
          {navigation.slice(1).map((n) => (
            <a key={n.id} href={pageUrl(n.path)}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="footer-socials">
          {contacts.map((c) =>
            c.url ? (
              <a key={c.name} href={c.url}>
                {c.name}
              </a>
            ) : (
              <span key={c.name}>
                {c.name}
                {copy.pendingSuffix}
              </span>
            ),
          )}
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {copy.copyright}
          </span>
          <span>{copy.institution}</span>
        </div>
      </div>
    </footer>
  );
}
