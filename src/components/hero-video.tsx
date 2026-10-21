"use client";
import { useEffect, useRef, useState } from "react";
import { photos } from "@/lib/photos";
export function HeroVideo() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      if (preference.matches) video.current?.pause();
      else void video.current?.play().catch(() => {});
    };
    // Lazy-load: only start fetching the video once the rest of the page has loaded.
    const start = () => {
      sync();
      preference.addEventListener('change', sync);
    };
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start, { once: true });
    return () => {
      window.removeEventListener('load', start);
      preference.removeEventListener('change', sync);
    };
  }, []);
  return <>
    <video ref={video} className="hero-video" muted loop playsInline preload="none" poster={photos.solarArray.src} aria-hidden="true" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}>
      <source src="/videos/DJI_0580.MP4" type="video/mp4" />
    </video>
    <button className="hero-video-toggle" type="button" onClick={() => {
      if (video.current?.paused) void video.current.play().catch(() => {});
      else video.current?.pause();
    }}>{playing ? 'Pause video' : 'Play video'}</button>
  </>;
}
