import { motion, useSpring, useMotionValue } from 'motion/react';
import { useEffect } from 'react';

export function BackgroundLiquid() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Faster, more responsive spring for the mouse follower
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    // Set initial position to center
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-bg-primary pointer-events-none">
      <div className="absolute inset-0 opacity-60 mix-blend-screen">
        {/* Ambient blobs - Faster, wider movements, softer blurs to make it less "thick" */}
        <motion.div
          animate={{
            x: ['-20%', '20%', '-20%'],
            y: ['-20%', '20%', '-20%'],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-indigo-600/30 blur-[140px]"
        />
        <motion.div
          animate={{
            x: ['20%', '-20%', '20%'],
            y: ['20%', '-20%', '20%'],
            scale: [1.5, 1, 1.5],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-[10%] right-[10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-accent-cyan/20 blur-[140px]"
        />
        <motion.div
          animate={{
            x: ['0%', '30%', '0%'],
            y: ['30%', '0%', '30%'],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-purple-500/20 blur-[140px]"
        />
        
        {/* Mouse follower blob - Faster and softer */}
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-accent-cyan/20 blur-[150px]"
          style={{ x: smoothX, y: smoothY, translateX: '-50%', translateY: '-50%' }}
        />
      </div>
      <div className="absolute inset-0 bg-grain opacity-40"></div>
    </div>
  );
}
