import ProjectsHero from "./sections/ProjectsHero";
import FilterNavigation, { FilterProvider } from "./sections/FilterNavigation";
import ProjectsGrid from "./sections/ProjectsGrid";
import ProjectsCTA from "./sections/ProjectsCTA";

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <FilterProvider>
        <FilterNavigation />
        <ProjectsGrid />
      </FilterProvider>
      <ProjectsCTA />
    </>
  );
}
