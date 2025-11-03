"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Import testimonial images
import test1 from "@/assets/images/testimonialIMG/test1.png";
import test2 from "@/assets/images/testimonialIMG/test2.png";
import test3 from "@/assets/images/testimonialIMG/test3.png";
import test4 from "@/assets/images/testimonialIMG/test4.png";

const testimonials = [
  {
    id: 1,
    name: "Gopal Singh Gangola",
    designation: "Assistant General Manager, Sawhney Buildwell LLP",
    quote:
      "A quality company with skilled professionals, high standards, professionalism, and competitive pricing.",
    image: test1,
  },
  {
    id: 2,
    name: "Jaspreet Singh Sehgal",
    designation: "Managing Director, Gyan Constructions",
    quote:
      "Exceptional project management and construction services that exceeded our expectations.",
    image: test2,
  },
  {
    id: 3,
    name: "Mohita Negi",
    designation: "Pitara Decore",
    quote:
      "Professional, reliable, and delivered our project on time and within budget.",
    image: test3,
  },
  {
    id: 4,
    name: "Smarty Garg",
    designation: "Managing Director, IGPL",
    quote:
      "Outstanding attention to detail and quality throughout the entire project lifecycle.",
    image: test4,
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-gradient-to-b from-white via-stone/10 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-charcoal mb-6">
            Testimonials
          </h2>
          <p className="text-lg sm:text-xl text-navy/80 font-light max-w-3xl mx-auto leading-relaxed">
            What our clients say about us
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="bg-white rounded-2xl p-6 lg:p-10 border border-stone/30 shadow-lg relative z-10"
              >
                <div className="flex flex-col lg:flex-row items-center lg:items-end gap-6 lg:gap-10">
                  {/* Left Side: Photo and Title */}
                  <div className="flex flex-col items-center lg:items-start flex-shrink-0 px-4 lg:px-8">
                    <div className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden mb-4 border-2 border-gold/30">
                      <Image
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-base lg:text-lg font-display font-semibold text-charcoal mb-2 text-center lg:text-left">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-xs lg:text-sm text-navy/70 font-light text-center lg:text-left">
                      {testimonials[currentIndex].designation}
                    </p>
                  </div>

                  {/* Right Side: Testimonial Quote */}
                  <div className="flex-1 flex items-end pr-8 lg:pr-12">
                    <blockquote className="text-lg lg:text-xl text-navy/80 font-light leading-relaxed italic">
                      &quot;{testimonials[currentIndex].quote}&quot;
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-11 lg:h-11 bg-gold hover:bg-gold-light rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-20 pointer-events-auto"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-11 lg:h-11 bg-gold hover:bg-gold-light rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-20 pointer-events-auto"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gold w-8"
                    : "bg-stone/40 hover:bg-stone/60 w-2"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
