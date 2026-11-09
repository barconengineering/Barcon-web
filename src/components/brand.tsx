import Link from "next/link";
import Image from "next/image";
import { useId } from "react";

export function Brand({ onNavigate }: { onNavigate?: () => void } = {}) {
  const filterId = `brand-ink-${useId()}`;
  return (
    <Link
      href="/"
      className="brand official-brand"
      aria-label="Barcon Engineering home"
      onClick={onNavigate}
    >
      <svg
        width="0"
        height="0"
        className="logo-filter"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter
            id={filterId}
            colorInterpolationFilters="sRGB"
            x="0"
            y="0"
            width="100%"
            height="100%"
          >
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  6 0 -6 0 -0.08"
              result="brown"
            />
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  -6 0 6 0 -0.08"
              result="blue"
            />
            <feComposite
              in="brown"
              in2="blue"
              operator="arithmetic"
              k2="1"
              k3="1"
              result="ink"
            />
            <feComposite in="SourceGraphic" in2="ink" operator="in" />
          </filter>
        </defs>
      </svg>
      <span className="official-logo-symbol" aria-hidden="true">
        <Image
          src="/images/official-logo-source.jpg"
          alt=""
          width={1280}
          height={905}
          sizes="640px"
          style={{ filter: `url(#${filterId})` }}
        />
      </span>
      <span className="official-logo-wordmark" aria-hidden="true">
        <Image
          src="/images/official-logo-source.jpg"
          alt=""
          width={1280}
          height={905}
          sizes="640px"
          style={{ filter: `url(#${filterId})` }}
        />
      </span>
    </Link>
  );
}
