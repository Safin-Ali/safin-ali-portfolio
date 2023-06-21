import ServicesCard from '@/components/Card/Services-Card';
import SectionTitle from '@/components/Section-Title/Section-Title';
import myServices from '@/data/services-data';
import React from 'react';
interface PropsType {};

export default function ServicesSection () {

 return (
    <section id={`services-section`} className={`customise-container my-20`}>

        <SectionTitle
            iconSRC={`https://svgshare.com/i/uQr.svg`}
            sub_title={`What I Do`}
            title={'My Services'}
        />

        <div className={`services-container`}>

            {
                myServices.map(elm => <ServicesCard
                    key={elm._id}
                    _id={elm._id}
                    iconSRC={elm.iconSRC}
                    serviceName={elm.serviceName}
                    serviceSummary={elm.serviceSummary}
                />)
            }

        </div>

    </section>
  );
};