import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

interface Props {
  id: string;
}

const Features: React.FC<Props> = ({ id }) => {
  return (
    <section id={id}  className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone transition-transform duration-200 ease-in-out transform hover:animate-wave"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className='relative'>
            <Image
              src="/diving.png"
              alt="sea"
              width={50}
              height={50}
              className="absolute left-[5px] top-[-15px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Organize Your Gear</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-[10%] p-3 lg:p-5 bg-turqu-200">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
        {title}
      </h2>
      <p className="regular-16 mt-5 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none p-10 rounded-[10%]">
        {description}
      </p>
    </li>
  )
}

export default Features