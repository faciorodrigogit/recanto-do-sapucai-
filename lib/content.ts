/**
 * Conteúdo real dos Chalés Recanto do Sapucaí.
 * Fontes: docs/informacoes-da-acomodacao.md, docs/descricao-do-espaco.md,
 * docs/amenidades.md e dados/extracao.json (anúncio do Airbnb, extraído em 28/10/2026).
 */
import type { IconName } from '@/components/Icon';
import type { PhotoKey } from './photos';

export const site = {
  nome: 'Recanto',
  titulo: 'Chalés Recanto do Sapucaí',
  descricaoSeo:
    'Chalés privativos com hidromassagem e café da manhã no conforto do chalé, com uma cachoeira dentro da propriedade, em Sapucaí-Mirim (MG).',
  localizacao: 'Sapucaí-Mirim, Minas Gerais',
  regiao: 'Serra da Mantiqueira — sítio',
  coordenadas: { lat: -22.77548, lng: -45.76241 },
  airbnbUrl: 'https://www.airbnb.com.br/rooms/707708664089430508',
  capacidade: 2,
  avaliacao: { media: '4,97', total: 175 },
  anfitriao: {
    nome: 'Isadora Tuono',
    selo: 'Superhost',
    tempo: '4 anos hospedando',
    avaliacoes: '245 avaliações · 4,95 estrelas',
  },
} as const;

export const nav = {
  esquerda: [
    { href: '#topo', label: 'Início' },
    { href: '#reserva', label: 'Reserve sua estadia' },
    { href: '#sobre', label: 'Sobre' },
  ],
  direita: [
    { href: '#historia', label: 'Nossa história' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#contato', label: 'Contato' },
  ],
};

export const hero = {
  kicker: 'Bem-vindo ao',
  titulo: 'Recanto',
  subtitulo: 'do Sapucaí · chalés na natureza',
  cta: 'Reserve sua estadia',
  foto: 'hero-varanda-na-mata' as PhotoKey,
};

/** Pacotes adicionais (descricao-do-espaco.md) — ocupa o lugar de "Nossos chalés" enquanto há um só chalé. */
export const pacotes = {
  titulo: 'Pacotes especiais',
  cta: 'Reserve com antecedência',
  itens: [
    {
      nome: 'Decoração romântica',
      legenda: 'Pétalas, balões e espumante à sua espera',
      foto: 'decoracao-romantica' as PhotoKey,
    },
    {
      nome: 'Massagem no chalé',
      legenda: 'Massoterapia sem sair do seu refúgio',
      foto: 'massagem-no-chale' as PhotoKey,
    },
    {
      nome: 'Passeios no sítio',
      legenda: 'Piquenique, cavalo, quadriciclo e fotógrafo',
      foto: 'animais-do-sitio' as PhotoKey,
    },
  ],
};

/** Seção "Nossos chalés" — fora da página por enquanto (só um chalé). */
export const chales = {
  titulo: 'Nossos chalés',
  cta: 'Escolha seu refúgio',
  itens: [
    {
      nome: 'Chalé Cachoeira',
      legenda: 'Vista para a cachoeira · Hidro · Café da manhã',
      foto: 'chale-cachoeira' as PhotoKey,
    },
    {
      nome: 'Chalé Super Luxo',
      legenda: 'Novo · Cama queen · Hidro e café da manhã',
      foto: 'chale-super-luxo' as PhotoKey,
    },
    {
      nome: 'A cachoeira',
      legenda: 'Atravessa a propriedade, a passos dos chalés',
      foto: 'cachoeira' as PhotoKey,
    },
  ],
};

export const sobre = {
  titulo: ['Este é o seu lugar para', 'desacelerar no sítio'],
  paragrafos: [
    'O Recanto do Sapucaí é um refúgio perfeito para quem busca tranquilidade, aconchego e paz em meio à natureza. É super reservado e oferece uma experiência singular, com chalés privativos.',
    'Uma cachoeira atravessa a propriedade, e você pode interagir com cavalos, vacas e bezerros. Ao amanhecer, um delicioso café da manhã de sítio é servido no conforto do chalé — um início de dia perfeito.',
  ],
  cta: 'Saiba mais',
  foto: 'cafe-na-varanda' as PhotoKey,
};

export const historia = {
  titulo: 'Nossa história',
  paragrafos: [
    'Quem recebe você é a Isadora Tuono, anfitriã dos chalés há 4 anos e apaixonada por música. Para ela, o que torna este lugar único é ter uma cachoeira dentro da propriedade.',
    'São 175 avaliações com nota 4,97 e o selo Favorito entre hóspedes — nota 5,0 em limpeza, check-in, comunicação e exatidão do anúncio.',
  ],
  cta: 'Ver avaliações no Airbnb',
};

export const experiencias = {
  titulo: 'Viva o sítio',
  lead: 'Hóspedes que ficaram aqui nos últimos 12 meses adoraram a localização.',
  itens: [
    {
      icone: 'waves' as IconName,
      titulo: 'Cachoeira e mata',
      texto: 'Acesso à mata, ao pasto, ao pomar e à cachoeira que corta o sítio.',
    },
    {
      icone: 'coffee' as IconName,
      titulo: 'Café da manhã no chalé',
      texto: 'Café de sítio servido ao amanhecer, no conforto da sua varanda.',
    },
    {
      icone: 'bath' as IconName,
      titulo: 'Banheira de hidromassagem',
      texto: 'Uma das poucas da região, com vista para a montanha.',
    },
    {
      icone: 'flame' as IconName,
      titulo: 'Lareira e fogueira',
      texto: 'Lareira interna e lareira externa para as noites frias da serra.',
    },
  ],
};

/** Amenidades (docs/amenidades.md) — 40 incluídas. */
export const amenidades: { grupo: string; itens: string[] }[] = [
  { grupo: 'Vista e ar livre', itens: ['Vista para as montanhas', 'Vista para o rio', 'Acesso ao lago', 'Varanda e móveis externos', 'Lareira externa'] },
  { grupo: 'Banheiro', itens: ['Banheira de hidromassagem', 'Água quente', 'Xampu e condicionador', 'Sabonete e gel de banho', 'Produtos de limpeza'] },
  { grupo: 'Quarto', itens: ['Cama queen e rede', 'Toalhas e roupas de cama', 'Cobertores e travesseiros extras', 'Cortinas blackout', 'Ferro de passar e cabides'] },
  { grupo: 'Cozinha', itens: ['Fogão e micro-ondas', 'Frigobar', 'Panelas, óleo, sal e pimenta', 'Pratos, copos e talheres', 'Taças de vinho'] },
  { grupo: 'Conforto', itens: ['Lareira interna', 'TV', 'Wi-Fi', 'Espaço de trabalho exclusivo', 'Jogos de tabuleiro, livros e brinquedos'] },
  { grupo: 'Estadia', itens: ['Self check-in', 'Recepção disponível 24 horas', 'Estacionamento gratuito no local', 'Talheres para crianças', 'Câmeras na área externa'] },
];

/** Regras, avisos e extras (docs/informacoes-da-acomodacao.md + descricao-do-espaco.md). */
export const regras: string[] = [
  'Não permitimos pets — temos medo de que se assustem com os nossos animais',
  'Não são permitidas festas ou eventos',
  'O chalé é privativo; as áreas externas são compartilhadas',
  'Recepção no local, disponível a todo momento pelo celular',
  'Comércio mais próximo a 3 km; pizzaria e restaurantes entregam nos chalés',
  'Enviamos contatos de delivery, pontos turísticos e lojinhas de queijos e vinhos',
  'Pacotes especiais mediante reserva antecipada',
];

export const galeria = {
  titulo: 'Momentos na mata',
  lead: 'Fotos reais dos chalés, da cachoeira e dos arredores do sítio.',
  blocos: [
    [
      { foto: 'corredeira' as PhotoKey, legenda: 'A cachoeira', variante: 'tall' },
      { foto: 'cafe-da-manha' as PhotoKey, legenda: 'Café de sítio' },
      { foto: 'por-do-sol-varanda' as PhotoKey, legenda: 'Pôr do sol na varanda' },
      { foto: 'deck-no-gramado' as PhotoKey, legenda: 'Deck de frente para a mata', variante: 'wide' },
    ],
    [
      { foto: 'rede-na-varanda' as PhotoKey, legenda: 'Rede na varanda', variante: 'tall' },
      { foto: 'hidromassagem' as PhotoKey, legenda: 'Hidromassagem' },
      { foto: 'fogueira' as PhotoKey, legenda: 'Fogueira' },
      { foto: 'vale-araucarias' as PhotoKey, legenda: 'Araucárias e montanhas', variante: 'wide' },
    ],
  ] as { foto: PhotoKey; legenda: string; variante?: 'tall' | 'wide' }[][],
};

export const reserva = {
  titulo: 'Sua pausa começa aqui',
  subtitulo: 'Escolha as datas e finalize sua reserva com segurança pelo Airbnb.',
  foto: 'vale-entardecer' as PhotoKey,
};

export const footer = {
  frase: 'Chalés privativos com café da manhã e uma cachoeira dentro da propriedade, em Sapucaí-Mirim (MG).',
};
