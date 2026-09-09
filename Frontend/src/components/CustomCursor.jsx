import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 380 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkTouch = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (checkTouch() || prefersReducedMotion || window.innerWidth < 1024) {
      setIsTouchDevice(true);
      return;
    }

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      
      const dragElem = target.closest('.swiper, .swiper-slide, [data-cursor="drag"]');
      const viewElem = target.closest('[data-cursor="view"], .img-view');
      const exploreElem = target.closest('[data-cursor="explore"]');
      const interactiveElem = target.closest('button, a, input, textarea, [role="button"]');

      if (dragElem) {
        setIsHovered(true);
        setCursorText('DRAG');
      } else if (viewElem) {
        setIsHovered(true);
        setCursorText('VIEW');
      } else if (exploreElem) {
        setIsHovered(true);
        setCursorText('EXPLORE');
      } else if (interactiveElem) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[99999] overflow-hidden select-none">
      {/* Outer interactive ring / expanding pill (Teal & Coral Healthcare Palette) */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#2A9D8F]/70 bg-[#2A9D8F]/15 backdrop-blur-[2px] flex items-center justify-center text-[10px] font-black tracking-widest text-[#0F253E] shadow-sm shadow-[#2A9D8F]/25"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorText ? 58 : isHovered ? 44 : 26,
          height: cursorText ? 58 : isHovered ? 44 : 26,
          scale: isHovered ? 1.1 : 1,
          borderColor: isHovered ? 'rgba(231, 111, 81, 0.8)' : 'rgba(42, 157, 143, 0.65)',
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 26 }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-extrabold text-[#0F253E]"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>

      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-[#E76F51] shadow-sm"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? (cursorText ? 0 : 6) : 4,
          height: isHovered ? (cursorText ? 0 : 6) : 4,
          opacity: cursorText ? 0 : 1,
        }}
        transition={{ duration: 0.12 }}
      />
    </div>
  );
};

export default CustomCursor;
