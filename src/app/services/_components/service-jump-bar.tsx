"use client";
import { useActiveSection } from "@/hooks/use-active-section";

type JumpItem = { slug: string; shortTitle: string };

export function ServiceJumpBar({ items }: { items: JumpItem[] }) {
  const { track, active } = useActiveSection(items.map((item) => item.slug));
  return (
    <nav className="svc-jump" aria-label="Jump to a service">
      <div className="container">
        <div ref={track} className="svc-jump-track">
          {items.map((item, index) => (
            <a key={item.slug} href={`#${item.slug}`} className="svc-jump-link" aria-current={active === index ? "location" : undefined}>
              {item.shortTitle}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
