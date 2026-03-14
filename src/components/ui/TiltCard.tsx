'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltSpeed?: number;
  tiltMax?: number;
}

export function TiltCard({
  children,
  className = '',
  tiltSpeed = 300,
  tiltMax = 15, // Max rotation in degrees
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth the motion values for a realistic buttery effect
  const mouseXSpring = useSpring(x, { stiffness: tiltSpeed, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: tiltSpeed, damping: 30 });

  // Map mouse position to rotation angle
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [`${tiltMax}deg`, `-${tiltMax}deg`]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [`-${tiltMax}deg`, `${tiltMax}deg`]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return;
    
    // Get the dimensions and position of the card
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to the element
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Normalize values to range -0.5 to 0.5
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    // Reset rotation smoothly when mouse leaves
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative w-full h-full perspective-1000 ${className}`}
    >
      <div 
        style={{ transform: 'translateZ(40px)', width: '100%', height: '100%' }}
        className="w-full h-full"
      >
        {children}
      </div>
    </motion.div>
  );
}
