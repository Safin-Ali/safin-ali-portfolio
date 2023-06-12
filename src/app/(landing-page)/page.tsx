import HeroSection from "./(shared-section)/Hero-Section";
import NavBar from '../../components/AppBar/NavBar';
import AboutSection from "./(shared-section)/About-Section";

export default function Home() {
  return (
    <>
    <NavBar/>
      <main>
        <HeroSection />
        <AboutSection/>
      </main>
    </>
  )
};