import React, { useState } from 'react';
import { motion } from 'framer-motion';
import WebsiteCards from './sectionitems/WebsiteCards';

const websitesData = [
  { id: 1, name: 'Website 1', category: 'Ecommerce', image: '/branding.png' },
  { id: 2, name: 'Website 2', category: 'Blogging', image: '/branding.png' },
  { id: 3, name: 'Website 3', category: 'Portfolio', image: '/branding.png' },
  { id: 4, name: 'Website 4', category: 'Ecommerce', image: '/branding.png' },
  { id: 5, name: 'Website 5', category: 'Blogging', image: '/branding.png' },
  { id: 6, name: 'Website 6', category: 'Portfolio', image: '/branding.png' },
];

const categories = ['All', 'Ecommerce', 'Blogging', 'Portfolio'];

const WebsiteSection = () => {
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineX, setUnderlineX] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category, event) => {
    setUnderlineWidth(event.target.offsetWidth);
    setUnderlineX(event.target.offsetLeft);
    setSelectedCategory(category);
  };

  return (
    <div className='pt-6 lg:pt-16'>
      <h4 className='dark:text-neutral-200/90 tracking-tight text-center underline text-3xl font-semibold'>Портфоліо</h4>

      <div className="text-white">
        <nav>
          <ul className='flex justify-center gap-4 text-sm mb-4 mt-10 relative'>
            {categories.map((item) => (
              <motion.li
                key={item}
                className={`cursor-pointer py-2 px-3 border dark:border-royal-gray rounded-lg ${item === selectedCategory ? 'text-red-500' : ''}`}
                onClick={(e) => handleCategoryClick(item, e)}
              >
                {item}
                {item === selectedCategory && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-1.5 bg-red-500"
                    style={{ width: `${underlineWidth}px`, x: `${underlineX}px` }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
      <WebsiteCards websites={websitesData.filter((website) => selectedCategory === 'All' || website.category === selectedCategory)} />
    </div>
  );
};

export default WebsiteSection;
