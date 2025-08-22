'use client';

import { motion } from 'framer-motion';
import { Instagram, Building, Camera, Heart } from 'lucide-react';
import Image from 'next/image';

const instagramPosts = [
  { 
    id: 1, 
    title: "Residential Project - Dehradun",
    likes: "2.4k",
    comments: "156",
    image: "/images/portfolio/residential-dehradun.jpg"
  },
  { 
    id: 2, 
    title: "Commercial Building - Rishikesh",
    likes: "1.8k",
    comments: "89",
    image: "/images/portfolio/commercial-rishikesh.jpg"
  },
  { 
    id: 3, 
    title: "Industrial Complex - Pune",
    likes: "3.2k",
    comments: "234",
    image: "/images/portfolio/industrial-pune.jpg"
  },
  { 
    id: 4, 
    title: "Resort Development - Haridwar",
    likes: "2.1k",
    comments: "167",
    image: "/images/portfolio/resort-haridwar.jpg"
  },
  { 
    id: 5, 
    title: "Interior Fit-out Work",
    likes: "1.9k",
    comments: "143",
    image: "/images/portfolio/interior-fitout.jpg"
  },
  { 
    id: 6, 
    title: "Project Site Progress",
    likes: "2.7k",
    comments: "198",
    image: "/images/portfolio/site-progress.jpg"
  },
];

const InstagramFeed = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Project Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Follow our journey and see our latest projects, behind-the-scenes moments, and construction updates.
          </p>
          <div className="flex items-center justify-center gap-2 text-blue-600">
            <Instagram className="w-6 h-6" />
            <span className="font-semibold">@jindal.associates97</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://instagram.com/jindal.associates97"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="aspect-square relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                <div className="text-center">
                  <Building className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                  <span className="text-gray-600 font-medium text-sm">{post.title}</span>
                </div>
              </div>
              
              {/* Uncomment when you have actual images */}
              {/* <Image 
                src={post.image} 
                alt={post.title}
                fill
                className="object-cover"
              /> */}
              
              {/* Overlay with engagement stats */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Camera className="w-4 h-4" />
                      <span className="text-sm">{post.comments}</span>
                    </div>
                  </div>
                  <p className="text-sm font-medium">View Project</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a 
            href="https://instagram.com/jindal.associates97"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <Instagram className="w-5 h-5 mr-2" />
            Follow Us on Instagram
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;