'use client';

import { motion } from 'framer-motion';
import { Building, MapPin, Calendar, DollarSign, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const completedProjects = [
  {
    client: "Gyan Construction",
    location: "Rishikesh",
    owner: "Mr. Ishan Bhandari",
    cost: "120.00 Lakhs",
    area: "20 rooms",
    duration: "2 months",
    image: "/images/projects/gyan-construction-rishikesh.jpg"
  },
  {
    client: "Micons",
    location: "Dehradun",
    owner: "Mrs. Nutan Verma",
    cost: "70.00 Lakhs",
    area: "2000 SQ FT",
    duration: "12 months",
    image: "/images/projects/micons-dehradun.jpg"
  },
  {
    client: "Sawhney Buildwell LLP",
    location: "Pune",
    owner: "Mr. Anuj Agarwal",
    cost: "6000.00 Lakhs",
    area: "550000 SQ FT",
    duration: "5 months",
    image: "/images/projects/sawhney-buildwell-pune.jpg"
  }
];

const ongoingProjects = [
  {
    client: "Easy Housing Constructions",
    location: "Dehradun",
    owner: "M/s VKSS",
    cost: "190.00 Lakhs",
    area: "24000 SQ FT",
    duration: "8 months",
    image: "/images/projects/easy-housing-dehradun.jpg"
  },
  {
    client: "Gyan Construction",
    location: "Dehradun",
    owner: "M/s krishnan Hospital",
    cost: "110.00 Lakhs",
    area: "78000 SQ FT",
    duration: "6 months",
    image: "/images/projects/gyan-construction-hospital.jpg"
  },
  {
    client: "Gyan Construction",
    location: "Dehradun",
    owner: "Mr. Tavinder Singh",
    cost: "1100.00 Lakhs",
    area: "100000 SQ FT",
    duration: "14 months",
    image: "/images/projects/gyan-construction-large.jpg"
  }
];

const Projects = () => {
  return (
    <section className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-8">
            Selected
            <span className="block gradient-text font-extralight">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            Delivering excellence across diverse sectors with a proven track record of successful project completion.
          </p>
        </motion.div>

        {/* Completed Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-20"
        >
          <h3 className="text-3xl font-light mb-12 text-white text-center tracking-wide">Completed Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {completedProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden hover-lift border border-white/5">
                  <div className="aspect-video relative bg-gradient-to-br from-white/5 to-white/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building className="w-16 h-16 text-white/30" />
                    </div>
                    {/* Uncomment when you have actual images */}
                    {/* <Image 
                      src={project.image} 
                      alt={project.client}
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <Building className="w-6 h-6 text-white/60 mr-3" />
                      <h4 className="text-xl font-light text-white tracking-wide">{project.client}</h4>
                    </div>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center text-gray-300 font-light">
                        <MapPin className="w-4 h-4 mr-3 text-white/40" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-300 font-light">
                        <span className="font-light">Owner:</span>
                        <span className="ml-2">{project.owner}</span>
                      </div>
                      <div className="flex items-center text-white font-light">
                        <DollarSign className="w-4 h-4 mr-3 text-white/60" />
                        <span>{project.cost}</span>
                      </div>
                      <div className="flex items-center text-gray-300 font-light">
                        <span>Area: {project.area}</span>
                      </div>
                      <div className="flex items-center text-gray-300 font-light">
                        <Calendar className="w-4 h-4 mr-3 text-white/40" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-white/60 font-light group-hover:text-white transition-colors duration-300">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ongoing Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="text-3xl font-light mb-12 text-white text-center tracking-wide">Projects In Progress</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {ongoingProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2, ease: "easeOut" }}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden hover-lift border border-white/10 bg-white/5">
                  <div className="aspect-video relative bg-gradient-to-br from-white/10 to-white/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Building className="w-16 h-16 text-white/40" />
                    </div>
                    {/* Uncomment when you have actual images */}
                    {/* <Image 
                      src={project.image} 
                      alt={project.client}
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <Building className="w-6 h-6 text-white/60 mr-3" />
                      <h4 className="text-xl font-light text-white tracking-wide">{project.client}</h4>
                    </div>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center text-gray-300 font-light">
                        <MapPin className="w-4 h-4 mr-3 text-white/40" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center text-gray-300 font-light">
                        <span className="font-light">Owner:</span>
                        <span className="ml-2">{project.owner}</span>
                      </div>
                      <div className="flex items-center text-white font-light">
                        <DollarSign className="w-4 h-4 mr-3 text-white/60" />
                        <span>{project.cost}</span>
                      </div>
                      <div className="flex items-center text-gray-300 font-light">
                        <span>Area: {project.area}</span>
                      </div>
                      <div className="flex items-center text-gray-300 font-light">
                        <Calendar className="w-4 h-4 mr-3 text-white/40" />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-white/60 font-light group-hover:text-white transition-colors duration-300">
                      <span>View Progress</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-8 py-4 text-lg font-light tracking-wide transition-all duration-300 hover:bg-gray-100"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;