// components/WebsiteCard.js
import React from 'react';
import Image from 'next/image';

const WebsiteCard = ({ website }) => (
  <div className="max-w-xs border dark:border-royal-gray dark:bg-royal-black rounded-xl overflow-hidden bg-gray-800 text-white">
    {website.image && (
      <div className="relative ">
        <Image 
        src={website.image} 
        alt={website.name} 
        height={225}
        width={300}
        priority={false}
         />
      </div>
    )}
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{website.name}</div>
      <p className="text-gray-500 text-base">{website.category}</p>
    </div>
  </div>
);

export default WebsiteCard;
