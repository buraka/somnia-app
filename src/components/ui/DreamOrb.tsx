"use client";

import { useEffect, useRef } from "react";

export default function DreamOrb() {
  const orbRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window) return;

    const orb = orbRef.current;
    if (!orb) return;

    orb.style.display = "block";

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    let animId: number;
    function animate() {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.04;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.04;

      if (orb) {
        orb.style.transform = `translate(${pos.current.x - 160}px, ${pos.current.y - 160}px)`;
      }

      animId = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      className="fixed top-0 left-0 z-[1] pointer-events-none hidden"
      aria-hidden="true"
      style={{
        width: 320,
        height: 320,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(123,94,167,0.15) 0%, rgba(155,126,216,0.05) 50%, transparent 70%)",
        filter: "blur(40px)",
        mixBlendMode: "screen",
        animation: "pulse-dot 4s ease-in-out infinite",
      }}
    />
  );
}
