import Link from "next/link";
import Image from "next/image";
import { brandLogos, type BrandVariant } from "@/lib/brand";

type BrandProps = {
  variant?: BrandVariant;
  preload?: boolean;
  onNavigate?: () => void;
};

export function Brand({
  variant = "color",
  preload = false,
  onNavigate,
}: BrandProps = {}) {
  const logo = brandLogos[variant];
  return (
    <Link
      href="/"
      className={`brand brand-${variant}`}
      aria-label="Barcon Engineering home"
      onClick={onNavigate}
    >
      <Image
        src={logo.src}
        alt="Barcon Engineering"
        width={logo.width}
        height={logo.height}
        preload={preload}
      />
    </Link>
  );
}
