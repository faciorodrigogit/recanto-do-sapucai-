import { pacotes } from '@/lib/content';
import { Photo } from './Photo';

/** Pacotes especiais — mesmo layout da seção "Nossas cabanas" (fundo creme, 3 cards). */
export function Packages() {
  return (
    <section id="pacotes" className="bg-creme-2 pt-[100px] pb-[104px] text-center max-tablet:py-[72px]">
      <div className="container-site">
        <h2 className="display section-title reveal">{pacotes.titulo}</h2>
        <div className="reveal mx-auto mb-14 grid max-w-[940px] grid-cols-3 gap-12 max-tablet:mx-[-16px] max-tablet:mb-10 max-tablet:auto-cols-[82%] max-tablet:grid-flow-col max-tablet:grid-cols-none max-tablet:snap-x max-tablet:snap-mandatory max-tablet:gap-4 max-tablet:overflow-x-auto max-tablet:px-4 max-tablet:pb-3 max-tablet:[scrollbar-width:none]">
          {pacotes.itens.map((a) => (
            <article key={a.nome} className="group max-tablet:snap-center">
              <h3 className="mb-3.5 text-sm font-medium tracking-[0.18em] text-texto uppercase">{a.nome}</h3>
              <figure className="photo aspect-[5/4.6] rounded-2xl shadow-card">
                <Photo
                  photo={a.foto}
                  sizes="(max-width: 720px) 82vw, 300px"
                  className="group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(20,22,14,0.75)] to-transparent px-3.5 pt-7 pb-3.5 text-[13px] tracking-[0.06em] text-creme opacity-0 transition-[opacity,transform] duration-300 ease-editorial translate-y-1.5 group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 max-tablet:translate-y-0 max-tablet:opacity-100">
                  {a.legenda}
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
        <a href="#reserva" className="btn btn-oliva reveal">
          {pacotes.cta}
        </a>
      </div>
    </section>
  );
}
