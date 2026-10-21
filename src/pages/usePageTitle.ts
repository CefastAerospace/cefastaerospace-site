import { useEffect } from 'react';

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title ? `${title} | CEFAST Aerospace` : 'CEFAST Aerospace | Engenharia que vai além';
  }, [title]);
}
