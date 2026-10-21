import About from '../components/About';
import { usePageTitle } from './usePageTitle';

export default function Sobre() {
  usePageTitle('Sobre');
  return <About />;
}
