"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Building,
  MapPin,
  ArrowRight,
  Calendar,
  DollarSign,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useFilter } from "./FilterNavigation";

// Import project images
import project1 from "@/assets/images/projects/project1.jpg";
import project2 from "@/assets/images/projects/project2.jpg";
import project3 from "@/assets/images/projects/project3.jpg";
import project4 from "@/assets/images/projects/project4.jpg";
import project5 from "@/assets/images/projects/project5.jpg";
import project6 from "@/assets/images/projects/project6.jpg";

// Create image mapping
const projectImages: { [key: string]: typeof project1 } = {
  "/src/assets/images/projects/project1.jpg": project1,
  "/src/assets/images/projects/project2.jpg": project2,
  "/src/assets/images/projects/project3.jpg": project3,
  "/src/assets/images/projects/project4.jpg": project4,
  "/src/assets/images/projects/project5.jpg": project5,
  "/src/assets/images/projects/project6.jpg": project6,
};

export interface Project {
  id: number;
  client: string;
  location: string;
  cost: string;
  area: string;
  timePeriod: string;
  image: string;
  type: "delivered" | "in-hand";
}

const completedProjects: Project[] = [
  {
    id: 1,
    client: "Gyan Construction",
    location: "Rishikesh",
    cost: "120.00 Lakhs",
    area: "20 rooms",
    timePeriod: "2 months",
    image: "/src/assets/images/projects/project1.jpg",
    type: "delivered",
  },
  {
    id: 2,
    client: "Micons",
    location: "Dehradun",
    cost: "70.00 Lakhs",
    area: "2000 SQ FT",
    timePeriod: "12 months",
    image: "/src/assets/images/projects/project2.jpg",
    type: "delivered",
  },
  {
    id: 3,
    client: "Sawhney Buildwell LLP",
    location: "Pune",
    cost: "6000.00 Lakhs",
    area: "550000 SQ FT",
    timePeriod: "5 months",
    image: "/src/assets/images/projects/project3.jpg",
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
    image: "/src/assets/images/projects/project4.jpg",
    type: "in-hand",
  },
  {
    id: 5,
    client: "Gyan Construction",
    location: "Dehradun",
    cost: "110.00 Lakhs",
    area: "78000 SQ FT",
    timePeriod: "6 months",
    image: "/src/assets/images/projects/project5.jpg",
    type: "in-hand",
  },
  {
    id: 6,
    client: "Gyan Construction",
    location: "Dehradun",
    cost: "1100.00 Lakhs",
    area: "100000 SQ FT",
    timePeriod: "14 months",
    image: "/src/assets/images/projects/project6.jpg",
    type: "in-hand",
  },
];

const allProjects = [...completedProjects, ...ongoingProjects];

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
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: {
      duration: 0.3,
    },
  },
};

export default function ProjectsGrid() {
  const { activeFilter } = useFilter();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
    <section className="pt-12 pb-20 lg:pt-16 lg:pb-32 bg-gradient-to-b from-stone/30 via-stone/10 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filteredProjects[0]?.id || "empty"}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                onClick={() => openProjectDetails(project)}
                className="group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-2xl overflow-hidden border border-stone/30 hover:border-gold/60 transition-all duration-500 hover:shadow-2xl cursor-pointer"
                >
                  <div className="aspect-video relative bg-gradient-to-br from-stone to-stone-dark overflow-hidden">
                    {project.image && projectImages[project.image] ? (
                      <Image
                        src={projectImages[project.image]}
                        alt={project.client}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Building className="w-16 h-16 text-stone-dark/50" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="inline-block px-4 py-1.5 bg-gold text-charcoal text-xs font-semibold rounded-full shadow-lg">
                        {project.type === "delivered"
                          ? "Delivered"
                          : "In Progress"}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8">
                    <h3 className="text-xl lg:text-2xl font-display font-semibold text-charcoal mb-3 tracking-tight group-hover:text-gold transition-colors duration-500">
                      {project.client}
                    </h3>
                    <div className="flex items-center text-navy/70 font-light text-sm lg:text-base mb-4">
                      <MapPin className="w-4 h-4 mr-2 text-gold" />
                      {project.location}
                    </div>
                    <div className="pt-4 border-t border-stone/30">
                      <span className="text-sm text-navy/70 font-medium uppercase tracking-wider group-hover:text-gold transition-colors duration-300 flex items-center gap-2">
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl bg-white rounded-2xl border border-stone/50 shadow-2xl">
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <DialogTitle className="text-3xl font-display font-semibold text-charcoal mb-2">
                  {selectedProject.client}
                </DialogTitle>
                <DialogDescription className="text-navy/70 font-light flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {selectedProject.location}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-stone/30 rounded-lg">
                    <div className="text-sm text-navy/70 mb-2 font-light uppercase tracking-wider">
                      Project Cost
                    </div>
                    <div className="text-2xl font-display font-semibold text-charcoal flex items-center">
                      <DollarSign className="w-5 h-5 mr-2 text-gold" />
                      {selectedProject.cost}
                    </div>
                  </div>
                  <div className="p-4 bg-stone/30 rounded-lg">
                    <div className="text-sm text-navy/70 mb-2 font-light uppercase tracking-wider">
                      Covered Area
                    </div>
                    <div className="text-2xl font-display font-semibold text-charcoal">
                      {selectedProject.area}
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-stone/30 rounded-lg">
                  <div className="text-sm text-navy/70 mb-2 font-light uppercase tracking-wider">
                    Time Period
                  </div>
                  <div className="text-2xl font-display font-semibold text-charcoal flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-gold" />
                    {selectedProject.timePeriod}
                  </div>
                </div>
                <div className="pt-4 border-t border-stone/30">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      selectedProject.type === "delivered"
                        ? "bg-gold/20 text-gold"
                        : "bg-navy/20 text-navy"
                    }`}
                  >
                    {selectedProject.type === "delivered"
                      ? "Project Delivered"
                      : "Project In Progress"}
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
