"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-light mb-6 text-white">
              Jindal Associates
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed font-light">
              Leading Project Management Consultancy with pan-India operations,
              specialized in construction, technical auditing, and end-to-end
              project management services.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-light mb-6 text-white">Navigation</h4>
            <ul className="space-y-3">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-gold font-light transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-light mb-6 text-white">Our Services</h4>
            <ul className="space-y-3 text-gray-300 font-light">
              <li>Project Management</li>
              <li>Construction Services</li>
              <li>Architecture & Design</li>
              <li>Technical Auditing</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t-2 border-gray-700 pt-8 text-center text-gray-300 font-light"
        >
          <p>&copy; {currentYear} Jindal Associates. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
