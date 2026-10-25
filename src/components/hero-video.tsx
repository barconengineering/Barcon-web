"use client";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useVideoPlayback } from "@/hooks/use-video-playback";

type HeroVideoProps = { sources?: { src: string; type: string }[]; poster?: string; priority?: boolean; sound?: boolean };

const defaultSources = [{ src: "/hero.webm", type: "video/webm" }, { src: "/hero.mp4", type: "video/mp4" }];

export function HeroVideo({ sources = defaultSources, poster = "/hero-poster.jpg", priority = true, sound = false }: HeroVideoProps) {
  const reducedMotion = useReducedMotion();
  const { video, playing, muted, toggle, toggleSound, onPlay, onPause } = useVideoPlayback();
  if (reducedMotion && !sound) return <Image src={poster} alt="" fill priority={priority} sizes="100vw" className="hero-video" aria-hidden="true" />;
  return <>
    <video ref={video} className="hero-video" autoPlay={!reducedMotion} muted loop playsInline preload="metadata" poster={poster} aria-hidden="true" onPlay={onPlay} onPause={onPause}>
      {sources.map((source) => <source key={source.src} src={source.src} type={source.type} />)}
    </video>
    <div className="hero-video-controls">
      {sound
        ? <button className="hero-video-toggle" type="button" onClick={toggleSound} aria-pressed={!muted}>{muted ? "Sound on" : "Sound off"}</button>
        : <button className="hero-video-toggle" type="button" onClick={toggle}>{playing ? "Pause video" : "Play video"}</button>}
    </div>
  </>;
}
