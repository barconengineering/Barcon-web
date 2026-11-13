import { useEffect, useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useVideoPlayback } from "@/hooks/use-video-playback";

const motionQuery = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

export function useBackgroundVideo() {
  const enabled = useMediaQuery(motionQuery);
  const { video, playing, onPlay, onPause } = useVideoPlayback();
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = video.current;
    if (!enabled || !el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled, video]);

  useEffect(() => {
    const el = video.current;
    if (!enabled || !el) return;
    if (inView && !paused) void el.play().catch(() => {});
    else el.pause();
  }, [enabled, inView, paused, video]);

  const toggle = () => {
    if (playing) return setPaused(true);
    setPaused(false);
    void video.current?.play().catch(() => {});
  };

  return { video, enabled, playing, toggle, onPlay, onPause };
}
