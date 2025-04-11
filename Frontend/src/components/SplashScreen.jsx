import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const SplashScreen = ({ onFinish }) => {
  const [startDoor, setStartDoor] = useState(false);

  useEffect(() => {
    // Start door animation after logo rotation
    const doorTimer = setTimeout(() => {
      setStartDoor(true);
    }, 2500);

    // End splash screen
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 4500);

    return () => {
      clearTimeout(doorTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Door Panels (initially placed) */}
        <div className="absolute inset-0 flex">
          <motion.div
            className="w-1/2 h-full"
            style={{ backgroundColor: '#8FBDD3' }}
            animate={startDoor ? { x: '-100%' } : { x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="w-1/2 h-full"
            style={{ backgroundColor: '#8FBDD3' }}
            animate={startDoor ? { x: '100%' } : { x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Logo Animation */}
        <motion.img
          src={assets.favicon}
          alt="Logo"
          initial={{ scale: 0, rotateY: 180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ type: 'spring', stiffness: 60, damping: 12, delay: 0.5 }}
          className="w-32 h-32 z-10"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SplashScreen;
