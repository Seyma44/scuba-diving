import Image from 'next/image'
import React from 'react'

interface Props {
  id: string;
}

const About: React.FC<Props> = ({ id }) => {
  return (
    <section id={id} className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/diving.png" alt="diving" width={50} height={50} />
        <p className="uppercase regular-18 -mt-0.5 mb-3 text-turqu-200">
          Guiding Your Underwater Journey
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Leading You to Smooth Seas</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">With the Scuba app, finding your way through the underwater realm becomes effortless. Our navigation features ensure you stay on course, guiding you seamlessly from one dive site to the next. Bring your dive buddies along and embark on unforgettable underwater adventures, exploring vibrant reefs and discovering marine wonders together.</p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full">
        <Image 
          src="/woman-diving.jpg"
          alt="diver"
          width={1440}
          height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className='flex w-full flex-col'>
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Depth</p>
                <p className="bold-16 text-turqu-200">48 min</p>
              </div>
              <p className="bold-20 mt-2">2 ATA 33ft</p>
            </div>

            <div className='flex w-full flex-col'>
              <p className="regular-16 text-gray-20">Gas Bubble Diameter</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">4 ATA 63%</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About