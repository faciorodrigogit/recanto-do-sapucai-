import { sobre } from '@/lib/content';
import { Photo } from './Photo';

export function UnwindSplit() {
  return (
    <section id="sobre" className="grid min-h-[620px] grid-cols-[60%_40%] max-nav:grid-cols-1">
      <div className="flex items-center justify-center bg-marrom-split px-[72px] py-[88px] max-nav:px-8 max-nav:py-[72px]">
        <div className="reveal max-w-[470px]">
          <h2 className="display mb-7 text-[clamp(24px,2.5vw,31px)] leading-[1.45] tracking-[0.1em] text-titulo-split">
            {sobre.titulo[0]}
            <br />
            {sobre.titulo[1]}
          </h2>
          {sobre.paragrafos.map((p) => (
            <p key={p.slice(0, 20)} className="mb-3.5 text-justify text-[15.5px] leading-[1.65] font-light hyphens-auto text-texto-creme">
              {p}
            </p>
          ))}
          <a href="#historia" className="btn btn-creme mt-6">
            {sobre.cta}
          </a>
        </div>
      </div>
      <figure className="photo min-h-full max-nav:min-h-[460px]">
        <Photo photo={sobre.foto} sizes="(max-width: 900px) 100vw, 40vw" />
      </figure>
    </section>
  );
}
