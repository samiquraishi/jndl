"use client";

import { motion } from "framer-motion";
import { Target, Building2, Award, Users } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description: "Every decision is made with your success in mind.",
  },
  {
    icon: Building2,
    title: "Quality First",
    description: "Uncompromising standards in every project.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Setting benchmarks in project management.",
  },
  {
    icon: Users,
    title: "Transparency",
    description: "Clear communication throughout the process.",
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-stone/30 via-white to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-charcoal mb-8">
            Our Core Values
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-navy/80 font-light max-w-3xl mx-auto leading-relaxed">
            The principles that guide everything we do and drive our commitment
            to excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -4 }}
                className="text-center group bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-stone/30 hover:border-gold/60 transition-all duration-500 hover:shadow-xl"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-gold/20 to-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-gold/30 group-hover:to-gold/20 group-hover:scale-110 transition-all duration-500 shadow-md">
                  <Icon className="w-10 h-10 text-gold group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl lg:text-2xl font-display font-semibold text-charcoal mb-3 tracking-tight group-hover:text-gold transition-colors duration-500">
                  {value.title}
                </h3>
                <p className="text-navy/70 font-light text-sm lg:text-base leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
