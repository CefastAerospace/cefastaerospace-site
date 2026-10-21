import Achievements from '../components/Achievements';
import { usePageTitle } from './usePageTitle';

export default function Conquistas() {
  usePageTitle('Conquistas');
  return <Achievements />;
}
