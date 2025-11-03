"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import homepageImage from "@/assets/images/homepage.jpg";

export default function Hero() {
  const openModal = () => {
    window.dispatchEvent(new CustomEvent("openEnquiryModal"));
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-charcoal via-navy to-charcoal">
      {/* Homepage Background Image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src={homepageImage}
          alt="Jindal Associates"
          fill
          className="object-cover mix-blend-overlay"
          priority
          quality={90}
        />
      </div>

      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              Where Vision Meets
              <span className="block text-gold mt-2">Reality</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-12"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-stone-light font-light max-w-3xl mx-auto leading-relaxed">
              Leading Project Management Consultancy for End-to-End Construction
              and Technical Auditing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={openModal}
              size="lg"
              className="bg-gold text-charcoal hover:bg-gold-light px-10 py-6 text-base sm:text-lg font-medium tracking-wide transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white/80 text-white bg-white/10 hover:bg-white/20 hover:border-white px-10 py-6 text-base sm:text-lg font-medium tracking-wide transition-all duration-300 rounded-lg backdrop-blur-sm"
              >
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
