"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import project3 from "@/assets/images/projects/project3.jpg";

export default function FeaturedProject() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-charcoal mb-6">
            Featured Project
          </h2>
          <p className="text-lg sm:text-xl text-navy/80 font-light max-w-2xl mx-auto leading-relaxed">
            Showcasing excellence in project management and construction
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone/50 hover:shadow-3xl transition-all duration-500 group">
            <div className="aspect-video relative overflow-hidden">
              <Image
                src={project3}
                alt="Sawhney Buildwell LLP"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 text-white">
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-display font-semibold mb-4">
                  Sawhney Buildwell LLP
                </h3>
                <p className="text-lg text-stone-light/90 font-light max-w-2xl">
                  A landmark project demonstrating our expertise in large-scale
                  construction and project management
                </p>
              </div>
            </div>
            <div className="p-8 lg:p-12 bg-white">
              <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 mb-8">
                <div className="text-center sm:text-left">
                  <div className="text-xs sm:text-sm text-navy/60 mb-3 font-light uppercase tracking-wider">
                    Project Cost
                  </div>
                  <div className="text-3xl lg:text-4xl font-display font-semibold text-charcoal mb-2">
                    ₹6,000
                  </div>
                  <div className="text-sm text-navy/70 font-light">Lakhs</div>
                </div>
                <div className="text-center sm:text-left border-l-0 sm:border-l border-stone/30 pl-0 sm:pl-8 lg:pl-12">
                  <div className="text-xs sm:text-sm text-navy/60 mb-3 font-light uppercase tracking-wider">
                    Covered Area
                  </div>
                  <div className="text-3xl lg:text-4xl font-display font-semibold text-charcoal mb-2">
                    550,000
                  </div>
                  <div className="text-sm text-navy/70 font-light">
                    Square Feet
                  </div>
                </div>
                <div className="text-center sm:text-left border-l-0 sm:border-l border-stone/30 pl-0 sm:pl-8 lg:pl-12">
                  <div className="text-xs sm:text-sm text-navy/60 mb-3 font-light uppercase tracking-wider">
                    Completion Time
                  </div>
                  <div className="text-3xl lg:text-4xl font-display font-semibold text-charcoal mb-2">
                    5
                  </div>
                  <div className="text-sm text-navy/70 font-light">Months</div>
                </div>
              </div>
              <Link href="/projects">
                <Button className="bg-gold text-charcoal hover:bg-gold-light font-medium tracking-wide rounded-lg px-8 py-6 text-base transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 w-full sm:w-auto">
                  View All Projects
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
