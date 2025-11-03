"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users } from "lucide-react";

// Import team images
import deepakJindal from "@/assets/images/team/Deepak_Jindal.png";
import minalJindal from "@/assets/images/team/MinalJindal.png";
import shivamGoyal from "@/assets/images/team/ShivamGoyal.png";
import vikasDabral from "@/assets/images/team/VikasDabral.png";

// Create team image mapping
const teamImages: { [key: string]: typeof deepakJindal } = {
  "/src/assets/images/team/Deepak_Jindal.png": deepakJindal,
  "/src/assets/images/team/MinalJindal.png": minalJindal,
  "/src/assets/images/team/ShivamGoyal.png": shivamGoyal,
  "/src/assets/images/team/VikasDabral.png": vikasDabral,
};

const teamMembers = [
  {
    name: "Deepak Jindal",
    role: "MANAGER PROJECTS",
    image: "/src/assets/images/team/Deepak_Jindal.png",
    description:
      "Leading project management with extensive experience in construction and technical auditing.",
  },
  {
    name: "Minal Jindal",
    role: "3D VISUALIZER",
    image: "/src/assets/images/team/MinalJindal.png",
    description:
      "Specialized in creating stunning 3D visualizations and architectural renderings.",
  },
  {
    name: "Shivam Goyal",
    role: "ARCHITECTURAL CONSULTANT",
    image: "/src/assets/images/team/ShivamGoyal.png",
    description:
      "Expert in architectural design, planning, and structural consulting.",
  },
  {
    name: "Vikas Dabral",
    role: "INTERIOR ENGINEER",
    image: "/src/assets/images/team/VikasDabral.png",
    description: "Focused on interior design execution and space optimization.",
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

export default function MeetExperts() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-stone/20 to-stone/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
          }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold tracking-tight text-charcoal mb-8">
            Meet Our Experts
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-navy/80 font-light max-w-3xl mx-auto leading-relaxed">
            Our team of skilled professionals brings together decades of
            experience in project management, construction, and architectural
            design.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group h-full flex flex-col"
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-stone/30 hover:border-gold/60 transition-all duration-500 hover:shadow-2xl cursor-pointer h-full flex flex-col">
                <div className="aspect-square relative bg-gradient-to-br from-stone to-stone-dark overflow-hidden">
                  {member.image && teamImages[member.image] ? (
                    <Image
                      src={teamImages[member.image]}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Users className="w-16 h-16 text-stone-dark/50" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 lg:p-8 text-center flex flex-col flex-grow">
                  <h3 className="text-xl lg:text-2xl font-display font-semibold text-charcoal mb-2 tracking-tight group-hover:text-gold transition-colors duration-500">
                    {member.name}
                  </h3>
                  <p className="text-gold font-medium mb-4 text-xs lg:text-sm uppercase tracking-wider">
                    {member.role}
                  </p>
                  <p className="text-navy/70 font-light text-sm lg:text-base leading-relaxed flex-grow">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
