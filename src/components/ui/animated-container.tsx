"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface AnimatedContainerProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedContainer({ children, className, ...motionProps }: AnimatedContainerProps) {
  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  );
} 