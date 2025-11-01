"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Wrench, Palette, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      title: "Project Management Consulting",
      icon: Building2,
      services: [
        {
          title: "Project Management",
          description:
            "Comprehensive project planning, execution, and monitoring using advanced systems like MS Projects and Primavera.",
        },
        {
          title: "Cost Management",
          description:
            "Budget planning, cost estimation, and financial control throughout the project lifecycle.",
        },
        {
          title: "Auditing",
          description:
            "Technical auditing services to ensure compliance, quality, and best practices.",
        },
        {
          title: "Material Procurements",
          description:
            "Strategic sourcing and procurement of materials at competitive prices.",
        },
        {
          title: "Quantity Surveying",
          description:
            "Accurate quantity estimation and cost analysis for project planning.",
        },
        {
          title: "Vendor Selection and Tendering",
          description:
            "Comprehensive vendor evaluation, selection, and tendering process management.",
        },
      ],
    },
    {
      id: 1,
      title: "End-to-End Construction",
      icon: Wrench,
      services: [
        {
          title: "Residential & Commercial Buildings",
          description:
            "Complete construction services for residential and commercial properties with attention to detail and quality.",
        },
        {
          title: "Resorts & Industrial Buildings",
          description:
            "Specialized construction for hospitality and industrial sectors with expert project management.",
        },
        {
          title: "Interior Work Execution",
          description:
            "Professional interior fit-out services with precision and craftsmanship.",
        },
        {
          title: "Renovation Work",
          description:
            "Transformation and modernization of existing structures while preserving their character.",
        },
      ],
    },
    {
      id: 2,
      title: "Architecture Services",
      icon: Palette,
      services: [
        {
          title: "Design & Planning",
          description:
            "Creative and functional architectural design solutions tailored to your needs.",
        },
        {
          title: "Elevations & 3D Visualization",
          description:
            "Stunning 3D visualizations and elevation designs to bring your vision to life.",
        },
        {
          title: "MEP (Mechanical, Electrical, Plumbing)",
          description:
            "Comprehensive MEP design and coordination for optimal building performance.",
        },
        {
          title: "Interior Designing & Structural Design",
          description:
            "Complete interior design services with structural engineering support.",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-8">
              Comprehensive Project Solutions
            </h1>
            <p className="text-xl text-gray-800 font-light max-w-3xl mx-auto leading-relaxed">
              We offer end-to-end project management and construction services
              tailored to your unique requirements.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-lg font-light tracking-wide transition-all duration-300 ${
                    activeTab === index
                      ? "bg-gold text-gray-900"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {tabs[activeTab].services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-2xl border-2 border-gray-300 hover:border-gold transition-all duration-500 hover:shadow-xl bg-white"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light text-gray-900 mb-3 tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-gray-800 font-light leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-center mt-20"
          >
            <p className="text-gray-800 font-light mb-8 max-w-2xl mx-auto text-lg">
              Ready to start your project? Get in touch and let&apos;s discuss
              how we can help.
            </p>
            <Button
              onClick={() =>
                window.dispatchEvent(new CustomEvent("openEnquiryModal"))
              }
              className="bg-gold text-gray-900 hover:bg-gold-dark font-light tracking-wide px-8 py-4 text-lg transition-all duration-300"
            >
              Get in Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
