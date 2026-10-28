'use client';

import { useEffect, useState } from 'react';
import { nav, site } from '@/lib/content';
import { Icon } from './Icon';
import { Logo } from './Logo';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const linkClass = 'nav-link focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-caqui';

  return (
    <>
      <header
        id="topo"
        className={`sticky top-0 z-50 border-b border-[rgba(66,52,15,0.12)] bg-creme transition-shadow duration-300 ease-editorial ${
          scrolled ? 'shadow-header' : ''
        }`}
      >
        <div className="mx-auto grid h-20 max-w-[1240px] grid-cols-[1fr_auto_1fr] items-center px-10 max-nav:h-[72px] max-nav:px-5">
          <nav
            aria-label="Navegação principal"
            className="flex justify-end gap-12 pr-14 text-[14.5px] font-medium text-texto max-wide:gap-7 max-wide:pr-9 max-wide:text-sm max-nav:hidden"
          >
            {nav.esquerda.map((l, i) => (
              <a key={l.href} href={l.href} className={`${linkClass} ${i === 0 ? 'active' : ''}`}>
                {l.label}
              </a>
            ))}
          </nav>

          <a href="#topo" aria-label={`${site.titulo} — página inicial`} className="block h-11 w-11 text-logo max-nav:col-start-2">
            <Logo className="h-full w-full" />
          </a>

          <nav
            aria-label="Navegação secundária"
            className="flex justify-start gap-12 pl-14 text-[14.5px] font-medium text-texto max-wide:gap-7 max-wide:pl-9 max-wide:text-sm max-nav:hidden"
          >
            {nav.direita.map((l) => (
              <a key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            aria-label="Abrir menu"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen(true)}
            className="hidden cursor-pointer justify-self-end border-0 bg-transparent p-2 text-texto max-nav:col-start-3 max-nav:block"
          >
            <Icon name="menu" className="!h-[26px] !w-[26px]" />
          </button>
        </div>
      </header>

      <div
        id="menu-mobile"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] flex flex-col items-center justify-center gap-7 bg-creme transition-[opacity,visibility] duration-300 ease-editorial ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
          className="absolute top-6 right-5 cursor-pointer border-0 bg-transparent p-2 text-texto"
        >
          <Icon name="x" className="!h-7 !w-7" />
        </button>
        <span className="mb-3 block h-14 w-14 text-logo">
          <Logo className="h-full w-full" />
        </span>
        {[...nav.esquerda, ...nav.direita].map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setOpen(false)}
            className="font-display text-[26px] tracking-[0.12em] text-titulo-claro uppercase"
          >
            {l.label}
          </a>
        ))}
      </div>
    </>
  );
}
