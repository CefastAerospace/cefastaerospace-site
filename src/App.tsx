import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Team from "./components/Team";
import Sponsors from "./components/Sponsors";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FcpProject from "./components/FcpProject";
import CansatProject from "./components/CansatProject";
import SpaceBackground from "./components/SpaceBackground";
import { currentPath } from "./data/pages";
import { copy } from "./data/copy";
export default function App() {
  const home = currentPath === "";
  const content = home ? (
    <>
      <Hero />
      <About />
      <Achievements />
    </>
  ) : currentPath === "equipe" ? (
    <>
      <About />
      <Team />
      <Achievements />
    </>
  ) : currentPath === "projetos" ? (
    <Projects />
  ) : currentPath === "projetos/fcp-01" ? (
    <FcpProject />
  ) : currentPath === "projetos/cansat" ? (
    <CansatProject />
  ) : currentPath === "patrocinadores" ? (
    <Sponsors />
  ) : (
    <Contact />
  );
  return (
    <MotionConfig reducedMotion="user">
      <div id="topo" />
      <a className="skip-link" href="#conteudo">
        {copy.skip}
      </a>
      <Navbar />
      <main id="conteudo" className={home ? "home-page" : "inner-page"}>
        <SpaceBackground />
        {content}
      </main>
      <Footer />
    </MotionConfig>
  );
}
