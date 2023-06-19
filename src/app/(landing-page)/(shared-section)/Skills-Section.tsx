import SkillsCard from '@/components/Card/Skills-Card';
import SectionTitle from '@/components/Section-Title/Section-Title';
import skills from '@/data/skills-info';

export default function SkillsSection() {

    return (
        <section id={ `skills-section` } className={ `customise-container my-20` }>
            <SectionTitle
                title={ `My Skills` }
                sub_title={ `My Technical Level` }
                iconSRC={'https://svgshare.com/i/uDp.svg'}
            />

            <div className={ `skills-container` }>

                {/* Front-End */ }

                <div className={ `skills-stack` }>
                    <h3 className={ `skill-category-header` }>Front-End</h3>

                    <div className={ `skill-tech` }>
                        {
                            skills['front-end'].map(data => <SkillsCard
                                key={ data._id }
                                iconSRC={ data.icon }
                                level={ data.level }
                                name={ data.name }
                            />)
                        }
                    </div>
                </div>

                {/* Back-End */ }

                <div className={ `skills-stack` }>
                    <h3 className={ `skill-category-header` }>Back-End</h3>

                    <div className={ `skill-tech` }>
                        {
                            skills['back-end'].map(data => <SkillsCard
                                key={ data._id }
                                iconSRC={ data.icon }
                                level={ data.level }
                                name={ data.name }
                            />)
                        }
                    </div>
                </div>

                {/* Programming Languages */ }

                <div className={ `skills-stack` }>
                    <h3 className={ `skill-category-header` }>Programming Languages</h3>

                    <div className={ `skill-tech` }>
                        {
                            skills['pg-lang'].map(data => <SkillsCard
                                key={ data._id }
                                iconSRC={ data.icon }
                                level={ data.level }
                                name={ data.name }
                            />)
                        }
                    </div>
                </div>

                {/* Tools */ }

                <div className={ `skills-stack` }>
                    <h3 className={ `skill-category-header` }>Toolkit</h3>

                    <div className={ `skill-tech` }>
                        {
                            skills.toolkit.map(data => <SkillsCard
                                key={ data._id }
                                iconSRC={ data.icon }
                                level={ data.level }
                                name={ data.name }
                            />)
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};