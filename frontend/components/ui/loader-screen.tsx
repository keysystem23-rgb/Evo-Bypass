"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LoaderScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1400);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-[#040611]"
      exit={{ opacity: 0 }}
      initial={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative flex flex-col items-center gap-6">
        <div className="absolute h-36 w-36 rounded-full bg-cyan-400/25 blur-3xl" />
        <motion.div
          className="relative h-20 w-20 rounded-[28px] border border-white/15 bg-white/5 shadow-glow backdrop-blur-xl"
          animate={{ rotate: 360 }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.2, ease: "linear" }}
        />
        <motion.p
          className="text-sm uppercase tracking-[0.5em] text-white/70"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.4 }}
        >
          Initializing
        </motion.p>
      </div>
    </motion.div>
  );
}
