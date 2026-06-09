"use client";

import { useEffect, useRef } from "react";

export function ParallaxDots() {
  const frontRef = useRef<HTMLDivElement>(null);
  const backRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      if (frontRef.current) frontRef.current.style.transform = `translateY(${-y * 0.15}px)`;
      if (backRef.current) backRef.current.style.transform = `translateY(${-y * 0.08}px)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const layerBase: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: "-1000px",
    willChange: "transform",
  };

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}
      aria-hidden="true"
    >
      {/* Far layer — large sparse dots, slow drift */}
      <div
        ref={backRef}
        style={{
          ...layerBase,
          backgroundImage: "radial-gradient(circle, rgba(194,193,255,0.12) 1.5px, transparent 1.5px)",
          backgroundSize: "52px 52px",
        }}
      />
      {/* Near layer — small tight dots, faster drift */}
      <div
        ref={frontRef}
        style={{
          ...layerBase,
          backgroundImage: "radial-gradient(circle, rgba(194,193,255,0.20) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Vignette: fades dots toward edges, always viewport-relative */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 90% 80% at 50% 50%, transparent 30%, #131313 80%)",
        }}
      />
    </div>
  );
}
