import type { Metadata, Viewport } from 'next';
import '@fontsource/poiret-one/400.css';
import '@fontsource/jost/300.css';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import './globals.css';
import { site } from '@/lib/content';

export const metadata: Metadata = {
  title: `${site.titulo} — Chalés na natureza em ${site.localizacao}`,
  description: site.descricaoSeo,
  openGraph: {
    title: site.titulo,
    description: site.descricaoSeo,
    images: ['/fotos/hero-varanda-na-mata.jpg'],
    locale: 'pt_BR',
    type: 'website',
  },
  icons: { icon: '/icon.svg' },
};

export const viewport: Viewport = {
  themeColor: '#f0eadc',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
