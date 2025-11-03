"use client";

import { motion } from "framer-motion";

export default function TechnologyHighlight() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-gradient-to-br from-charcoal via-navy to-charcoal relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl lg:text-4xl font-display font-semibold text-white mb-6">
            Efficiency and precision using advanced systems
          </h3>
          <p className="text-xl text-stone-light font-light leading-relaxed">
            We leverage cutting-edge tools like{" "}
            <span className="text-gold font-medium">MS Projects</span> and{" "}
            <span className="text-gold font-medium">Primavera</span> to ensure
            seamless project management and delivery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
