"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useVideoPlayback } from "@/hooks/use-video-playback";

type HeroVideoProps = { sources?: { src: string; type: string }[]; poster?: string; lazy?: boolean; sound?: boolean };

const defaultSources = [{ src: "/hero.webm", type: "video/webm" }, { src: "/hero.mp4", type: "video/mp4" }];

export function HeroVideo({ sources = defaultSources, poster = "/hero-poster.jpg", lazy = false, sound = false }: HeroVideoProps) {
  const reducedMotion = useReducedMotion();
  const { video, muted, toggleSound } = useVideoPlayback();
  // Lazy videos only download and start playing once they scroll into view.
  useEffect(() => {
    const el = video.current;
    if (!lazy || reducedMotion || !el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) void el.play().catch(() => {});
      else el.pause();
    }, { rootMargin: "200px 0px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, [lazy, reducedMotion, video]);
  if (reducedMotion && !sound) return <Image src={poster} alt="" fill loading={lazy ? "lazy" : "eager"} sizes="100vw" className="hero-video" aria-hidden="true" />;
  return <>
    <video ref={video} className="hero-video" autoPlay={!lazy && !reducedMotion} muted loop playsInline preload={lazy ? "none" : "metadata"} poster={poster} aria-hidden="true">
      {sources.map((source) => <source key={source.src} src={source.src} type={source.type} />)}
    </video>
    {sound && <div className="hero-video-controls"><button className="hero-video-toggle" type="button" onClick={toggleSound} aria-pressed={!muted}>{muted ? "Sound on" : "Sound off"}</button></div>}
  </>;
}
