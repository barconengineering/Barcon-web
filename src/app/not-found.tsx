import Link from "next/link";
export default function NotFound() {
  return <section className="section container empty-state"><p className="eyebrow">Page not found</p><h1>Let’s get you<br />back on track.</h1><p>This page may have moved, or the address may be incorrect.</p><Link href="/" className="button">Return home</Link></section>;
}
