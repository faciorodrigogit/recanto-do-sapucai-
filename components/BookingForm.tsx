'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import { site } from '@/lib/content';
import { Icon } from './Icon';

const fmt = (v: string) => {
  const [y, m, d] = v.split('-');
  return `${d}/${m}/${y}`;
};

const opcoesHospedes = Array.from({ length: site.capacidade }, (_, i) => i + 1);

/** Barra de reserva: abre o anúncio no Airbnb com datas e hóspedes preenchidos. */
export function BookingForm() {
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const [hospedes, setHospedes] = useState<number>(site.capacidade);
  const [aberto, setAberto] = useState(false);
  const [msg, setMsg] = useState('');
  const [hoje, setHoje] = useState('');
  const ddRef = useRef<HTMLDivElement>(null);

  useEffect(() => setHoje(new Date().toISOString().slice(0, 10)), []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ddRef.current && !ddRef.current.contains(e.target as Node)) setAberto(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false);
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const onCheckin = (v: string) => {
    setCheckin(v);
    if (checkout && v && checkout <= v) setCheckout('');
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!checkin || !checkout) {
      setMsg('Escolha as datas de check-in e check-out para ver a disponibilidade.');
      return;
    }
    const noites = Math.round((new Date(checkout).getTime() - new Date(checkin).getTime()) / 864e5);
    const url = new URL(site.airbnbUrl);
    url.searchParams.set('check_in', checkin);
    url.searchParams.set('check_out', checkout);
    url.searchParams.set('adults', String(hospedes));
    setMsg(`${noites} ${noites === 1 ? 'noite' : 'noites'} · ${hospedes} ${hospedes === 1 ? 'hóspede' : 'hóspedes'} — abrindo o Airbnb para confirmar.`);
    window.open(url.toString(), '_blank', 'noopener');
  };

  const openPicker = (el: HTMLInputElement) => {
    try {
      el.showPicker();
    } catch {
      /* navegador sem suporte: o input nativo abre normalmente */
    }
  };

  const valueClass = (filled: boolean) =>
    `truncate text-[14.5px] ${filled ? 'font-medium text-texto' : 'font-normal text-placeholder'}`;

  return (
    <>
    <form
      onSubmit={onSubmit}
      noValidate
      className="mx-auto flex max-w-[860px] items-stretch rounded-full bg-creme p-2 text-left shadow-reserva max-nav:flex-col max-nav:rounded-[20px] max-nav:p-2.5"
    >
      <label className="field">
        <Icon name="calendar" className="text-oliva-escuro" />
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="text-[10.5px] font-medium tracking-[0.18em] text-texto-2 uppercase">Check-in</span>
          <span className={valueClass(!!checkin)}>{checkin ? fmt(checkin) : 'Escolher data'}</span>
        </span>
        <Icon name="chevron" className="!h-4 !w-4 text-texto-2" />
        <input
          type="date"
          aria-label="Data de check-in"
          min={hoje}
          value={checkin}
          onClick={(e) => openPicker(e.currentTarget)}
          onChange={(e) => onCheckin(e.target.value)}
          className="absolute inset-0 h-full w-full cursor-pointer border-0 opacity-0"
        />
      </label>

      <label className="field">
        <Icon name="calendar" className="text-oliva-escuro" />
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="text-[10.5px] font-medium tracking-[0.18em] text-texto-2 uppercase">Check-out</span>
          <span className={valueClass(!!checkout)}>{checkout ? fmt(checkout) : 'Escolher data'}</span>
        </span>
        <Icon name="chevron" className="!h-4 !w-4 text-texto-2" />
        <input
          type="date"
          aria-label="Data de check-out"
          min={checkin || hoje}
          value={checkout}
          onClick={(e) => openPicker(e.currentTarget)}
          onChange={(e) => setCheckout(e.target.value)}
          className="absolute inset-0 h-full w-full cursor-pointer border-0 opacity-0"
        />
      </label>

      <div
        ref={ddRef}
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={aberto}
        onClick={() => setAberto((v) => !v)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setAberto((v) => !v);
          }
        }}
        className="field"
      >
        <Icon name="users" className="text-oliva-escuro" />
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="text-[10.5px] font-medium tracking-[0.18em] text-texto-2 uppercase">Hóspedes</span>
          <span className={valueClass(true)}>
            {hospedes} {hospedes === 1 ? 'hóspede' : 'hóspedes'}
          </span>
        </span>
        <Icon
          name="chevron"
          className={`!h-4 !w-4 text-texto-2 transition-transform duration-200 ease-editorial ${aberto ? 'rotate-180' : ''}`}
        />
        <ul
          role="listbox"
          className={`absolute top-[calc(100%+12px)] left-0 z-[5] min-w-[220px] list-none rounded-2xl bg-creme p-2 shadow-dropdown transition-[opacity,transform,visibility] duration-200 ease-editorial max-nav:right-0 max-nav:min-w-0 ${
            aberto ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1.5 opacity-0'
          }`}
        >
          {opcoesHospedes.map((n) => (
            <li
              key={n}
              role="option"
              aria-selected={n === hospedes}
              onClick={(e) => {
                e.stopPropagation();
                setHospedes(n);
                setAberto(false);
              }}
              className="cursor-pointer rounded-[10px] px-3.5 py-2.5 text-[14.5px] transition-colors duration-150 hover:bg-[rgba(195,180,123,0.35)] aria-selected:bg-[rgba(195,180,123,0.35)]"
            >
              {n} {n === 1 ? 'hóspede' : 'hóspedes'}
            </li>
          ))}
        </ul>
      </div>

      <button type="submit" className="btn btn-oliva flex-none !px-[30px] whitespace-nowrap max-nav:mt-1.5 max-nav:!p-4">
        Ver disponibilidade
      </button>
    </form>
    <p aria-live="polite" className="mt-[22px] min-h-[22px] text-sm tracking-[0.04em] text-caqui-claro">
      {msg}
    </p>
    </>
  );
}
