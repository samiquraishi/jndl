"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import EnquiryModal from "./enquiry-modal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
    window.addEventListener("openEnquiryModal", handleOpenModal);
    return () =>
      window.removeEventListener("openEnquiryModal", handleOpenModal);
  }, []);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About Us", href: "/about" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md border-b-2 border-gray-300 shadow-lg"
            : "bg-white/95 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-light tracking-wide text-gray-900">
                  Jindal Associates
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={`font-light tracking-wide transition-all duration-300 relative group ${
                      isActive(item.href)
                        ? "text-black font-medium"
                        : "text-gray-800 hover:text-black"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                        isActive(item.href)
                          ? "w-full bg-gold"
                          : "w-0 bg-gray-900 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gold text-gray-900 hover:bg-gold-dark font-light tracking-wide transition-all duration-300"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:hidden p-2 text-gray-900 hover:text-gray-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden border-t border-gray-200"
              >
                <div className="py-8 space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`block font-light tracking-wide transition-colors duration-300 text-lg ${
                          isActive(item.href)
                            ? "text-black font-medium"
                            : "text-gray-800 hover:text-black"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="pt-4"
                  >
                    <Button
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsModalOpen(true);
                      }}
                      className="w-full bg-gold text-gray-900 hover:bg-gold-dark font-light tracking-wide transition-all duration-300"
                    >
                      Get in Touch
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;
