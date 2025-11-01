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
import { Button } from "@/components/ui/button";

export default function Home() {
  const openModal = () => {
    // Dispatch custom event to open modal from header
    window.dispatchEvent(new CustomEvent("openEnquiryModal"));
  };

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

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 pt-20">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-8"
              >
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-white mb-6">
                  Where Vision Meets Reality
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="mb-12"
              >
                <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
                  Leading Project Management Consultancy for End-to-End
                  Construction and Technical Auditing.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Button
                  onClick={openModal}
                  size="lg"
                  className="bg-gold text-gray-900 hover:bg-gold-dark px-8 py-4 text-lg font-light tracking-wide transition-all duration-300"
                >
                  Start Your Project
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Pillars */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-8">
                Our Services
              </h2>
              <p className="text-xl text-gray-800 font-light max-w-3xl mx-auto leading-relaxed">
                Comprehensive solutions tailored to your unique project
                requirements.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {servicePillars.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  className="group relative"
                >
                  <div className="p-8 rounded-2xl border-2 border-gray-300 hover:border-gold transition-all duration-500 hover:shadow-xl">
                    <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold transition-all duration-500">
                      <service.icon className="w-8 h-8 text-gray-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-2xl font-light mb-6 text-gray-900 tracking-wide">
                      {service.title}
                    </h3>
                    <p className="text-gray-800 mb-8 leading-relaxed font-light">
                      {service.description}
                    </p>
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-black font-light"
                        >
                          <CheckCircle className="w-5 h-5 text-gold mr-4 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/services"
                      className="flex items-center text-gray-900 font-light group-hover:text-gold transition-colors duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="py-32 bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-8">
                Featured Project
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-gray-300">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="w-24 h-24 text-white/20" />
                  </div>
                </div>
                <div className="p-8 md:p-12">
                  <h3 className="text-3xl font-light text-gray-900 mb-6">
                    Sawhney Buildwell LLP
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <div className="text-sm text-gray-800 mb-2 font-light">
                        Project Cost
                      </div>
                      <div className="text-2xl font-light text-gray-900">
                        ₹6,000 Lakhs
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-800 mb-2 font-light">
                        Covered Area
                      </div>
                      <div className="text-2xl font-light text-gray-900">
                        550,000 SQ FT
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-800 mb-2 font-light">
                        Time Period
                      </div>
                      <div className="text-2xl font-light text-gray-900">
                        5 Months
                      </div>
                    </div>
                  </div>
                  <Link href="/projects">
                    <Button className="bg-gold text-gray-900 hover:bg-gold-dark font-light tracking-wide">
                      View All Projects
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-32 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0 }}
                className="text-center"
              >
                <div className="text-5xl font-light text-gold mb-4">₹6,000</div>
                <div className="text-sm text-gray-800 font-light uppercase tracking-wide">
                  Lakhs Project Cost
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-center"
              >
                <div className="text-5xl font-light text-gold mb-4">
                  550,000
                </div>
                <div className="text-sm text-gray-800 font-light uppercase tracking-wide">
                  SQ FT Covered Area
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-5xl font-light text-gold mb-4">5</div>
                <div className="text-sm text-gray-800 font-light uppercase tracking-wide">
                  Months Time Period
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technology Highlight */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center max-w-3xl mx-auto"
            >
              <h3 className="text-3xl font-light text-gray-900 mb-6">
                Efficiency and precision using advanced systems
              </h3>
              <p className="text-xl text-gray-900 font-light leading-relaxed">
                We leverage cutting-edge tools like{" "}
                <span className="text-gold font-semibold">MS Projects</span> and{" "}
                <span className="text-gold font-semibold">Primavera</span> to
                ensure seamless project management and delivery.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="text-6xl text-gold mb-8">&ldquo;</div>
              <blockquote className="text-2xl md:text-3xl font-light text-gray-900 mb-8 leading-relaxed">
                ...a quality company with skilled professionals, high standards,
                professionalism, and competitive pricing.
              </blockquote>
              <div className="text-gray-800 font-light">
                —{" "}
                <span className="font-semibold text-black">
                  Jaspreet Singh Sehgal
                </span>
                , Managing Director, Gyan Constructions
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl font-light text-white mb-8">
                Let&apos;s build your vision.
              </h2>
              <p className="text-xl text-gray-300 font-light mb-12">
                Get in touch and let&apos;s discuss how we can bring your
                project to life.
              </p>
              <Button
                onClick={openModal}
                size="lg"
                className="bg-gold text-gray-900 hover:bg-gold-dark px-8 py-4 text-lg font-light tracking-wide transition-all duration-300"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
