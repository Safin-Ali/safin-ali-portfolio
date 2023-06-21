import HeroSection from "./(shared-section)/Hero-Section";
import NavBar from '../../components/AppBar/NavBar';
import AboutSection from "./(shared-section)/About-Section";
import SkillsSection from "./(shared-section)/Skills-Section";
import ServicesSection from "./(shared-section)/Services-Section";

export default function Home() {
  return (
    <>
    <NavBar/>
      <main>
        <HeroSection />
        <AboutSection/>
        <SkillsSection/>
        <ServicesSection/>
      </main>
    </>
  )
};