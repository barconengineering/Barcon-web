"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Brand } from "./brand";
import { Icon } from "./icons";

const links = [["About us", "/about"], ["Our expertise", "/services"], ["Projects", "/projects"], ["Our approach", "/approach"]];
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);
  return <header className="site-header">
    <div className="container header-inner">
      <Brand onNavigate={() => setOpen(false)} />
      <button ref={toggle} className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(!open)}><Icon name={open ? "close" : "menu"} size={26} /></button>
      <nav id="main-navigation" aria-label="Main navigation" className={`main-nav ${open ? "is-open" : ""}`}>
        {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} aria-current={pathname.startsWith(href) ? "page" : undefined}>{label}</Link>)}
        <Link href="/contact" className="button button-small" onClick={() => setOpen(false)} aria-current={pathname === "/contact" ? "page" : undefined}>Discuss a project <Icon name="diagonal" size={18} /></Link>
      </nav>
    </div>
  </header>;
}
