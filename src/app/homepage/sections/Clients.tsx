"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import Image from "next/image";

// Import client images
import client1 from "@/assets/images/clients/client1.png";
import client2 from "@/assets/images/clients/client2.png";
import client3 from "@/assets/images/clients/client3.png";
import client4 from "@/assets/images/clients/client4.png";
import client5 from "@/assets/images/clients/client5.png";
import client6 from "@/assets/images/clients/client6.png";
import client7 from "@/assets/images/clients/client7.png";

const clientImages = [
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
];

export default function Clients() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const animationControls = useRef<ReturnType<typeof animate> | null>(null);
  const offsetRef = useRef(0);

  const x = useMotionValue(0);
  const speed = 60; // pixels per second
  const itemWidth = 280; // Width of each item including padding
  const singleSetWidth = clientImages.length * itemWidth;

  // Duplicate images 4 times for seamless infinite loop
  const duplicatedImages = [
    ...clientImages,
    ...clientImages,
    ...clientImages,
    ...clientImages,
  ];

  // Initialize position to show second set
  useEffect(() => {
    const initialX = -singleSetWidth;
    x.set(initialX);
    offsetRef.current = initialX;
  }, [x, singleSetWidth]);

  // Auto-slide animation with seamless infinite loop
  useEffect(() => {
    if (isHovered || isDragging) {
      if (animationControls.current) {
        animationControls.current.stop();
      }
      return;
    }

    const animateLoop = () => {
      const currentX = x.get();
      const targetX = currentX - singleSetWidth;

      animationControls.current = animate(x, targetX, {
        duration: singleSetWidth / speed,
        ease: "linear",
        onComplete: () => {
          const newX = x.get();
          // Reset position seamlessly when we've scrolled one full set
          if (newX <= -singleSetWidth * 2) {
            x.set(-singleSetWidth);
            offsetRef.current = -singleSetWidth;
          } else {
            offsetRef.current = newX;
          }
          // Continue animation if not hovering or dragging
          if (!isHovered && !isDragging) {
            animateLoop();
          }
        },
      });
    };

    animateLoop();

    return () => {
      if (animationControls.current) {
        animationControls.current.stop();
      }
    };
  }, [isHovered, isDragging, x, singleSetWidth, speed]);

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-charcoal mb-6">
            Our Clients
          </h2>
          <p className="text-lg sm:text-xl text-navy/80 font-light max-w-3xl mx-auto leading-relaxed">
            Trusted by leading companies across India
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
        >
          <div
            className="w-full overflow-hidden py-12 cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              className="flex will-change-transform"
              style={{ x }}
              drag="x"
              dragConstraints={{ left: -singleSetWidth * 3, right: 0 }}
              dragElastic={0.2}
              dragPropagation={true}
              dragMomentum={false}
              onDragStart={() => {
                setIsDragging(true);
                offsetRef.current = x.get();
                if (animationControls.current) {
                  animationControls.current.stop();
                }
              }}
              onDrag={(event, info) => {
                const newX = offsetRef.current + info.offset.x;
                x.set(newX);
              }}
              onDragEnd={() => {
                setIsDragging(false);
                const currentX = x.get();
                // Reset to valid range if dragged outside bounds
                if (currentX <= -singleSetWidth * 3) {
                  x.set(-singleSetWidth);
                  offsetRef.current = -singleSetWidth;
                } else if (currentX >= 0) {
                  x.set(-singleSetWidth * 2);
                  offsetRef.current = -singleSetWidth * 2;
                } else {
                  offsetRef.current = currentX;
                }
              }}
            >
              {duplicatedImages.map((image, index) => (
                <div
                  key={`client-${index}`}
                  className="flex-shrink-0"
                  style={{
                    width: `${itemWidth}px`,
                    paddingLeft: "40px",
                    paddingRight: "40px",
                  }}
                >
                  <div className="w-full h-[120px] relative bg-white rounded-lg p-4 flex items-center justify-center border border-stone/30 hover:border-gold/50 transition-colors duration-300 shadow-sm hover:shadow-md">
                    <Image
                      src={image}
                      alt={`Client ${(index % clientImages.length) + 1}`}
                      fill
                      className="object-contain transition-all duration-300 pointer-events-none"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
