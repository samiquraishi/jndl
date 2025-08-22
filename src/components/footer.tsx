'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Jindal Associates</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading Project Management Consultancy with pan-India operations, specialized in construction, technical auditing, and end-to-end project management services.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:jindalassociatesddn@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:+917417386006" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/jindal.associates97" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Project Management</li>
              <li>Construction Services</li>
              <li>Architecture & Design</li>
              <li>Technical Auditing</li>
              <li>Quantity Surveying</li>
              <li>Material Procurement</li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Info</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  Lane No. 11, SidhVihar Lower,<br />
                  Nehrugram, Dehradun 248001
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">+91 7417386006</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">jindalassociatesddn@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 Jindal Associates. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;