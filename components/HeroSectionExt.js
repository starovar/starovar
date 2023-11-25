import React from 'react';
import Link from 'next/link';
import MainTechnologies from './MainTechnologies';

const HeroSectionExt = () => {

  return (
    <div id="home" className="relative overflow-hidden pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center" data-wow-delay=".2s">
              <h1 className="mb-6 text-5xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.1]">
                Дизайн який перевершує
              </h1>
              <p className="mx-auto mb-9 max-w-[600px] font-medium text-base text-white sm:text-lg sm:leading-[1.44]">
              Сучасні рішення для запуску і підтримки веб проектів та бізнесу
              </p>
              <ul className="mb-10 flex gap-5 flex-wrap items-center justify-center">
                <li>
                  <Link href="https://links.tailgrids.com/play-download" className="inline-flex items-center justify-center rounded-md bg-white py-[14px] px-7 text-center text-base font-medium text-dark shadow-1 transition duration-300 ease-in-out hover:text-body-color hover:bg-gray-2">
                    Download Now
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/tailgrids/play-tailwind" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 py-[14px] rounded-md bg-white/[0.12] px-6 text-base font-medium text-white transition duration-100 ease-in-out hover:bg-white hover:text-royal-gray">
                   
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 197 197" className='dark:hover:text-royal-black'>
                     <path d="M175.27,197H52.11a9,9,0,0,1-6.37-15.36l61.59-61.59a9,9,0,0,1,12.72,0l61.59,61.59A9,9,0,0,1,175.27,197Z" fill="#fff"/>
                     <path d="M181.64,15.36,15.36,181.64A9,9,0,0,1,0,175.27V121.69a9,9,0,0,1,2.64-6.37L115.32,2.64A9,9,0,0,1,121.69,0h53.58A9,9,0,0,1,181.64,15.36Z" fill="#fff"/>
                    </svg>
                    
                    Kotec Link
                  </Link>
                </li>
              </ul>
              </div>
              <MainTechnologies />
            </div>
          </div>
        </div>
      </div>
  );
};

export default HeroSectionExt;
