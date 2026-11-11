"use client";
import { responsibilityPoints } from "@/lib/content";
import { useActiveItem } from "@/hooks/use-active-item";
import { useInView } from "@/hooks/use-in-view";
import { useTilt } from "@/hooks/use-tilt";
import { Icon } from "./icons";
import { BoxedInfrastructure } from "./infrastructure-scene";
import { TextLink } from "./shared";

export function ResponsibleSection() {
  const { ref, ready, inView, seen } = useInView<HTMLElement>();
  const { area, target } = useTilt<HTMLDivElement, HTMLElement>(5);
  const { active, itemProps } = useActiveItem();
  return (
    <section
      ref={ref}
      className="section section-tinted responsible"
      data-reveal={seen ? "in" : ready ? "out" : undefined}
    >
      <div ref={area} className="container responsible-layout">
        <BoxedInfrastructure
          ref={target}
          active={responsibilityPoints[active].focus}
          playing={inView}
        />
        <div className="responsible-copy">
          <Icon name="leaf" size={36} />
          <h2>
            Responsible by design.
            <br />
            Accountable in delivery.
          </h2>
          <p>
            Quality, safety, and community wellbeing guide our approach.
            Careful planning starts with the people who will depend on each
            project.
          </p>
          <ul className="responsibility-points">
            {responsibilityPoints.map((point, i) => (
              <li key={point.focus} className="responsibility-point">
                <button type="button" {...itemProps(i)}>
                  <Icon name={point.icon} /> {point.title}
                </button>
                <div className="responsibility-detail">
                  <p>{point.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <TextLink href="/approach">Our approach to delivery</TextLink>
        </div>
      </div>
    </section>
  );
}
