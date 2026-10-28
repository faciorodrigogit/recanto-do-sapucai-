import { galeria } from '@/lib/content';
import { Photo } from './Photo';

export function Gallery() {
  return (
    <section id="galeria" className="bg-floresta pt-[100px] pb-[110px] text-center max-tablet:py-[72px]">
      <div className="container-site">
        <h2 className="display section-title reveal !text-caqui">{galeria.titulo}</h2>
        <p className="reveal mx-auto -mt-7 mb-[52px] max-w-[520px] text-[15.5px] text-texto-creme-2">{galeria.lead}</p>
        <div className="grid gap-3">
          {galeria.blocos.map((bloco, b) => (
            <div
              key={b}
              className={`reveal grid grid-rows-[260px_260px] gap-3 max-tablet:grid-cols-1 max-tablet:grid-rows-none max-tablet:auto-rows-auto ${
                b % 2 ? 'grid-cols-[1fr_1fr_1.25fr]' : 'grid-cols-[1.25fr_1fr_1fr]'
              }`}
            >
              {bloco.map((item) => {
                const tall = item.variante === 'tall';
                const wide = item.variante === 'wide';
                const pos = b % 2 && tall ? 'col-start-3 row-start-1' : '';
                return (
                  <figure
                    key={item.foto}
                    className={`photo group rounded-[15px] max-tablet:h-[240px] ${tall ? `row-span-2 ${pos} max-tablet:col-auto max-tablet:row-auto max-tablet:!h-[340px]` : ''} ${
                      wide ? 'col-span-2 max-tablet:col-span-1' : ''
                    }`}
                  >
                    <Photo
                      photo={item.foto}
                      sizes={wide ? '(max-width: 720px) 100vw, 700px' : '(max-width: 720px) 100vw, 420px'}
                      className="group-hover:scale-[1.04]"
                    />
                    <figcaption className="absolute bottom-3 left-3.5 text-xs tracking-[0.14em] text-creme uppercase [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
                      {item.legenda}
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
