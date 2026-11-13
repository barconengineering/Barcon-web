"use client";
import Image from "next/image";
import Link from "next/link";
import type { HeroVideo } from "@/lib/content";
import { useBackgroundVideo } from "@/hooks/use-background-video";
import { Icon } from "@/components/icons";

type VideoHeroProps = { label: string; title: string; children: React.ReactNode; media: HeroVideo };

export function VideoHero({ label, title, children, media }: VideoHeroProps) {
  const { video, enabled, playing, toggle, onPlay, onPause } = useBackgroundVideo();
  return <section className="video-hero">
    <Image src={media.poster} alt="" fill loading="eager" fetchPriority="high" sizes="100vw" className="video-hero-media" aria-hidden="true" />
    {enabled && <video ref={video} className="video-hero-media" autoPlay muted loop playsInline preload="none" aria-hidden="true" onPlay={onPlay} onPause={onPause}>
      {media.sources.map((source) => <source key={source.src} src={source.src} type={source.type} />)}
    </video>}
    <div className="video-hero-shade" aria-hidden="true" />
    <div className="container video-hero-content">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      <p className="intro-description">{children}</p>
      <div className="button-row"><Link href="/contact" className="button">Discuss a project <Icon name="diagonal" size={20} /></Link></div>
    </div>
    {enabled && <button className="video-hero-toggle" type="button" onClick={toggle} aria-label={playing ? "Pause background video" : "Play background video"}><Icon name={playing ? "pause" : "play"} size={20} /></button>}
  </section>;
}
