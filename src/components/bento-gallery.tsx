"use client";
import Image from "next/image";
import type { SitePhoto } from "@/lib/content";
import { usePhotoViewer } from "@/hooks/use-photo-viewer";
import { Lightbox } from "./lightbox";

export function BentoGallery({
  photos,
  title,
}: {
  photos: SitePhoto[];
  title: string;
}) {
  const {
    index,
    current,
    total,
    many,
    tiles,
    moreAt,
    moreLabel,
    layout,
    next,
    previous,
    openAt,
    open,
    close,
    dialog,
    swipe,
  } = usePhotoViewer(photos);
  return (
    <section
      className="container bento-section"
      aria-label={`${title} photographs`}
    >
      <div className="section-heading compact">
        <h2>From the project site</h2>
      </div>
      <div className={`bento bento-${layout}`}>
        {tiles.map((item, i) => (
          <button
            key={item.src}
            type="button"
            className="bento-tile"
            onClick={(event) => openAt(i, event.currentTarget)}
          >
            <span className="sr-only">
              Open photo {i + 1} of {total}:
            </span>
            <Image
              src={item.src}
              alt={item.alt}
              fill
              loading="lazy"
              sizes={
                i === 0
                  ? "(max-width: 767px) 100vw, 66vw"
                  : "(max-width: 767px) 50vw, 33vw"
              }
              style={{ objectPosition: item.position }}
            />
            {i === moreAt && (
              <span className="bento-more" aria-hidden="true">
                {moreLabel}
              </span>
            )}
          </button>
        ))}
      </div>
      {open && (
        <Lightbox
          label={`${title} photo viewer`}
          photo={current}
          index={index}
          total={total}
          many={many}
          dialog={dialog}
          swipe={swipe}
          close={close}
          next={next}
          previous={previous}
        />
      )}
    </section>
  );
}
