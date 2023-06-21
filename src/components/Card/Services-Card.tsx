import { ServicesDataType } from '@/types/services-data-type';
import Image from 'next/image';
import React from 'react';

export default function ServicesCard({
  _id,
  iconSRC,
  serviceName,
  serviceSummary
}: ServicesDataType) {

  return (
    <figure aria-keyshortcuts={_id} className={`services-card-container`}>

      <div className={`w-full h-[150px]`}>
        <Image
          src={ iconSRC }
          alt={ `${serviceName}_service_icon` }
          width={ 150 }
          height={ 150 }
          className={`mx-auto object-contain h-full`}
        />
      </div>

      <div>
        <h3 className={`font-semibold text-center mb-3`}>{serviceName}</h3>
        <p className={`text-justify`}>{serviceSummary}</p>
      </div>

    </figure>
  );
};