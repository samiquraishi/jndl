'use client';

import { motion } from 'framer-motion';
import { Users, Award, Clock, Target } from 'lucide-react';

const PersonalBrand = () => {
  const teamMembers = [
    {
      name: "Deepak Jindal",
      role: "Manager Projects",
      description: "Leading project management with extensive experience in construction and technical auditing."
    },
    {
      name: "Minal Jindal",
      role: "3D Visualizer",
      description: "Specialized in creating stunning 3D visualizations and architectural renderings."
    },
    {
      name: "Shivam Goyal",
      role: "Architectural Consultant",
      description: "Expert in architectural design, planning, and structural consulting."
    },
    {
      name: "Vikas Dabral",
      role: "Interior Engineer",
      description: "Focused on interior design execution and space optimization."
    }
  ];

  const stats = [
    { icon: Users, value: "15+", label: "Years Experience" },
    { icon: Award, value: "50+", label: "Projects Completed" },
    { icon: Clock, value: "100%", label: "On-Time Delivery" },
    { icon: Target, value: "95%", label: "Client Satisfaction" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of skilled professionals brings together decades of experience in project management, construction, and architectural design.
          </p>
        </motion.div>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              We aim to be a leading consulting firm in project management and construction, by delivering well-managed projects on time and within estimated budgets, while maintaining clear and consistent transparency throughout the process. We aim to set benchmarks in quality and service, establishing sustainability, profitability, and a client-focused approach.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalBrand;