"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Logo {
  id: number;
  title: string;
  image: string;
  size?: {
    width?: number;
    height?: number;
  };
}

interface InfiniteMovingCardsProps {
  items: Logo[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
}: InfiniteMovingCardsProps) => {
  const [duplicatedItems, setDuplicatedItems] = useState<Logo[]>([]);

  useEffect(() => {
    // Duplicate items to create the infinite effect
    setDuplicatedItems([...items, ...items, ...items]);
  }, [items]);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 40;
      case "fast":
        return 20;
      default:
        return 30;
    }
  };

  return (
    <div className="relative h-24 overflow-hidden w-full select-none">
      <motion.div
        className="flex gap-12 absolute whitespace-nowrap items-center"
        animate={{
          x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"],
        }}
        transition={{
          duration: getSpeed(),
          ease: "linear",
          repeat: Infinity,
        }}
        whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={item.id + idx}
            className={`relative flex-shrink-0 group cursor-pointer ${
              item.size 
                ? `h-[${item.size.height}px] w-[${item.size.width}px]` 
                : 'h-16 w-16'
            }`}
          >
            <div className={`relative h-full w-full ${item.size ? 'p-0' : 'p-3'}`}>
              <Image
                src={item.image}
                alt={item.title}
                width={item.size?.width || 64}
                height={item.size?.height || 64}
                className="object-contain opacity-50 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}; 