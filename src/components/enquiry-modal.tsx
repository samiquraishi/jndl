"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Send } from "lucide-react";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser"; // 👈 add this

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          full_name: formData.fullName,
          to_email: formData.email,
          phone: formData.phone,
          project_details: formData.projectDetails,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setIsSubmitted(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }

    // Reset form after 3 seconds and close modal
    setTimeout(() => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        projectDetails: "",
      });
      setIsSubmitted(false);
      onClose();
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
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
            className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden relative border border-stone/50 flex flex-col">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 p-2 text-navy/60 hover:text-charcoal transition-colors z-10 rounded-lg hover:bg-stone/50"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="p-8 md:p-12 overflow-y-auto flex-1 scrollbar-hide">
                {/* Logo/Header */}
                <div className="mb-8">
                  <h2 className="text-3xl lg:text-4xl font-display font-semibold tracking-tight text-charcoal mb-3">
                    Start Your Project
                  </h2>
                  <p className="text-navy/70 font-light leading-relaxed">
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
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.2,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 className="w-10 h-10 text-charcoal" />
                    </motion.div>
                    <h3 className="text-2xl lg:text-3xl font-display font-semibold text-charcoal mb-3">
                      Thank You!
                    </h3>
                    <p className="text-navy/70 font-light leading-relaxed">
                      We&apos;ll be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-charcoal mb-2"
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
                        className="w-full px-4 py-3 border border-stone/50 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all bg-white text-charcoal placeholder-navy/40 font-light"
                        placeholder="Your full name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-charcoal mb-2"
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
                          className="w-full px-4 py-3 border border-stone/50 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all bg-white text-charcoal placeholder-navy/40 font-light"
                          placeholder="your.email@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-charcoal mb-2"
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
                          className="w-full px-4 py-3 border border-stone/50 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all bg-white text-charcoal placeholder-navy/40 font-light"
                          placeholder="+91 1234567890"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="projectDetails"
                        className="block text-sm font-medium text-charcoal mb-2"
                      >
                        Tell us about your project
                      </label>
                      <textarea
                        id="projectDetails"
                        name="projectDetails"
                        rows={4}
                        value={formData.projectDetails}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-stone/50 rounded-lg focus:ring-2 focus:ring-gold focus:border-gold transition-all resize-none bg-white text-charcoal placeholder-navy/40 font-light"
                        placeholder="Share details about your project requirements, timeline, budget, etc."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gold text-charcoal hover:bg-gold-light font-medium tracking-wide py-6 text-base transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Enquiry
                          <Send className="w-5 h-5" />
                        </>
                      )}
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
