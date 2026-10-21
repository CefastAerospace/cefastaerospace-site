import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from './App';
import { navigation } from './data/site';

describe('App', () => {
  it('exibe o skip-link e o landmark principal', () => {
    render(<App />);
    const skipLink = screen.getByRole('link', { name: 'Pular para o conteúdo' });
    expect(skipLink).toHaveAttribute('href', '#conteudo');
    expect(screen.getByRole('main')).toHaveAttribute('id', 'conteudo');
  });

  it('cada item do menu tem uma âncora #id que existe na página', () => {
    render(<App />);
    navigation.forEach((n) => {
      const links = screen.getAllByRole('link', { name: n.label });
      expect(links.length).toBeGreaterThan(0);
      expect(links[0]).toHaveAttribute('href', `#${n.id}`);
      expect(document.getElementById(n.id)).not.toBeNull();
    });
  });

  it('as seções principais são renderizadas com título', () => {
    render(<App />);
    const expectedTitles = [
      'Sobre a Aerospace',
      'Ideias que ganham forma.',
      'Cada desafio, um novo horizonte.',
      'Pessoas por trás das ideias.',
      'Juntos, podemos ir além.',
    ];
    expectedTitles.forEach((title) => {
      expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument();
    });
  });

  it('menu mobile abre e fecha com clique e tecla ESC', async () => {
    const user = userEvent.setup();
    render(<App />);
    const toggle = screen.getByRole('button', { name: 'Abrir menu' });
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    await user.keyboard('{Escape}');
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});
