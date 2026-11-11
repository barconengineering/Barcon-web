"use client";
import Image from "next/image";
import type { SitePhoto } from "@/lib/content";
import { usePhotoViewer } from "@/hooks/use-photo-viewer";
import { Lightbox } from "./lightbox";

export function CertificateViewer({
  photo,
  label,
}: {
  photo: SitePhoto;
  label: string;
}) {
  const {
    index,
    current,
    total,
    many,
    next,
    previous,
    openAt,
    open,
    close,
    dialog,
    swipe,
  } = usePhotoViewer([photo]);
  return (
    <figure className="recognition-certificate">
      <figcaption>{photo.caption}</figcaption>
      <button type="button" onClick={(event) => openAt(0, event.currentTarget)}>
        <span className="sr-only">Open full screen:</span>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
        />
      </button>
      {open && (
        <Lightbox
          label={`${label} certificate viewer`}
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
    </figure>
  );
}
