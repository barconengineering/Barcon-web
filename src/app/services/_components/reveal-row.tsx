"use client";
import { useReveal } from "@/hooks/use-reveal";

type RevealRowProps = { id: string; labelledBy: string; children: React.ReactNode };

export function RevealRow({ id, labelledBy, children }: RevealRowProps) {
  const { ref, state } = useReveal<HTMLElement>();
  return (
    <article ref={ref} id={id} className="svc-row" aria-labelledby={labelledBy} data-reveal={state}>
      {children}
    </article>
  );
}
