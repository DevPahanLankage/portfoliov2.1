"use client";

import React from "react";

interface ScrollButtonProps {
  targetId: string;
  children: React.ReactNode;
  className?: string;
}

export function ScrollButton({ targetId, children, className }: ScrollButtonProps) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  };

  return (
    <a
      href={`#${targetId}`}
      className={className}
      tabIndex={0}
      aria-label={`Scroll to ${targetId}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </a>
  );
} 