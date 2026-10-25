import Image from 'next/image';
type GalleryPhoto = { src: string; alt: string; caption: string };
export function PhotoGallery({ images, label, title, grid = false }: { images: GalleryPhoto[]; label: string; title?: string; grid?: boolean }) {
  return <section className={`container site-photo-section${grid ? ' project-gallery' : ''}`} aria-label={label}>{title && <div className="section-heading compact"><h2>{title}</h2></div>}<div className="site-photo-gallery">{images.map(photo => <figure key={photo.src} className="site-photo"><div className="site-photo-frame"><Image src={photo.src} alt={photo.alt} loading="lazy" fill sizes={grid ? '(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw' : '(max-width: 767px) 100vw, 50vw'} /></div><figcaption>{photo.caption}</figcaption></figure>)}</div></section>;
}
