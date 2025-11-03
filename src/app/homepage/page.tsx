import Hero from "./sections/Hero";
import ServicePillars from "./sections/Service";
import Clients from "./sections/Clients";
import FeaturedProject from "./sections/FeaturedProject";
import TechnologyHighlight from "./sections/TechnologyHighlight";
import Testimonial from "./sections/Testimonial";
import CTA from "./sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicePillars />
      <Clients />
      <FeaturedProject />
      <TechnologyHighlight />
      <Testimonial />
      <CTA />
    </>
  );
}
