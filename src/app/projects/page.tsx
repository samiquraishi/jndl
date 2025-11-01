"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building, MapPin, Calendar, DollarSign } from "lucide-react";
// import Image from 'next/image'; // Uncomment when images are available
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Project {
  id: number;
  client: string;
  location: string;
  cost: string;
  area: string;
  timePeriod: string;
  image: string;
  type: "delivered" | "in-hand";
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<
    "all" | "delivered" | "in-hand"
  >("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const completedProjects: Project[] = [
    {
      id: 1,
      client: "Gyan Construction",
      location: "Rishikesh",
      cost: "120.00 Lakhs",
      area: "20 rooms",
      timePeriod: "2 months",
      image: "/images/projects/gyan-construction-rishikesh.jpg",
      type: "delivered",
    },
    {
      id: 2,
      client: "Micons",
      location: "Dehradun",
      cost: "70.00 Lakhs",
      area: "2000 SQ FT",
      timePeriod: "12 months",
      image: "/images/projects/micons-dehradun.jpg",
      type: "delivered",
    },
    {
      id: 3,
      client: "Sawhney Buildwell LLP",
      location: "Pune",
      cost: "6000.00 Lakhs",
      area: "550000 SQ FT",
      timePeriod: "5 months",
      image: "/images/projects/sawhney-buildwell-pune.jpg",
      type: "delivered",
    },
  ];

  const ongoingProjects: Project[] = [
    {
      id: 4,
      client: "Easy Housing Constructions",
      location: "Dehradun",
      cost: "190.00 Lakhs",
      area: "24000 SQ FT",
      timePeriod: "8 months",
      image: "/images/projects/easy-housing-dehradun.jpg",
      type: "in-hand",
    },
    {
      id: 5,
      client: "Gyan Construction",
      location: "Dehradun",
      cost: "110.00 Lakhs",
      area: "78000 SQ FT",
      timePeriod: "6 months",
      image: "/images/projects/gyan-construction-hospital.jpg",
      type: "in-hand",
    },
    {
      id: 6,
      client: "Gyan Construction",
      location: "Dehradun",
      cost: "1100.00 Lakhs",
      area: "100000 SQ FT",
      timePeriod: "14 months",
      image: "/images/projects/gyan-construction-large.jpg",
      type: "in-hand",
    },
  ];

  const allProjects = [...completedProjects, ...ongoingProjects];

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : activeFilter === "delivered"
      ? completedProjects
      : ongoingProjects;

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

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
              Our Projects
            </h1>
            <p className="text-xl text-gray-800 font-light max-w-3xl mx-auto leading-relaxed">
              A showcase of our completed and ongoing projects across diverse
              sectors.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center gap-4 mb-12 flex-wrap"
          >
            {(["all", "delivered", "in-hand"] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-lg font-light tracking-wide transition-all duration-300 capitalize ${
                  activeFilter === filter
                    ? "bg-gold text-gray-900"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {filter === "all"
                  ? "All"
                  : filter === "delivered"
                  ? "Projects Delivered"
                  : "Projects In-Hand"}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => openProjectDetails(project)}
                  className="group cursor-pointer"
                >
                  <div className="bg-white rounded-2xl overflow-hidden border-2 border-gray-300 hover:border-gold transition-all duration-500 hover:shadow-xl">
                    <div className="aspect-video relative bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Building className="w-16 h-16 text-gray-300" />
                      </div>
                      {/* Uncomment when images are available */}
                      {/* {project.image && (
                        <Image
                          src={project.image}
                          alt={project.client}
                          fill
                          className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                      )} */}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-light text-gray-900 mb-2 tracking-wide">
                        {project.client}
                      </h3>
                      <div className="flex items-center text-gray-800 font-light text-sm mb-4">
                        <MapPin className="w-4 h-4 mr-2" />
                        {project.location}
                      </div>
                      <div className="pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-500 font-light uppercase tracking-wide group-hover:text-gold transition-colors duration-300">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-light text-gray-900">
                  {selectedProject.client}
                </DialogTitle>
                <DialogDescription className="text-gray-600 font-light">
                  {selectedProject.location}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-gray-800 mb-2 font-light">
                      Project Cost
                    </div>
                    <div className="text-xl font-light text-gray-900 flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-gold" />
                      {selectedProject.cost}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-800 mb-2 font-light">
                      Covered Area
                    </div>
                    <div className="text-xl font-light text-gray-900">
                      {selectedProject.area}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-2 font-light">
                    Time Period
                  </div>
                  <div className="text-xl font-light text-gray-900 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-gold" />
                    {selectedProject.timePeriod}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}
