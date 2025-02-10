"use client";

import React from "react";
import { motion } from "framer-motion";

export const SkillBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />

      {/* Floating orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "20%",
          left: "15%",
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          bottom: "20%",
          right: "15%",
        }}
      />
    </div>
  );
}; 