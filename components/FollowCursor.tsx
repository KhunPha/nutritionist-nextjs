"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // ring lags behind — soft spring
  const ringX = useSpring(mouseX, { stiffness: 200, damping: 25, mass: 0.5 });
  const ringY = useSpring(mouseY, { stiffness: 200, damping: 25, mass: 0.5 });

  // dot follows almost instantly — stiffer spring
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 40 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 40 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
    };
  }, [mouseX, mouseY, isVisible]);

  return (
    <>
      {/* outer ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99999] hidden rounded-full border border-green-shades-80 mix-blend-difference md:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 56 : 32,
          height: isHovering ? 56 : 32,
          opacity: isVisible ? 1 : 0,
          borderWidth: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />

      {/* inner dot */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99999] hidden rounded-full bg-green-shades-80 mix-blend-difference md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 6 : 8,
          height: isHovering ? 6 : 8,
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </>
  );
};

export default CustomCursor;
