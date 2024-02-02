'use client'
import Image from 'next/image';
import Button from './Button';
import UnderWater from './UnderWater';

interface Props {
  id: string;
}

const Hero: React.FC<Props> = ({ id }) => {
  const scrollToSection = (id:string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };;
  return (
    <section className="max-container padding-container flex flex-col md:flex-row gap-20 py-10 pb-32 md:gap-28 lg:py-20 relative">
      <div className="relative z-20 flex flex-1 flex-col justify-center md:w-1/2">
        <div className="w-full md:w-3/4 xl:w-full">
          <div className="relative">
         <Image 
              src="/diving.png"
              alt="sea"
              width={50}
              height={50}
              className="absolute left-[5px] top-[-20px] w-10 lg:w-[50px]"
            /> 
            <h1 className="bold-52 lg:bold-68 xl:max-w-[650px]">Scuba Diving Expo Zone</h1>
          </div>
          <p className="regular-16 mt-6 text-gray-30 xl:max-w-[650px]">
          Explore the depths with us on your journey to discover the timeless beauty of nature. Dive into adventure across the globe, all within a single app.
          </p>

          <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {Array(5).fill(1).map((_, index) => (
                <Image 
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
            </div>

            <p className="bold-16 lg:bold-20 text-blue-70">
              314k
              <span className="regular-16 lg:regular-20 ml-1">Memorable Experiences</span>
            </p>
          </div>

          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Button 
              type="button" 
              title="Download App" 
              variant="btn_blue"
              onClick={() => scrollToSection('get_app')}
            />
            <Button 
              type="button" 
              title="Explore Zones" 
              icon="/play.svg"
              variant="btn_white_text"
              onClick={() => scrollToSection('explore_zones')}
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex absolute top-0 left-1 transform -translate-x-1/2 md:relative z-20 flex-col gap-8 px-7 py-0">
        <UnderWater />
      </div>
    </section>
  );
};

export default Hero;
