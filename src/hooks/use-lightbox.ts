import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";

const focusable =
  'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';
const swipeDistance = 50;

export function useLightbox(onNext: () => void, onPrevious: () => void) {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const touchStart = useRef<number | null>(null);
  const show = useCallback((target: HTMLElement) => {
    trigger.current = target;
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const returnTo = trigger.current;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    dialog.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    return () => {
      document.body.style.overflow = overflow;
      returnTo?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") return setOpen(false);
      if (event.key === "ArrowRight") return onNext();
      if (event.key === "ArrowLeft") return onPrevious();
      if (event.key !== "Tab" || !dialog.current) return;
      const items = [
        ...dialog.current.querySelectorAll<HTMLElement>(focusable),
      ];
      const first = items[0];
      const last = items[items.length - 1];
      const inside = dialog.current.contains(document.activeElement);
      if (event.shiftKey && (document.activeElement === first || !inside)) {
        event.preventDefault();
        last?.focus();
      } else if (
        !event.shiftKey &&
        (document.activeElement === last || !inside)
      ) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, onNext, onPrevious]);

  const swipe = {
    onTouchStart: (event: TouchEvent) => {
      touchStart.current = event.touches[0].clientX;
    },
    onTouchEnd: (event: TouchEvent) => {
      const start = touchStart.current;
      touchStart.current = null;
      if (start === null) return;
      const distance = event.changedTouches[0].clientX - start;
      if (Math.abs(distance) < swipeDistance) return;
      if (distance < 0) onNext();
      else onPrevious();
    },
  };

  return { open, show, close, dialog, swipe };
}
