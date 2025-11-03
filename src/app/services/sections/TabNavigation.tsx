"use client";

import { useState, createContext, useContext } from "react";
import { motion } from "framer-motion";
import { Building2, Wrench, Palette } from "lucide-react";

export interface Service {
  title: string;
  description: string;
}

export interface Tab {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  services: Service[];
}

interface TabContextType {
  tabs: Tab[];
  activeTab: number;
  setActiveTab: (index: number) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export const useTabs = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabs must be used within TabProvider");
  }
  return context;
};

const tabs: Tab[] = [
  {
    id: 0,
    title: "Project Management Consulting",
    icon: Building2,
    services: [
      {
        title: "Project Management",
        description:
          "Comprehensive project planning, execution, and monitoring using advanced systems like MS Projects and Primavera.",
      },
      {
        title: "Cost Management",
        description:
          "Budget planning, cost estimation, and financial control throughout the project lifecycle.",
      },
      {
        title: "Auditing",
        description:
          "Technical auditing services to ensure compliance, quality, and best practices.",
      },
      {
        title: "Material Procurements",
        description:
          "Strategic sourcing and procurement of materials at competitive prices.",
      },
      {
        title: "Quantity Surveying",
        description:
          "Accurate quantity estimation and cost analysis for project planning.",
      },
      {
        title: "Vendor Selection and Tendering",
        description:
          "Comprehensive vendor evaluation, selection, and tendering process management.",
      },
    ],
  },
  {
    id: 1,
    title: "End-to-End Construction",
    icon: Wrench,
    services: [
      {
        title: "Residential & Commercial Buildings",
        description:
          "Complete construction services for residential and commercial properties with attention to detail and quality.",
      },
      {
        title: "Resorts & Industrial Buildings",
        description:
          "Specialized construction for hospitality and industrial sectors with expert project management.",
      },
      {
        title: "Interior Work Execution",
        description:
          "Professional interior fit-out services with precision and craftsmanship.",
      },
      {
        title: "Renovation Work",
        description:
          "Transformation and modernization of existing structures while preserving their character.",
      },
    ],
  },
  {
    id: 2,
    title: "Architecture Services",
    icon: Palette,
    services: [
      {
        title: "Design & Planning",
        description:
          "Creative and functional architectural design solutions tailored to your needs.",
      },
      {
        title: "Elevations & 3D Visualization",
        description:
          "Stunning 3D visualizations and elevation designs to bring your vision to life.",
      },
      {
        title: "MEP (Mechanical, Electrical, Plumbing)",
        description:
          "Comprehensive MEP design and coordination for optimal building performance.",
      },
      {
        title: "Interior Designing & Structural Design",
        description:
          "Complete interior design services with structural engineering support.",
      },
    ],
  },
];

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <TabContext.Provider value={{ tabs, activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}

export default function TabNavigation() {
  const { tabs, activeTab, setActiveTab } = useTabs();
  return (
    <section className="pt-16 pb-8 lg:pt-40 lg:pb-10 bg-gradient-to-b from-white to-stone/20 border-b border-stone/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 lg:gap-8 xl:gap-10"
        >
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            const isActive = activeTab === index;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex items-center gap-3 px-8 py-4 rounded-xl font-medium tracking-wide transition-all duration-300 text-sm lg:text-base ${
                  isActive
                    ? "bg-gold text-charcoal shadow-xl shadow-gold/20"
                    : "bg-white text-navy/80 hover:bg-stone/80 hover:text-charcoal border border-stone/40 hover:border-gold/40 shadow-sm hover:shadow-md"
                }`}
              >
                <Icon
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isActive ? "scale-110" : ""
                  }`}
                />
                <span className="hidden sm:inline font-medium">
                  {tab.title}
                </span>
                <span className="sm:hidden font-medium">
                  {tab.title.split(" ")[0]}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl bg-gold -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
