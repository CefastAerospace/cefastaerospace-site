import '@testing-library/jest-dom/vitest';

// jsdom does not implement IntersectionObserver; framer-motion's
// whileInView viewport feature requires it, so provide a minimal stub.
if (typeof window.IntersectionObserver === 'undefined') {
  class IntersectionObserverStub {
    root: Element | null = null;
    rootMargin = '';
    thresholds: number[] = [];
    disconnect() {}
    observe() {}
    unobserve() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }
  const Observer = IntersectionObserverStub as unknown as typeof IntersectionObserver;
  Object.defineProperty(window, 'IntersectionObserver', { writable: true, value: Observer });
  Object.defineProperty(globalThis, 'IntersectionObserver', { writable: true, value: Observer });
}
// jsdom does not implement window.matchMedia; framer-motion's
// useReducedMotion needs it, so provide a minimal no-op stub.
if (typeof window.matchMedia === 'undefined') {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });
}
