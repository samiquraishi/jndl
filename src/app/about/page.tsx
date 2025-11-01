"use client";

import { motion } from "framer-motion";
// import Image from 'next/image'; // Uncomment when images are available
import { Users, Building2, Target, Award } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Deepak Jindal",
      role: "MANAGER PROJECTS",
      image: "/images/team/deepak-jindal.jpg",
      description:
        "Leading project management with extensive experience in construction and technical auditing.",
    },
    {
      name: "Minal Jindal",
      role: "3D VISUALIZER",
      image: "/images/team/minal-jindal.jpg",
      description:
        "Specialized in creating stunning 3D visualizations and architectural renderings.",
    },
    {
      name: "Shivam Goyal",
      role: "ARCHITECTURAL CONSULTANT",
      image: "/images/team/shivam-goyal.jpg",
      description:
        "Expert in architectural design, planning, and structural consulting.",
    },
    {
      name: "Vikas Dabral",
      role: "INTERIOR ENGINEER",
      image: "/images/team/vikas-dabral.jpg",
      description:
        "Focused on interior design execution and space optimization.",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Our Vision Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-12">
              Our Vision
            </h1>
            <p className="text-xl text-gray-800 font-light leading-relaxed mb-8">
              We aim to be a leading consulting firm in project management and
              construction, by delivering well-managed projects on time and
              within estimated budgets, while maintaining clear and consistent
              transparency throughout the process.
            </p>
            <p className="text-lg text-gray-800 font-light leading-relaxed">
              We aim to set benchmarks in quality and service, establishing
              sustainability, profitability, and a client-focused approach that
              drives long-term success for all stakeholders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Jindal Associates Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-gray-900 mb-12 text-center">
              About Jindal Associates
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-800 font-light leading-relaxed mb-6">
                Jindal Associates is a leading Project Management Consultancy
                with pan-India operations, specialized in construction,
                technical auditing, and end-to-end project management services.
              </p>
              <p className="text-lg text-gray-800 font-light leading-relaxed mb-6">
                With a client-centric approach, we deliver comprehensive
                solutions tailored to unique requirements across diverse sectors
                including hospitality, housing, and banking. Our expertise spans
                from initial planning and design to final execution, ensuring
                seamless project delivery.
              </p>
              <p className="text-lg text-gray-800 font-light leading-relaxed">
                We leverage advanced project management systems and tools to
                ensure precision, efficiency, and transparency in every project
                we undertake. Our commitment to excellence and quality has
                established us as a trusted partner for businesses seeking
                reliable project management solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Experts Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-8">
              Meet Our Experts
            </h2>
            <p className="text-xl text-gray-800 font-light max-w-3xl mx-auto leading-relaxed">
              Our team of skilled professionals brings together decades of
              experience in project management, construction, and architectural
              design.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-300 hover:border-gold transition-all duration-500 hover:shadow-xl">
                  <div className="aspect-square relative bg-gradient-to-br from-gray-100 to-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-16 h-16 text-gray-300" />
                    </div>
                    {/* Uncomment when images are available */}
                    {/* {member.image && (
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      />
                    )} */}
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">
                      {member.name}
                    </h3>
                    <p className="text-gold font-light mb-4 text-sm uppercase tracking-wide">
                      {member.role}
                    </p>
                    <p className="text-gray-800 font-light text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Target,
                title: "Client-Focused",
                description:
                  "Every decision is made with your success in mind.",
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
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-gray-800 font-light text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
