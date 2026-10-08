import { copy } from "../data/copy";
import { pageUrl, currentPath } from "../data/pages";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation } from "../data/site";
import { Brand } from "./Shared";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const escape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <header className={`navbar ${scrolled || open ? "solid" : ""}`}>
      <div className="container nav-inner">
        <Brand />
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="navigation"
          aria-label={open ? copy.closeMenu : copy.openMenu}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="navigation"
          aria-label={copy.mainNavigation}
          className={open ? "open" : ""}
        >
          {navigation
            .filter((n) => n.id !== "fcp-01")
            .map((n) => (
              <a
                key={n.id}
                href={pageUrl(n.path)}
                aria-current={
                  currentPath === n.path.replace(/\/$/, "") ? "page" : undefined
                }
                onClick={() => setOpen(false)}
              >
                {n.label}
                {n.id === "contato" && <ArrowUpRight size={14} />}
              </a>
            ))}
        </nav>
      </div>
    </header>
  );
}
