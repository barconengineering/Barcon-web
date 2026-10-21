import Image from 'next/image';
import type { SitePhoto } from '@/lib/photos';
export function PhotoGallery({ images, label }: { images: SitePhoto[]; label: string }) {
  return <section className="container site-photo-section" aria-label={label}><div className="site-photo-gallery">{images.map(photo => <figure key={photo.src} className="site-photo"><div className="site-photo-frame"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 767px) 100vw, 50vw" /></div><figcaption>{photo.caption}</figcaption></figure>)}</div></section>;
}
