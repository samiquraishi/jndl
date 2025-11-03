"use client";

import { useState, createContext, useContext } from "react";
import { motion } from "framer-motion";

type FilterType = "all" | "delivered" | "in-hand";

interface FilterContextType {
  activeFilter: FilterType;
  setActiveFilter: (filter: FilterType) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within FilterProvider");
  }
  return context;
};

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  return (
    <FilterContext.Provider value={{ activeFilter, setActiveFilter }}>
      {children}
    </FilterContext.Provider>
  );
}

export default function FilterNavigation() {
  const { activeFilter, setActiveFilter } = useFilter();
  return (
    <section className="pt-16 pb-8 lg:pt-40 lg:pb-6 bg-gradient-to-b from-white to-stone/20 border-b border-stone/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 lg:gap-8 xl:gap-10"
        >
          {(["all", "delivered", "in-hand"] as const).map((filter) => {
            const isActive = activeFilter === filter;
            const filterLabels = {
              all: "All Projects",
              delivered: "Projects Delivered",
              "in-hand": "Projects In-Hand",
            };
            return (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex items-center gap-3 px-8 py-4 rounded-xl font-medium tracking-wide transition-all duration-300 text-sm lg:text-base capitalize ${
                  isActive
                    ? "bg-gold text-charcoal shadow-xl shadow-gold/20"
                    : "bg-white text-navy/80 hover:bg-stone/80 hover:text-charcoal border border-stone/40 hover:border-gold/40 shadow-sm hover:shadow-md"
                }`}
              >
                <span className="font-medium">{filterLabels[filter]}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeFilter"
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
