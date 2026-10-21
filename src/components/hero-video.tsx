"use client";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useVideoPlayback } from "@/hooks/use-video-playback";

export function HeroVideo() {
  const reducedMotion = useReducedMotion();
  const { video, playing, toggle, onPlay, onPause } = useVideoPlayback();
  if (reducedMotion) return <Image src="/hero-poster.jpg" alt="" fill priority sizes="100vw" className="hero-video" aria-hidden="true" />;
  return <>
    <video ref={video} className="hero-video" autoPlay muted loop playsInline preload="metadata" poster="/hero-poster.jpg" aria-hidden="true" onPlay={onPlay} onPause={onPause}>
      <source src="/hero.webm" type="video/webm" />
      <source src="/hero.mp4" type="video/mp4" />
    </video>
    <button className="hero-video-toggle" type="button" onClick={toggle}>{playing ? "Pause video" : "Play video"}</button>
  </>;
}
