"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import teamBG from "@/assets/images/team/team.jpg";

export default function AboutHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-charcoal via-navy to-charcoal">
      {/* Team Background Image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src={teamBG}
          alt="Team"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-32 lg:pb-40">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-semibold tracking-tight text-white mb-8 leading-[1.1]">
              About <span className="text-gold">Us</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-stone-light font-light max-w-3xl mx-auto leading-relaxed mb-6">
              Leading Project Management Consultancy with pan-India operations,
              delivering excellence in construction and project management.
            </p>
            <p className="text-base sm:text-lg text-stone-light/80 font-light max-w-3xl mx-auto leading-relaxed">
              We aim to be a leading consulting firm by delivering well-managed
              projects on time and within budget, while maintaining clear
              transparency throughout the process.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
