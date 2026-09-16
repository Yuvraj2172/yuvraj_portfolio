"use client";

import { useEffect, useRef } from "react";

const SPACING = 22;
const BASE_RADIUS = 2.2;
const MIN_RADIUS = 0.15;
const INFLUENCE_RADIUS = 170;

export function DotField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    let frame = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    function draw() {
      if (!ctx) return;
      const isDark = document.documentElement.classList.contains("dark");
      const color = isDark ? "255, 255, 255" : "0, 0, 0";
      const alpha = isDark ? 0.16 : 0.14;

      ctx.clearRect(0, 0, width, height);

      for (let y = SPACING / 2; y < height; y += SPACING) {
        for (let x = SPACING / 2; x < width; x += SPACING) {
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const t = Math.min(dist / INFLUENCE_RADIUS, 1);
          const radius = MIN_RADIUS + (BASE_RADIUS - MIN_RADIUS) * t;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${color}, ${alpha})`;
          ctx.fill();
        }
      }
    }

    resize();
    window.addEventListener("resize", resize);

    const themeObserver = new MutationObserver(draw);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    if (prefersReducedMotion) {
      return () => {
        window.removeEventListener("resize", resize);
        themeObserver.disconnect();
      };
    }

    const handleMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };

    const handleLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
      themeObserver.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="dot-field-canvas" />;
}
