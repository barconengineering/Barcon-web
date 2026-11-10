"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAtTop } from "@/hooks/use-at-top";
import { useMenu } from "@/hooks/use-menu";
import { headerLinks, headerState, isCurrentPath } from "@/lib/header";
import { Brand } from "./brand";
import { Icon } from "./icons";

export function Header() {
  const pathname = usePathname();
  const atTop = useAtTop();
  const { open, close, flip, toggle } = useMenu();
  const { className, logo } = headerState(pathname, atTop, open);
  return (
    <header className={className}>
      <div className="container header-inner">
        <Brand variant={logo} preload onNavigate={close} />
        <button
          ref={toggle}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-controls="main-navigation"
          aria-expanded={open}
          onClick={flip}
        >
          <Icon name={open ? "close" : "menu"} size={26} />
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={`main-nav ${open ? "is-open" : ""}`}
        >
          {headerLinks.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              aria-current={isCurrentPath(pathname, href) ? "page" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
