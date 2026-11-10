import Link from "next/link";
import {
  breadcrumbJsonLd,
  breadcrumbTrail,
  type Crumb,
} from "@/lib/structured-data";

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const { links, current, parent } = breadcrumbTrail(items);
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol>
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
        <li>
          <span aria-current="page">{current.name}</span>
        </li>
      </ol>
      <Link href={parent.href} className="breadcrumb-back">
        <span aria-hidden="true">‹</span> {parent.name}
      </Link>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd(items) }}
      />
    </nav>
  );
}
