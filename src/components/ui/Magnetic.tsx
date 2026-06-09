"use client";

import { useRef, useEffect, useCallback, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticProps {
  children: ReactNode;
  magneticDistance?: number;
  strength?: number;
  stiffness?: number;
  damping?: number;
}

export function Magnetic({
  children,
  magneticDistance = 200,
  strength = 0.9,
  stiffness = 80,
  damping = 10,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness, damping });
  const springY = useSpring(y, { stiffness, damping });

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < magneticDistance) {
        const pull = Math.pow(1 - dist / magneticDistance, 0.5);
        x.set(dx * pull * strength);
        y.set(dy * pull * strength);
      } else {
        x.set(0);
        y.set(0);
      }
    },
    [x, y, magneticDistance, strength]
  );

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [onMouseMove]);

  return (
    <motion.div ref={ref} style={{ x: springX, y: springY, display: "inline-block" }}>
      {children}
    </motion.div>
  );
}
