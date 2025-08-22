'use client';

import { motion } from 'framer-motion';
import { Building2, Wrench, Palette, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Project Management",
      description: "End-to-end project management consulting with advanced technologies and systems like MS Projects and Primavera.",
      features: ["Cost Management", "Auditing", "Material Procurement", "Quantity Surveying"]
    },
    {
      icon: Wrench,
      title: "Construction Services",
      description: "Comprehensive construction services for residential, commercial, industrial, and hospitality projects.",
      features: ["Residential Buildings", "Commercial Buildings", "Resorts", "Industrial Buildings"]
    },
    {
      icon: Palette,
      title: "Architecture & Design",
      description: "Complete architectural services from concept to execution with 3D visualization and interior design.",
      features: ["Design & Planning", "Elevations", "MEP Design", "3D Visualization"]
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-8">
            Our
            <span className="block gradient-text font-extralight">Services</span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive, client-centric project solutions tailored to unique requirements across diverse sectors.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
              className="group relative"
            >
              <div className="glass p-8 rounded-2xl hover-lift border border-white/5">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-white/20 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-light mb-6 text-white tracking-wide">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed font-light">{service.description}</p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 font-light">
                      <div className="w-2 h-2 bg-white/30 rounded-full mr-4 group-hover:bg-white transition-all duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-white font-light group-hover:text-gray-300 transition-colors duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 font-light mb-8 max-w-2xl mx-auto">
            Ready to transform your vision into reality? Let&apos;s discuss how we can help bring your project to life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 text-lg font-light tracking-wide transition-all duration-300 hover:bg-gray-100"
          >
            Start Your Project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;