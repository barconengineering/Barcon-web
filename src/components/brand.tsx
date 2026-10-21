import Link from "next/link";
import Image from "next/image";
export function Brand({ onNavigate }: { onNavigate?: () => void } = {}) {
  return <Link href="/" className="brand" aria-label="Barcon Engineering home" onClick={onNavigate}>
    <span className="brand-mark" aria-hidden="true"><Image src="/images/barcon-brand-reference.png" alt="" width={1120} height={258} sizes="370px" /></span>
    <span className="brand-type">Barcon{" "}<span>ENGINEERING</span></span>
  </Link>;
}
