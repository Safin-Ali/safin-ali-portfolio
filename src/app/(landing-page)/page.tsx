import HeroSection from "./(shared-section)/Hero-Section";
import NavBar from '../../components/AppBar/NavBar';
import AboutSection from "./(shared-section)/About-Section";
import SkillsSection from "./(shared-section)/Skills-Section";

export default function Home() {
  return (
    <>
    <NavBar/>
      <main>
        <HeroSection />
        <AboutSection/>
        <SkillsSection/>
      </main>
    </>
  )
};