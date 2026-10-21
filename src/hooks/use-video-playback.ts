import { useRef, useState } from "react";

export function useVideoPlayback() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    if (video.current?.paused) void video.current.play().catch(() => {});
    else video.current?.pause();
  };
  return { video, playing, toggle, onPlay: () => setPlaying(true), onPause: () => setPlaying(false) };
}
