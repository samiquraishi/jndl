import Hero from '@/components/hero';
import Services from '@/components/services';
import PersonalBrand from '@/components/personal-brand';
import Projects from '@/components/projects';
import Blog from '@/components/blog';
import Contact from '@/components/contact';
import InstagramFeed from '@/components/instagram-feed';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home">
        <Hero />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <PersonalBrand />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Blog />
      <Contact />
      <InstagramFeed />
    </main>
  );
}
