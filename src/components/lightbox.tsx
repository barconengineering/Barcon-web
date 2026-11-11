"use client";
import Image from "next/image";
import type { RefObject } from "react";
import { createPortal } from "react-dom";
import type { SitePhoto } from "@/lib/content";
import type { useLightbox } from "@/hooks/use-lightbox";
import { Icon } from "./icons";

export function Lightbox({
  label,
  photo,
  index,
  total,
  many,
  dialog,
  swipe,
  close,
  next,
  previous,
}: {
  label: string;
  photo: SitePhoto;
  index: number;
  total: number;
  many: boolean;
  dialog: RefObject<HTMLDivElement | null>;
  swipe: ReturnType<typeof useLightbox>["swipe"];
  close: () => void;
  next: () => void;
  previous: () => void;
}) {
  return createPortal(
    <div
      ref={dialog}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={label}
      {...swipe}
    >
      <button
        type="button"
        className="lightbox-close"
        onClick={close}
        aria-label="Close photo viewer"
        data-autofocus
      >
        <Icon name="close" size={26} />
      </button>
      <figure>
        <div className="lightbox-photo">
          <Image src={photo.src} alt={photo.alt} fill sizes="100vw" />
        </div>
        <figcaption>
          <span>{photo.caption}</span>
          {many && (
            <span className="lightbox-count" aria-live="polite">
              {index + 1} / {total}
            </span>
          )}
        </figcaption>
      </figure>
      {many && (
        <>
          <button
            type="button"
            className="lightbox-previous"
            onClick={previous}
            aria-label="Previous photo"
          >
            <Icon name="previous" size={26} />
          </button>
          <button
            type="button"
            className="lightbox-next"
            onClick={next}
            aria-label="Next photo"
          >
            <Icon name="next" size={26} />
          </button>
        </>
      )}
    </div>,
    document.body,
  );
}
