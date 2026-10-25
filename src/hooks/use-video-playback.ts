import { useRef, useState } from "react";

export function useVideoPlayback() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const toggle = () => {
    if (video.current?.paused) void video.current.play().catch(() => {});
    else video.current?.pause();
  };
  // Browsers only allow muted autoplay, so sound is switched on by the visitor.
  const toggleSound = () => {
    const el = video.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (el.paused) void el.play().catch(() => {});
  };
  return { video, playing, muted, toggle, toggleSound, onPlay: () => setPlaying(true), onPause: () => setPlaying(false) };
}
