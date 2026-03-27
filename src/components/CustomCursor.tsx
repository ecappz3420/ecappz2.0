import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring animation for the cursor follower
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Slower spring for the glow effect to create a trailing aura
  const glowSpringConfig = { damping: 30, stiffness: 400, mass: 0.8 };
  const glowX = useSpring(mouseX, glowSpringConfig);
  const glowY = useSpring(mouseY, glowSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 2.5 : 1,
          opacity: isVisible ? (isHovering ? 0.5 : 1) : 0,
        }}
        transition={{ scale: { type: 'spring', stiffness: 300, damping: 20 } }}
      />
      {/* Glowing aura */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 bg-primary/30 rounded-full pointer-events-none z-[9998] blur-[15px]"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? (isHovering ? 0.8 : 0.4) : 0,
        }}
        transition={{ scale: { type: 'spring', stiffness: 300, damping: 20 } }}
      />
    </>
  );
};
