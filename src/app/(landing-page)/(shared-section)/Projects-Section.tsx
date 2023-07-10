import SectionTitle from '@/components/Section-Title/Section-Title';
import ProjectsDynamicSec from '../(features)/projects-section/Projects-Dynamic-Sec';

export default function ProjectsSection () {

 return (
    <section id={'projects-section'} className={ `customise-container my-7 sm:my-10 md:my-20` }>

        <SectionTitle
            iconSRC={`https://svgshare.com/i/uYK.svg`}
            sub_title={'My Working Expericcne'}
            title={'Completed Projects'}
        />

        <div>
          <ProjectsDynamicSec/>
        </div>

    </section>
  );
};