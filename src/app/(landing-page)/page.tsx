import HeroSection from "./(shared-section)/Hero-Section";
import NavBar from '../../components/AppBar/NavBar';

export default function Home() {
  return (
    <>
    <NavBar/>
      <main>
        <HeroSection />
      </main>
    </>
  )
};