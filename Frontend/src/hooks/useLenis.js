import { useEffect } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
  useEffect(() => {
    // Respect reduced motion settings
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: isTouchDevice ? 1.0 : 1.5,
      syncTouch: false, // Let mobile touch use native hardware-accelerated compositor scrolling
      infinite: false,
    });

    let rafId = null;
    let isTabVisible = typeof document !== 'undefined' ? !document.hidden : true;

    function raf(time) {
      if (!isTabVisible) {
        rafId = null;
        return;
      }
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    const handleVisibility = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !rafId) {
        rafId = requestAnimationFrame(raf);
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    rafId = requestAnimationFrame(raf);

    // Provide lenis instance globally if needed for scroll-to actions
    window.__lenis = lenis;

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);
};

export default useLenis;
