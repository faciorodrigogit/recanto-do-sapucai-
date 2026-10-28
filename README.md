# Recanto do Sapucaí — site

Landing page em **Next.js (App Router) + TypeScript + Tailwind CSS v4**, com o mesmo design da versão anterior em HTML (`index.html`). Os textos e as fotos são reais e vêm do anúncio.

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # produção
```

Requer Node.js 20.9 ou superior.

## Estrutura

```
app/
  layout.tsx        # <html lang="pt-BR">, fontes, metadados/SEO
  page.tsx          # monta as seções na ordem do layout
  globals.css       # design tokens (@theme) + classes do design (botões, faixa de padrão, fade-in)
components/         # uma seção por componente
  Header · Hero · PatternBand · Cabins · UnwindSplit · OurStory
  Experiences · Gallery · BookingCTA · Footer
  Photo (next/image) · Icon (Lucide inline) · Logo (SVG) · RevealObserver
lib/
  content.ts        # TODO o texto do site (fonte: docs/ e dados/)
  photos.ts         # catálogo das fotos usadas: alt, dimensões, blur placeholder
public/
  fotos/            # fotos selecionadas do acervo (originais continuam em /fotos)
docs/ dados/ fotos/ # material de origem (não é usado pelo build)
```

## Onde mudar o quê

- **Textos, amenidades, regras e links:** `lib/content.ts`.
- **Trocar uma foto:** coloque o arquivo em `public/fotos/` e ajuste a entrada em `lib/photos.ts`. As fotos usam `next/image`, que gera AVIF/WebP, srcset responsivo, lazy loading e blur placeholder. O hero é carregado com prioridade.
- **Cores e fontes:** tokens em `app/globals.css` (`@theme`). Dá para usar como classes do Tailwind (`bg-creme`, `text-oliva-escuro`, `font-display`…).

## Reserva

O formulário não guarda dados. Ele abre o anúncio no Airbnb já com check-in, check-out e número de hóspedes preenchidos.

## Deploy no Render

O arquivo `render.yaml` já configura tudo (Web Service Node):

- Build: `npm ci && npm run build`
- Start: `npm start` (o Next usa a porta da variável `PORT` que o Render define)
- Node 22
