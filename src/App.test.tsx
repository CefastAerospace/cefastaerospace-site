import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import { AppRoutes } from './App';
import { navigation } from './data/site';

const renderAt = (route: string) =>
  render(<MemoryRouter initialEntries={[route]}><AppRoutes/></MemoryRouter>);

describe('App (estrutura multi-página)', () => {
  it('rota inicial renderiza o Hero da página Início', () => {
    renderAt('/');
    expect(screen.getByRole('heading', { level: 1, name: /CEFAST\s?AEROSPACE./i })).toBeInTheDocument();
  });

  it('cada item da navegação aponta para a rota da sua página', () => {
    renderAt('/');
    const nav = screen.getByRole('navigation', { name: 'Navegação principal' });
    const links = Array.from(nav.querySelectorAll('a'));
    navigation.forEach((n) => {
      const link = links.find((a) => a.textContent?.includes(n.label));
      expect(link, `link do menu "${n.label}"`).toBeDefined();
      expect(link!.getAttribute('href')).toBe(n.path);
    });
  });

  it('cada menu tem a sua própria página com o título da seção', () => {
    const cases: Record<string, RegExp> = {
      '/sobre': /Sobre a Aerospace/,
      '/projetos': /Ideias que ganham forma\./,
      '/conquistas': /Cada desafio, um novo horizonte\./,
      '/equipe': /Pessoas por trás das ideias\./,
      '/patrocinadores': /Juntos, podemos ir além\./,
      '/contato': /O próximo passo começa/,
    };
    Object.entries(cases).forEach(([route, title]) => {
      const view = renderAt(route);
      expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument();
      view.unmount();
    });
  });

  it('nenhuma página exibe o rótulo numerado "NN / EYEBROW" no topo das seções', () => {
    // Regressão: feedback do board (22/10/2026) — remover o "01 / QUEM SOMOS" de todas as páginas.
    ['/sobre', '/projetos', '/conquistas', '/equipe', '/patrocinadores', '/contato', '/projetos/fcp-01'].forEach((route) => {
      const view = renderAt(route);
      expect(view.container.querySelector('.section-label'), `página ${route}`).toBeNull();
      view.unmount();
    });
  });

  it('os CTAs do Hero navegam para equipe e patrocinadores', () => {
    renderAt('/');
    expect(screen.getByRole('link', { name: /Conheça a equipe/ })).toHaveAttribute('href', '/equipe');
    expect(screen.getByRole('link', { name: /Seja um patrocinador/ })).toHaveAttribute('href', '/patrocinadores');
  });

  it('rota desconhecida volta para o Início', () => {
    renderAt('/nao-existe');
    expect(screen.getByRole('heading', { level: 1, name: /CEFAST/i })).toBeInTheDocument();
  });

  it('conquistas exibem somente a história, em ordem crescente (sem 2026)', () => {
    // Regressão: a timeline misturou "2026 em preparação" com conquistas passadas.
    renderAt('/conquistas');
    const anos = screen.getAllByText(/^\d{4}$/).map((el) => Number(el.textContent));
    expect(anos).toEqual([2020, 2022, 2025]);
    expect(screen.queryByText(/Em preparação/i)).not.toBeInTheDocument();
  });

  it('exibe o skip-link e o landmark principal em qualquer página', () => {
    renderAt('/equipe');
    expect(screen.getByRole('link', { name: 'Pular para o conteúdo' })).toHaveAttribute('href', '#conteudo');
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('menu mobile abre e fecha com clique e tecla ESC', async () => {
    const user = userEvent.setup();
    renderAt('/');
    const toggle = screen.getByRole('button', { name: 'Abrir menu' });
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await user.keyboard('{Escape}');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });

  it('menu mobile fecha ao escolher uma página', async () => {
    const user = userEvent.setup();
    renderAt('/');
    const nav = screen.getByRole('navigation', { name: 'Navegação principal' });
    const toggle = screen.getByRole('button', { name: 'Abrir menu' });
    await user.click(toggle);
    await user.click(within(nav).getByRole('link', { name: 'Equipe' }));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByRole('heading', { level: 2, name: /Pessoas por trás das ideias\./ })).toBeInTheDocument();
  });
});
