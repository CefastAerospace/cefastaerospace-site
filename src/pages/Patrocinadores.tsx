import Sponsors from '../components/Sponsors';
import { usePageTitle } from './usePageTitle';

export default function Patrocinadores() {
  usePageTitle('Patrocinadores');
  return <Sponsors />;
}
