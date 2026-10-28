import { BookingCTA } from '@/components/BookingCTA';
import { Experiences } from '@/components/Experiences';
import { Footer } from '@/components/Footer';
import { Gallery } from '@/components/Gallery';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { OurStory } from '@/components/OurStory';
import { Packages } from '@/components/Packages';
import { PatternBand } from '@/components/PatternBand';
import { RevealObserver } from '@/components/RevealObserver';
import { UnwindSplit } from '@/components/UnwindSplit';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PatternBand />
        <Packages />
        <UnwindSplit />
        <OurStory />
        <Experiences />
        <PatternBand />
        <Gallery />
        <BookingCTA />
      </main>
      <Footer />
      <RevealObserver />
    </>
  );
}
