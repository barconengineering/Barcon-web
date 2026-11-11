import { useRef, useState } from "react";

export function useVideoPlayback() {
  const video = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const toggleSound = () => {
    const el = video.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (el.paused) void el.play().catch(() => {});
  };
  return { video, muted, toggleSound };
}
