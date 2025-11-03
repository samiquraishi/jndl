"use client";

import { motion } from "framer-motion";

export default function AboutCompany() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-stone/30 via-white to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-charcoal mb-12 text-center">
            About Jindal Associates
          </h2>
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg lg:text-xl text-navy/80 font-light leading-relaxed">
              Jindal Associates is a leading Project Management Consultancy with
              pan-India operations, specialized in construction, technical
              auditing, and end-to-end project management services.
            </p>
            <p className="text-lg lg:text-xl text-navy/80 font-light leading-relaxed">
              With a client-centric approach, we deliver comprehensive solutions
              tailored to unique requirements across diverse sectors including
              hospitality, housing, and banking. Our expertise spans from
              initial planning and design to final execution, ensuring seamless
              project delivery.
            </p>
            <p className="text-lg lg:text-xl text-navy/80 font-light leading-relaxed">
              We leverage advanced project management systems and tools to
              ensure precision, efficiency, and transparency in every project we
              undertake. Our commitment to excellence and quality has
              established us as a trusted partner for businesses seeking
              reliable project management solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
