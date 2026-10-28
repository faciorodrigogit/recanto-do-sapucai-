import Image from 'next/image';
import { photos, type PhotoKey } from '@/lib/photos';

type Props = {
  photo: PhotoKey;
  sizes: string;
  priority?: boolean;
  /** alt vazio para fotos decorativas */
  decorative?: boolean;
  className?: string;
};

/** Foto real otimizada pelo next/image (AVIF/WebP, srcset responsivo, blur placeholder). */
export function Photo({ photo, sizes, priority, decorative, className = '' }: Props) {
  const p = photos[photo];
  return (
    <Image
      src={p.src}
      alt={decorative ? '' : p.alt}
      fill
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      blurDataURL={p.blurDataURL}
      quality={80}
      className={className}
    />
  );
}
