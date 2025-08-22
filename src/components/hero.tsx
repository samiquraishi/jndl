'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main heading with elegant typography */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-white mb-6">
              Jindal
              <span className="block gradient-text font-extralight">Associates</span>
            </h1>
          </motion.div>

          {/* Subtitle with sophisticated styling */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed">
              Crafting exceptional construction experiences through innovative project management and architectural excellence.
            </p>
          </motion.div>

          {/* Elegant description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="mb-16"
          >
            <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
              We transform visions into reality, delivering projects that exceed expectations with precision, creativity, and unwavering commitment to quality.
            </p>
          </motion.div>

          {/* Call-to-action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button 
              size="lg" 
              className="group bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-light tracking-wide transition-all duration-300 hover:scale-105"
            >
              Explore Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="group border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-light tracking-wide transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 opacity-10">
        <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
      </div>
      <div className="absolute bottom-20 left-20 opacity-10">
        <div className="w-1 h-1 bg-white rounded-full animate-ping delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;