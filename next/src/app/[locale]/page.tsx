import HeroSection from '@/components/home/hero-section';
import ContactBar from '@/components/home/hero-section/contact-bar';
import AboutMe from '@/components/home/about-me';
import ExperienceSec from '@/components/home/experience-sec';
import EducationSkills from '@/components/home/education-skills';
import LatestWork from '@/components/home/latest-work';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ContactBar />
      <AboutMe />
      <ExperienceSec />
      <EducationSkills />
      <LatestWork />
    </main>
  );
}
