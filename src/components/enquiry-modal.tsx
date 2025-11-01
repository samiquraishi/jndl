"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./ui/button";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        projectDetails: "",
      });
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="p-8 md:p-12">
                {/* Logo/Header */}
                <div className="mb-8">
                  <h2 className="text-3xl font-light tracking-wide text-gray-900 mb-2">
                    Start Your Project
                  </h2>
                  <p className="text-gray-600 font-light">
                    Tell us about your project and we&apos;ll get back to you
                    shortly.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-light text-gray-900 mb-2">
                      Thank You!
                    </h3>
                    <p className="text-gray-600 font-light">
                      We&apos;ll be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                        placeholder="+91 1234567890"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Service of Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="project-management">
                          Project Management
                        </option>
                        <option value="construction">Construction</option>
                        <option value="architecture">Architecture</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="projectDetails"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Tell us about your project *
                      </label>
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        required
                        rows={4}
                        value={formData.projectDetails}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all resize-none"
                        placeholder="Share details about your project requirements, timeline, budget, etc."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold text-gray-900 hover:bg-gold-dark font-light tracking-wide py-3 transition-all"
                    >
                      {isSubmitting ? "Sending..." : "Send Enquiry"}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
