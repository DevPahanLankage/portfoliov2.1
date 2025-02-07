"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface Point {
  x: number;
  originX: number;
  y: number;
  originY: number;
  closest?: Point[];
  active?: number;
  circle?: Circle;
}

class Circle {
  pos: Point;
  radius: number;
  color: string;
  active: number;

  constructor(pos: Point, rad: number, color: string) {
    this.pos = pos;
    this.radius = rad;
    this.color = color;
    this.active = 0;
  }

  draw(ctx: CanvasRenderingContext2D | null) {
    if (!this.active || !ctx) return;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'rgba(156,217,249,' + this.active + ')';
    ctx.fill();
  }
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !headerRef.current) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let points: Point[] = [];
    let target: { x: number; y: number } = { x: width / 2, y: height / 2 };
    let animateHeader = true;

    // Initialize
    function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width / 2, y: height / 2 };

      if (headerRef.current) {
        headerRef.current.style.height = height + 'px';
      }

      canvas.width = width;
      canvas.height = height;

      // Create points
      points = [];
      for (let x = 0; x < width; x = x + width / 20) {
        for (let y = 0; y < height; y = y + height / 20) {
          const px = x + Math.random() * width / 20;
          const py = y + Math.random() * height / 20;
          const p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      // For each point find the 5 closest points
      for (let i = 0; i < points.length; i++) {
        const closest: Point[] = [];
        const p1 = points[i];
        for (let j = 0; j < points.length; j++) {
          const p2 = points[j];
          if (!(p1 === p2)) {
            let placed = false;
            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] === undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (let k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      // Assign a circle to each point
      for (let i in points) {
        const c = new Circle(points[i], 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
        points[i].circle = c;
      }
    }

    // Event handling
    function addListeners() {
      if (!('ontouchstart' in window)) {
        window.addEventListener('mousemove', mouseMove);
      }
      window.addEventListener('scroll', scrollCheck);
      window.addEventListener('resize', resize);
    }

    function mouseMove(e: MouseEvent) {
      let posx = 0;
      let posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
    }

    function scrollCheck() {
      if (document.body.scrollTop > height) animateHeader = false;
      else animateHeader = true;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      if (headerRef.current) {
        headerRef.current.style.height = height + 'px';
      }
      canvas.width = width;
      canvas.height = height;
    }

    // Animation
    function initAnimation() {
      animate();
      for (let i in points) {
        shiftPoint(points[i]);
      }
    }

    function animate() {
      if (animateHeader && ctx) {
        ctx.clearRect(0, 0, width, height);
        for (let i in points) {
          // Detect points in range
          if (Math.abs(getDistance(target, points[i])) < 4000) {
            points[i].active = 0.3;
            if (points[i].circle) points[i].circle.active = 0.6;
          } else if (Math.abs(getDistance(target, points[i])) < 20000) {
            points[i].active = 0.1;
            if (points[i].circle) points[i].circle.active = 0.3;
          } else if (Math.abs(getDistance(target, points[i])) < 40000) {
            points[i].active = 0.02;
            if (points[i].circle) points[i].circle.active = 0.1;
          } else {
            points[i].active = 0;
            if (points[i].circle) points[i].circle.active = 0;
          }

          drawLines(points[i]);
          if (points[i].circle) points[i].circle.draw(ctx);
        }
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(p: Point) {
      gsap.to(p, {
        duration: 1 + 1 * Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: "circ.inOut",
        onComplete: () => shiftPoint(p)
      });
    }

    // Canvas manipulation
    function drawLines(p: Point) {
      if (!p.active || !ctx || !p.closest) return;
      for (let i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = 'rgba(156,217,249,' + p.active + ')';
        ctx.stroke();
      }
    }

    // Util
    function getDistance(p1: { x: number; y: number }, p2: { x: number; y: number }) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    // Initialize
    initHeader();
    initAnimation();
    addListeners();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div ref={headerRef} className="absolute inset-0 z-0">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
} 