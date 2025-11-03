"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesCTA() {
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
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-white mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-stone-light font-light mb-12 leading-relaxed">
            Get in touch and let&apos;s discuss how we can bring your vision to
            life.
          </p>
          <Button
            onClick={() =>
              window.dispatchEvent(new CustomEvent("openEnquiryModal"))
            }
            size="lg"
            className="bg-gold text-charcoal hover:bg-gold-light px-10 py-6 text-lg font-medium tracking-wide transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
