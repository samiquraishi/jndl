"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useTabs } from "./TabNavigation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function ServicesContent() {
  const { tabs, activeTab } = useTabs();
  return (
    <section className="pt-12 pb-20 lg:pt-16 lg:pb-32 bg-gradient-to-b from-stone/30 via-stone/10 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="max-w-6xl mx-auto"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 gap-6 lg:gap-8"
            >
              {tabs[activeTab].services.map((service, index) => (
                <motion.div
                  key={`${activeTab}-${index}`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group relative p-8 lg:p-10 rounded-2xl border border-stone/30 hover:border-gold/60 bg-gold/25 backdrop-blur-md transition-all duration-500 hover:bg-gold/35 cursor-pointer overflow-hidden"
                >
                  {/* Frosted glass overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none group-hover:from-white/10 transition-all duration-500" />

                  {/* Content */}
                  <div className="relative z-10 flex items-start gap-5">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-gold/30 to-gold/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:from-gold/40 group-hover:to-gold/30 transition-all duration-500 shadow-md group-hover:scale-110"
                      whileHover={{ rotate: 5 }}
                    >
                      <CheckCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-500" />
                    </motion.div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-lg lg:text-xl font-display font-semibold text-charcoal mb-2 tracking-tight group-hover:text-charcoal-dark transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-navy/80 font-light leading-relaxed text-sm lg:text-base group-hover:text-navy transition-colors duration-500">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
