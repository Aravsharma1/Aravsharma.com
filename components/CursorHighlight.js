"use client";

import { useEffect, useRef } from "react";

export default function CursorHighlight() {
  const highlightRef = useRef(null);
  const fadeTimerRef = useRef(null);
  const frameRef = useRef(null);
  const pointRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const highlight = highlightRef.current;
    const hasTouchPointer = window.matchMedia("(pointer: coarse)").matches;

    if (!highlight || hasTouchPointer) {
      return undefined;
    }

    const moveHighlight = () => {
      const { x, y } = pointRef.current;
      highlight.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      highlight.classList.add("is-visible");
      frameRef.current = null;
    };

    const onPointerMove = (event) => {
      pointRef.current = { x: event.clientX, y: event.clientY };

      if (!frameRef.current) {
        frameRef.current = window.requestAnimationFrame(moveHighlight);
      }

      window.clearTimeout(fadeTimerRef.current);
      fadeTimerRef.current = window.setTimeout(() => {
        highlight.classList.remove("is-visible");
      }, 520);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.clearTimeout(fadeTimerRef.current);
      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return <div ref={highlightRef} className="cursor-highlight" aria-hidden="true" />;
}
