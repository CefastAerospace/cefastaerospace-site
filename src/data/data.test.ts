import { join } from 'node:path';
import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { contacts, navigation } from './site';
import { sponsors } from './sponsors';

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

  it('contatos usam apenas https://, mailto: ou tel:', () => {
    contacts.forEach((c) => {
      if (c.url !== null) {
        const validPrefix = c.url.startsWith('https://') || c.url.startsWith('mailto:') || c.url.startsWith('tel:');
        expect(validPrefix).toBe(true);
        expect(c.url).not.toMatch(/\s/);
      }
    });
  });

  it('logos de patrocinadores existem em public/ e usam caminho relativo à base', () => {
    // Regressão: logos com caminho absoluto quebram no GitHub Pages (base /cefastaerospace-site/) → 404 invisível.
    sponsors.forEach((s) => {
      if (s.logo) {
        expect(s.logo.startsWith('/'), `logo "${s.name}" não pode usar caminho absoluto`).toBe(false);
        expect(existsSync(join(process.cwd(), 'public', s.logo)), `logo "${s.name}" (${s.logo}) não existe em public/`).toBe(true);
      }
    });
  });
});
