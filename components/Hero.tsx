import { hero } from '@/lib/content';
import { Photo } from './Photo';

export function Hero() {
  return (
    <section
      aria-label="Boas-vindas"
      className="hero-overlay relative grid h-[88vh] max-h-[820px] min-h-[600px] place-items-center overflow-hidden text-center text-palha max-tablet:h-[82vh] max-tablet:min-h-[540px]"
    >
      <div className="photo absolute inset-0">
        <Photo photo={hero.foto} sizes="100vw" priority className="scale-[1.03]" />
      </div>
      <div className="relative z-[2] px-6">
        <p className="mb-1.5 font-display text-base tracking-[0.35em] text-caqui-claro uppercase max-tablet:text-[13px]">
          {hero.kicker}
        </p>
        <h1 className="mr-[-0.15em] font-display text-[clamp(52px,12vw,172px)] leading-none font-normal tracking-[0.15em] text-palha uppercase [text-shadow:0_2px_30px_rgba(0,0,0,0.25)]">
          {hero.titulo}
        </h1>
        <p className="mt-3.5 mb-[30px] text-[12.5px] font-normal tracking-[0.3em] text-hero-sub uppercase max-tablet:text-[11px] max-tablet:tracking-[0.24em]">
          {hero.subtitulo}
        </p>
        <a href="#reserva" className="btn btn-caqui !px-[26px] !py-[11px] !text-[11px]">
          {hero.cta}
        </a>
      </div>
    </section>
  );
}
