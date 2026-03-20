"use client";

import { useEffect, useRef } from "react";

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let stars: { x: number; y: number; r: number; speed: number; phase: number }[] = [];
    let shootingStars: { x: number; y: number; vx: number; vy: number; life: number; maxLife: number }[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      initStars();
    }

    function initStars() {
      const count = Math.min(800, Math.floor((canvas!.width * canvas!.height) / 2500));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        r: Math.random() * 1.2 + 0.3,
        speed: Math.random() * 0.3 + 0.05,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    function spawnShootingStar() {
      if (shootingStars.length >= 2) return;
      shootingStars.push({
        x: Math.random() * canvas!.width * 0.8,
        y: Math.random() * canvas!.height * 0.3,
        vx: 4 + Math.random() * 3,
        vy: 2 + Math.random() * 2,
        life: 0,
        maxLife: 40 + Math.random() * 20,
      });
    }

    let time = 0;
    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      time += 0.01;

      // Stars
      for (const s of stars) {
        const twinkle = 0.3 + 0.7 * ((Math.sin(time * s.speed * 10 + s.phase) + 1) / 2);
        ctx!.globalAlpha = twinkle;
        ctx!.fillStyle = "#E8E8F0";
        ctx!.beginPath();
        ctx!.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Shooting stars
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.vx;
        ss.y += ss.vy;
        ss.life++;

        const progress = ss.life / ss.maxLife;
        const alpha = progress < 0.5 ? progress * 2 : (1 - progress) * 2;

        ctx!.globalAlpha = alpha * 0.8;
        ctx!.strokeStyle = "#9B7ED8";
        ctx!.lineWidth = 1.5;
        ctx!.beginPath();
        ctx!.moveTo(ss.x, ss.y);
        ctx!.lineTo(ss.x - ss.vx * 8, ss.y - ss.vy * 8);
        ctx!.stroke();

        if (ss.life >= ss.maxLife) shootingStars.splice(i, 1);
      }

      ctx!.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const shootingInterval = setInterval(spawnShootingStar, 3000);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(shootingInterval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
