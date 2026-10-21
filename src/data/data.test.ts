import { describe, expect, it } from 'vitest';
import { contacts, navigation } from './site';

describe('src/data integrity', () => {
  it('os ids do menu são únicos e possuem rótulos', () => {
    const ids = navigation.map((n) => n.id);
    expect(new Set(ids).size).toBe(ids.length);
    navigation.forEach((n) => {
      expect(n.label.trim().length).toBeGreaterThan(0);
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
