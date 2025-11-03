import ServicesHero from "./sections/ServicesHero";
import TabNavigation, { TabProvider } from "./sections/TabNavigation";
import ServicesContent from "./sections/ServicesContent";
import ServicesCTA from "./sections/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <TabProvider>
        <TabNavigation />
        <ServicesContent />
      </TabProvider>
      <ServicesCTA />
    </>
  );
}
