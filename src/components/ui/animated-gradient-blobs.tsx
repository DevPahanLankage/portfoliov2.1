"use client";

import React from "react";
import { motion } from "framer-motion";

export function AnimatedGradientBlobs() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Purple Blob */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px]"
        animate={{
          x: [0, 200, 0, -200, 0],
          y: [0, -200, 200, 0, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: "20%",
          left: "15%",
        }}
      />

      {/* Blue Blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px]"
        animate={{
          x: [0, -200, 0, 200, 0],
          y: [0, 200, -200, 0, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          top: "40%",
          right: "20%",
        }}
      />

      {/* Accent Blob */}
      <motion.div
        className="absolute w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[90px]"
        animate={{
          x: [-200, 200, 0, -200],
          y: [100, -100, -200, 100],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          bottom: "20%",
          left: "10%",
        }}
      />
    </div>
  );
} 