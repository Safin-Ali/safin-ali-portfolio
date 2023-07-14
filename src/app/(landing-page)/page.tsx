import HeroSection from "./(shared-section)/Hero-Section";
import NavBar from '../../components/AppBar/NavBar';
import AboutSection from "./(shared-section)/About-Section";
import SkillsSection from "./(shared-section)/Skills-Section";
import ServicesSection from "./(shared-section)/Services-Section";
import ProjectsSection from "./(shared-section)/Projects-Section";
import ContactSection from "./(shared-section)/Contact-Section";
import FooterSection from "./(shared-section)/Footer-Section";
import AnimHero from "./(features)/hero-section/Anim-Hero";
import AnimAbout from "./(features)/about-section/Anim-About";
import AnimSkills from "./(features)/skills-section/Anim-Skills";
import AnimServices from "./(features)/services-section/Anim-Services";
import AnimProject from "./(features)/projects-section/Anim-Project";
import AnimContact from "./(features)/contact-section/Anim-Contact";
import AnimFooter from "./(features)/footer/Anim-Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className={ `overflow-hidden` }>
        <AnimHero>
          <HeroSection />
        </AnimHero>

        <AnimAbout>
          <AboutSection />
        </AnimAbout>

        <AnimSkills>
          <SkillsSection />
        </AnimSkills>


        <AnimServices>
          <ServicesSection />
        </AnimServices>


        <AnimProject>
          <ProjectsSection />
        </AnimProject>

        <AnimContact>
          <ContactSection />
        </AnimContact>
      </main>

      <AnimFooter>
        <FooterSection />
      </AnimFooter>
    </>
  )
};