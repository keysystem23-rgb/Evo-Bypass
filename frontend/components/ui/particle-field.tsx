"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 18 }).map((_, index) => ({
  id: index,
  size: 4 + (index % 4) * 3,
  left: `${(index * 7) % 100}%`,
  top: `${(index * 13) % 100}%`,
  duration: 8 + (index % 5)
}));

export function ParticleField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-300/30 blur-[2px]"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.left,
            top: particle.top
          }}
          animate={{
            x: [0, 20, -16, 0],
            y: [0, -24, 10, 0],
            opacity: [0.15, 0.75, 0.25, 0.15]
          }}
          transition={{
            duration: particle.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
