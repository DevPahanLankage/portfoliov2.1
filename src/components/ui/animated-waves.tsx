"use client";

import React from "react";

export function AnimatedWaves() {
  return (
    <div className="waveWrapper waveAnimation">
      <div className="waveWrapperInner bgTop">
        <svg className="wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(37, 24, 63, 0.3)" />
              <stop offset="50%" stopColor="rgba(31, 32, 68, 0.3)" />
              <stop offset="100%" stopColor="rgba(19, 40, 77, 0.3)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient1)"
            d="M0,160 C120,160,240,240,360,240 C480,240,600,160,720,160 C840,160,960,240,1080,240 C1200,240,1320,160,1440,160 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
      <div className="waveWrapperInner bgMiddle">
        <svg className="wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(37, 24, 63, 0.5)" />
              <stop offset="50%" stopColor="rgba(31, 32, 68, 0.5)" />
              <stop offset="100%" stopColor="rgba(19, 40, 77, 0.5)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient2)"
            d="M0,200 C120,200,240,120,360,120 C480,120,600,200,720,200 C840,200,960,120,1080,120 C1200,120,1320,200,1440,200 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
      <div className="waveWrapperInner bgBottom">
        <svg className="wave" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(37, 24, 63, 0.7)" />
              <stop offset="50%" stopColor="rgba(31, 32, 68, 0.7)" />
              <stop offset="100%" stopColor="rgba(19, 40, 77, 0.7)" />
            </linearGradient>
          </defs>
          <path
            fill="url(#waveGradient3)"
            d="M0,180 C120,180,240,80,360,80 C480,80,600,180,720,180 C840,180,960,80,1080,80 C1200,80,1320,180,1440,180 L1440,320 L0,320 Z"
          />
        </svg>
      </div>
    </div>
  );
} 