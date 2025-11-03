"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Building2,
  Wrench,
  Palette,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const servicePillars = [
  {
    icon: Building2,
    title: "Project Management Consulting",
    description: "Project & Cost Management, Auditing, Quantity Surveying",
    features: [
      "Project Management",
      "Cost Management",
      "Auditing",
      "Quantity Surveying",
    ],
  },
  {
    icon: Wrench,
    title: "End-to-End Construction",
    description: "Commercial, Residential, Resorts, and Industrial Buildings",
    features: [
      "Residential & Commercial",
      "Resorts & Industrial",
      "Interior Work",
      "Renovation Work",
    ],
  },
  {
    icon: Palette,
    title: "Architecture & Design",
    description: "Planning, 3D Visualization, and Structural Design",
    features: [
      "Design & Planning",
      "3D Visualization",
      "Structural Design",
      "Interior Design",
    ],
  },
];

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

export default function ServicePillars() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-charcoal mb-6">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-navy/80 font-light max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions tailored to your unique project
            requirements.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {servicePillars.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="h-full p-8 lg:p-10 rounded-2xl bg-white border border-stone/50 hover:border-gold/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-charcoal group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4 text-charcoal tracking-tight">
                  {service.title}
                </h3>
                <p className="text-navy/70 mb-8 leading-relaxed font-light text-base">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-charcoal/90 font-light text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-gold mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center text-charcoal font-medium group-hover:text-gold transition-colors duration-300 text-sm"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
