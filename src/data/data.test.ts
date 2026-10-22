import { join } from 'node:path';
import { existsSync, readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { contacts, navigation, metrics } from './site';
import { sponsors } from './sponsors';
import { achievements } from './achievements';

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

  it('conquistas têm anos reais distintos e em ordem crescente (história, sem eventos futuros)', () => {
    // Regressão: a linha do tempo já apareceu bagunçada; eventos "em preparação" (ex. 2026) devem
    // ficar em projects.ts, nunca aqui — componente também ordena, mas os dados não podem mentir.
    const years = achievements.map((a) => Number.parseInt(a.year, 10));
    expect(years.length).toBeGreaterThan(0);
    achievements.forEach((a) => expect(Number.isFinite(Number.parseInt(a.year, 10)) && /^\d{4}$/.test(a.year), `ano inválido em "${a.id}"`).toBe(true));
    years.forEach((y) => expect(y, 'conquistas guardam somente anos passados').toBeLessThanOrEqual(new Date().getFullYear()));
    expect(new Set(years).size).toBe(years.length);
    expect(years).toEqual([...years].sort((a, b) => a - b));
    achievements.forEach((a) => {
      expect(a.result.trim().length).toBeGreaterThan(0);
      expect(a.competition.trim().length).toBeGreaterThan(0);
    });
  });

  it('métricas têm número + rótulo + descrição, sem typo "A confirmar" e sem "Plataformas"', () => {
    // Decisão do board: nada de placeholder fixo na faixa de métricas; volta "Projetos".
    expect(metrics.map((m) => m.id)).toEqual(['membros', 'projetos', 'conquistas', 'anos']);
    metrics.forEach((m) => {
      expect(m.value.trim().length).toBeGreaterThan(0);
      expect(m.label.trim().length).toBeGreaterThan(0);
      expect(m.description.trim().length).toBeGreaterThan(0);
      expect(`${m.value} ${m.label} ${m.description}`).not.toContain('A confirmar');
    });
    expect(metrics.some((m) => m.label === 'Plataformas')).toBe(false);
    expect(metrics.some((m) => m.label === 'Projetos')).toBe(true);
  });
});
