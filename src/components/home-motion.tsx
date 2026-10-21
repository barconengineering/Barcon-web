'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function HomeMotion({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = matchMedia('(max-width: 767px)');
    const hero = node.querySelector<HTMLElement>('.hero');
    const process = node.querySelector<HTMLElement>('.process-grid');
    const targets = Array.from(node.querySelectorAll<HTMLElement>('.proof-inner>div,.proof-inner>p,.home-about>div,.section-heading,.featured-service,.service-links>a,.selected-project,.section-end,.responsible-copy,.process-grid article,.contact-band-inner>div,.footer-main>div,.editorial-copy,.illustration,.mission-grid>article,.values-grid>article,.leadership-layout>div,.commitment-grid>article,.directory-service,.project-card,.detail-layout>div,.contact-details,.enquiry-panel,.prose'));
    let frame = 0;
    const clamp = (n: number) => Math.min(1, Math.max(0, n));
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('motion-visible');
        reveal.unobserve(entry.target);
      }
    }), { threshold: .12 });
    targets.forEach((target, i) => {
      target.style.setProperty('--reveal-delay', `${(i % 3) * 70}ms`);
      // Content already visible at hydration is never hidden.
      if (target.getBoundingClientRect().top > innerHeight) target.classList.add('motion-reveal');
      reveal.observe(target);
    });
    const update = () => {
      frame = 0;
      const calm = reduced.matches;
      if (hero) {
        const r = hero.getBoundingClientRect();
        const drift = calm || mobile.matches ? 0 : clamp(-r.top / r.height) * 28;
        hero.style.setProperty('--hero-drift', `${drift}px`);
      }
      if (process) {
        const r = process.getBoundingClientRect();
        process.style.setProperty('--process-progress', String(calm ? 1 : clamp((innerHeight * .9 - r.top)/(innerHeight*.6))));
      }
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    reduced.addEventListener('change', schedule);
    return () => {
      reveal.disconnect(); cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule);
      reduced.removeEventListener('change', schedule);
      targets.forEach(target => target.classList.remove('motion-reveal','motion-visible'));
    };
  }, [pathname]);
  return <div ref={root} className="motion-home">{children}</div>;
}

