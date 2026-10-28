import { reserva } from '@/lib/content';
import { BookingForm } from './BookingForm';
import { Photo } from './Photo';

export function BookingCTA() {
  return (
    <section
      id="reserva"
      className="relative overflow-hidden pt-[130px] pb-[140px] text-center before:absolute before:inset-0 before:z-[1] before:bg-[rgba(20,22,14,0.58)] before:content-[''] max-tablet:py-[90px]"
    >
      <div className="photo absolute inset-0">
        <Photo photo={reserva.foto} sizes="100vw" decorative />
      </div>
      <div className="container-site relative z-[2]">
        <h2 className="display reveal mb-3.5 text-[clamp(32px,5vw,58px)] tracking-[0.14em] text-palha">{reserva.titulo}</h2>
        <p className="reveal mx-auto mb-11 max-w-[520px] text-base font-light text-texto-creme">{reserva.subtitulo}</p>
        <div className="reveal">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
