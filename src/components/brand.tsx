import Link from "next/link";
import Image from "next/image";
export function Brand({ onNavigate }: { onNavigate?: () => void } = {}) {
  return (
    <Link
      href="/"
      className="brand official-brand"
      aria-label="Barcon Engineering home"
      onClick={onNavigate}
    >
      <span className="official-logo">
        <Image
          src="/images/official-logo-source.jpg"
          alt="Barcon Engineering"
          width={1280}
          height={905}
          sizes="400px"
        />
      </span>
    </Link>
  );
}
