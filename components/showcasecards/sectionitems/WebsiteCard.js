// components/WebsiteCard.js
import React from 'react';
import Image from 'next/image';

const WebsiteCard = ({ website }) => (
  <div className="max-w-xs border dark:border-royal-gray dark:bg-royal-black rounded-lg overflow-hidden shadow-sm bg-gray-800 text-white">
    {website.image && (
      <div className="relative h-40">
        <Image src={website.image} alt={website.name} priority height={200} width={200} />
      </div>
    )}
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{website.name}</div>
      <p className="text-gray-500 text-base">{website.category}</p>
    </div>
  </div>
);

export default WebsiteCard;
