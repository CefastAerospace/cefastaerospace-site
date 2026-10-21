import Contact from '../components/Contact';
import { usePageTitle } from './usePageTitle';

export default function Contato() {
  usePageTitle('Contato');
  return <Contact />;
}
