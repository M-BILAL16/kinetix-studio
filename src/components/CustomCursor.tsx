"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "text" | "hidden">("default");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-end spring physics for smooth luxurious trailing
  const springConfig = { damping: 28, stiffness: 320, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const dotConfig = { damping: 40, stiffness: 900 };
  const dotX = useSpring(mouseX, dotConfig);
  const dotY = useSpring(mouseY, dotConfig);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorElement = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorElement) {
        const text = cursorElement.getAttribute("data-cursor") || "";
        setCursorText(text.toUpperCase());
        setCursorVariant("text");
        return;
      }

      const interactive = target.closest("button, a, input, textarea, [role='button']");
      if (interactive) {
        setCursorText("");
        setCursorVariant("hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-9999 select-none overflow-hidden">
      {/* Outer kinetic ring / badge */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: cursorVariant === "text" ? 1 : cursorVariant === "hover" ? 1.6 : 1,
          width: cursorVariant === "text" ? 88 : cursorVariant === "hover" ? 48 : 34,
          height: cursorVariant === "text" ? 88 : cursorVariant === "hover" ? 48 : 34,
          backgroundColor:
            cursorVariant === "text"
              ? "#0E0E10"
              : cursorVariant === "hover"
              ? "rgba(0, 71, 255, 0.12)"
              : "rgba(14, 14, 16, 0.04)",
          borderColor:
            cursorVariant === "text"
              ? "#0E0E10"
              : cursorVariant === "hover"
              ? "#0047FF"
              : "rgba(14, 14, 16, 0.25)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
        className="rounded-full border flex items-center justify-center backdrop-blur-[2px]"
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="text-[10px] font-mono font-bold tracking-widest text-[#FAF9F5] text-center px-1"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Center pinpoint dot */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: cursorVariant === "text" ? 0 : 1,
          scale: cursorVariant === "hover" ? 0.6 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="w-2 h-2 rounded-full bg-[#0047FF]"
      />
    </div>
  );
}
