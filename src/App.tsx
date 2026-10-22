import { useEffect } from 'react';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import FCP01 from './pages/FCP01';
import Conquistas from './pages/Conquistas';
import Equipe from './pages/Equipe';
import Patrocinadores from './pages/Patrocinadores';
import Contato from './pages/Contato';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  return <MotionConfig reducedMotion="user"><ScrollToTop/><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Navbar/><main id="conteudo"><Outlet/></main><Footer/></MotionConfig>;
}

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Inicio/>} />
        <Route path="sobre" element={<Sobre/>} />
        <Route path="projetos" element={<Projetos/>} />
        <Route path="projetos/fcp-01" element={<FCP01/>} />
        <Route path="conquistas" element={<Conquistas/>} />
        <Route path="equipe" element={<Equipe/>} />
        <Route path="patrocinadores" element={<Patrocinadores/>} />
        <Route path="contato" element={<Contato/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return <BrowserRouter basename={import.meta.env.BASE_URL}><AppRoutes/></BrowserRouter>;
}
