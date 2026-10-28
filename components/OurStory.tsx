import { historia, site } from '@/lib/content';

export function OurStory() {
  return (
    <section id="historia" className="pattern-fill px-4 pb-24 max-tablet:pb-[72px]">
      <div className="reveal mx-auto max-w-[700px] rounded-b-[28px] bg-caqui-card px-[68px] pt-16 pb-[60px] text-center text-historia shadow-historia max-tablet:px-6 max-tablet:py-12">
        <h2 className="display section-title !mb-6 !text-[clamp(26px,3vw,33px)] !text-historia">{historia.titulo}</h2>
        {historia.paragrafos.map((p) => (
          <p key={p.slice(0, 20)} className="mx-auto mb-3.5 max-w-[540px] text-[15.5px] leading-[1.65]">
            {p}
          </p>
        ))}
        <a href={site.airbnbUrl} target="_blank" rel="noopener noreferrer" className="btn btn-oliva mt-5">
          {historia.cta}
        </a>
      </div>
    </section>
  );
}
