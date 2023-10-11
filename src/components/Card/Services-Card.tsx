import { ServicesDataType } from '@/types/services-data-type';
import Image from 'next/image';
import React from 'react';

export default function ServicesCard({
  _id,
  iconSRC,
  serviceName,
  servicesList
}: ServicesDataType) {

  return (
    <figure aria-keyshortcuts={_id} className={`services-card-container`}>

      <div className={`w-full h-[150px]`}>
        <Image
          src={ iconSRC }
          alt={ `${serviceName}_service_icon` }
          width={ 150 }
          height={ 150 }
          className={`mx-auto object-contain h-full dark:invert dark:opacity-80`}
        />
      </div>

      <div className={`text-center mt-2 mb-3`}>
        <h3 className={`font-semibold`}>{serviceName}</h3>
      </div>

      <div>
        <ul>
          {
            servicesList.map((service,idx) => <li key={idx}>{service}</li>)
          }
        </ul>
      </div>

    </figure>
  );
};