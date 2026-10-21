import { join } from 'node:path';
import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { contacts, navigation } from './site';

describe('src/data integrity', () => {
  it('os ids e paths do menu são únicos e possuem rótulos', () => {
    const ids = navigation.map((n) => n.id);
    const paths = navigation.map((n) => n.path);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(paths).size).toBe(paths.length);
    navigation.forEach((n) => {
      expect(n.label.trim().length).toBeGreaterThan(0);
      expect(n.path.startsWith('/')).toBe(true);
    });
  });

  it('cada path do menu tem uma rota correspondente no AppRoutes do App.tsx', () => {
    // Guarda de consistência entre o menu (fonte da verdade) e as rotas declaradas.
    const source = readFileSync(join(process.cwd(), 'src/App.tsx'), 'utf8');
    navigation.forEach((n) => {
      if (n.path === '/') {
        expect(source).toContain('<Route index');
      } else {
        expect(source).toContain(`path="${n.path.slice(1)}"`);
      }
    });
  });

  it('contatos usam apenas https:// ou mailto:', () => {
    contacts.forEach((c) => {
      if (c.url !== null) {
        expect(c.url.startsWith('https://') || c.url.startsWith('mailto:')).toBe(true);
        expect(c.url).not.toMatch(/\s/);
      }
    });
  });
});
