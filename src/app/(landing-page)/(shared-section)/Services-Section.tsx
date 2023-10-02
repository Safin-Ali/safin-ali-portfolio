import ServicesCard from '@/components/Card/Services-Card';
import SectionTitle from '@/components/Section-Title/Section-Title';
import { ServicesDataType } from '@/types/services-data-type';
import API from '@/utilities/fetch-data';

export default async function ServicesSection () {

	const myServices:ServicesDataType[] = await API.get(`/services`,'default');

 return (
    <section id={`services-section`} className={`customise-container my-7 sm:my-10 md:my-20`}>

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
                    servicesList={elm.servicesList}
                />)
            }

        </div>

    </section>
  );
};