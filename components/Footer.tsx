import { footer, nav, site } from '@/lib/content';
import { Icon } from './Icon';
import { Logo } from './Logo';
import { PatternBand } from './PatternBand';

export function Footer() {
  const ano = new Date().getFullYear();
  const mapa = `https://www.google.com/maps/search/?api=1&query=${site.coordenadas.lat},${site.coordenadas.lng}`;
  return (
    <footer id="contato" className="bg-floresta-2 text-texto-creme">
      <PatternBand />
      <div className="mx-auto grid max-w-[1240px] grid-cols-[1.3fr_0.8fr_1.1fr_1.3fr] gap-12 px-10 pt-20 pb-[60px] max-wide:grid-cols-2 max-tablet:grid-cols-1 max-tablet:gap-9 max-tablet:px-4 max-tablet:pt-[60px] max-tablet:pb-10">
        <div>
          <div className="mb-[18px] flex items-center gap-3.5">
            <span className="block h-[42px] w-[42px] text-caqui">
              <Logo className="h-full w-full" />
            </span>
            <span className="font-display text-[30px] tracking-[0.2em] text-palha uppercase">{site.nome}</span>
          </div>
          <p className="text-[14.5px] text-texto-creme-2">{footer.frase}</p>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-medium tracking-[0.2em] text-texto-creme uppercase">Navegação</h4>
          <ul className="grid list-none gap-2.5">
            {[...nav.esquerda, ...nav.direita.slice(0, 2)].map((l) => (
              <li key={l.href} className="text-[14.5px] text-texto-creme-2">
                <a href={l.href} className="transition-colors hover:text-caqui">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-medium tracking-[0.2em] text-texto-creme uppercase">Contato</h4>
          <ul className="grid list-none gap-2.5">
            <li className="flex items-start gap-2.5 text-[14.5px] text-texto-creme-2">
              <Icon name="user" className="mt-[3px] !h-[18px] !w-[18px] text-caqui" />
              <span>
                Anfitriã {site.anfitriao.nome} · {site.anfitriao.selo}
              </span>
            </li>
            <li className="flex items-start gap-2.5 text-[14.5px] text-texto-creme-2">
              <Icon name="phone" className="mt-[3px] !h-[18px] !w-[18px] text-caqui" />
              <span>Recepção no local, disponível 24 horas pelo celular</span>
            </li>
            <li className="flex items-start gap-2.5 text-[14.5px] text-texto-creme-2">
              <Icon name="external" className="mt-[3px] !h-[18px] !w-[18px] text-caqui" />
              <a href={site.airbnbUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-caqui">
                Mensagens pelo Airbnb
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-[14.5px] text-texto-creme-2">
              <Icon name="pin" className="mt-[3px] !h-[18px] !w-[18px] text-caqui" />
              <a href={mapa} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-caqui">
                {site.localizacao}
                <br />
                {site.regiao}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-medium tracking-[0.2em] text-texto-creme uppercase">Avaliações</h4>
          <p className="mb-2 inline-flex items-center gap-2.5 text-texto-creme">
            <Icon name="star" className="text-caqui" />
            {site.avaliacao.media} · {site.avaliacao.total} avaliações
          </p>
          <p className="text-[14.5px] text-texto-creme-2">
            Favorito entre hóspedes no Airbnb. Nota 5,0 em limpeza, check-in, comunicação e exatidão do anúncio.
          </p>
          <a href={site.airbnbUrl} target="_blank" rel="noopener noreferrer" className="btn btn-caqui mt-4 !px-5">
            Ver anúncio
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1240px] flex-wrap justify-between gap-4 border-t border-[rgba(232,223,194,0.12)] px-10 py-[22px] text-[13px] text-texto-creme-2 max-tablet:px-4 max-tablet:py-5">
        <span>
          © {ano} {site.titulo} — Todos os direitos reservados
        </span>
        <span>{site.localizacao}</span>
      </div>
    </footer>
  );
}
