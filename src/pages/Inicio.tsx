import Hero from '../components/Hero';
import { usePageTitle } from './usePageTitle';

export default function Inicio() {
  usePageTitle('');
  return <Hero />;
}
