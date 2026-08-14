"use client";

import { motion, useScroll, useSpring } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30, mass: 0.25 });

  return <motion.div aria-hidden="true" className="fixed inset-x-0 top-0 z-50 h-px origin-left bg-foreground/70" style={{ scaleX }} />;
}
