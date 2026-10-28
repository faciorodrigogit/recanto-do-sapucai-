import { amenidades, experiencias, regras } from '@/lib/content';
import { Icon } from './Icon';

export function Experiences() {
  return (
    <section id="experiencias" className="bg-creme-2 py-[100px] text-center max-tablet:py-[72px]">
      <div className="container-site">
        <h2 className="display section-title reveal">{experiencias.titulo}</h2>
        <p className="reveal mx-auto -mt-7 mb-14 max-w-[560px] text-[15.5px] text-texto-2">{experiencias.lead}</p>

        <div className="grid grid-cols-4 gap-10 max-wide:grid-cols-2 max-wide:gap-x-8 max-wide:gap-y-12 max-tablet:grid-cols-1">
          {experiencias.itens.map((e) => (
            <div key={e.titulo} className="group reveal">
              <div className="mx-auto mb-[22px] grid h-16 w-16 place-items-center rounded-full border-[1.5px] border-oliva-escuro text-oliva-escuro transition-colors duration-250 ease-editorial group-hover:bg-oliva-escuro group-hover:text-creme">
                <Icon name={e.icone} className="!h-[26px] !w-[26px]" />
              </div>
              <h3 className="mb-2.5 text-[13.5px] font-medium tracking-[0.15em] text-texto uppercase">{e.titulo}</h3>
              <p className="mx-auto max-w-[240px] text-[14.5px] leading-[1.6] text-texto-2">{e.texto}</p>
            </div>
          ))}
        </div>

        {/* O que o Recanto oferece + regras (conteúdo real dos docs) */}
        <div className="reveal mt-20 grid grid-cols-[1.6fr_1fr] gap-14 border-t border-[rgba(66,52,15,0.15)] pt-16 text-left max-nav:grid-cols-1 max-nav:gap-12">
          <div>
            <h3 className="display mb-8 text-[22px] text-titulo-claro">O que o Recanto oferece</h3>
            <div className="grid grid-cols-3 gap-x-8 gap-y-7 max-wide:grid-cols-2 max-tablet:grid-cols-1">
              {amenidades.map((g) => (
                <div key={g.grupo}>
                  <h4 className="mb-2.5 text-xs font-medium tracking-[0.18em] text-oliva-escuro uppercase">{g.grupo}</h4>
                  <ul className="grid gap-1.5">
                    {g.itens.map((i) => (
                      <li key={i} className="flex gap-2 text-[14.5px] leading-snug text-texto-2">
                        <Icon name="check" className="mt-0.5 !h-4 !w-4 text-oliva-escuro" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-creme p-8 max-tablet:p-6">
            <h3 className="display mb-6 text-[22px] text-titulo-claro">Bom saber</h3>
            <ul className="grid gap-3">
              {regras.map((r) => (
                <li key={r} className="flex gap-2.5 text-[14.5px] leading-snug text-texto-2">
                  <Icon name="info" className="mt-0.5 !h-4 !w-4 text-oliva-escuro" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
