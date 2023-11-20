import React, { useState } from 'react';
import WebsiteCards from './sectionitems/WebsiteCards';

const websitesData = [
  { id: 1, name: 'Website 1', category: 'Ecommerce', image: '/branding.png', priority: 'false' },
  { id: 2, name: 'Website 2', category: 'Blogging', image: '/branding.png', priority: 'false' },
  { id: 3, name: 'Website 3', category: 'Portfolio', image: '/branding.png', priority: 'false' },
  { id: 4, name: 'Website 4', category: 'Ecommerce', image: '/branding.png', priority: 'false' },
  { id: 5, name: 'Website 5', category: 'Blogging', image: '/branding.png', priority: 'false' },
  { id: 6, name: 'Website 6', category: 'Portfolio', image: '/branding.png', priority: 'false' },
];

const categories = ['All', 'Ecommerce', 'Blogging', 'Portfolio'];

const WebsiteSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='pt-6 lg:pt-16'>
      <h4 className='dark:text-neutral-200/90 tracking-tight text-center text-4xl font-semibold'>Шоукейс</h4>

      <div className="text-black dark:text-neutral-200/70">
        <nav>
          <ul className='flex justify-center dark:bg-royal-black border dark:border-royal-gray rounded-full py-2 shadow-sm gap-2 font-semibold lg:text-lg text-sm mb-4 mt-10'>
            {categories.map((item) => (
              <li
                key={item}
                className={`cursor-pointer dark:hover:bg-neutral-200/10 shadow-sm dark:hover:text-neutral-200/90 py-2 px-3 rounded-full ${item === selectedCategory ? 'dark:text-neutral-200 dark:bg-neutral-200/10' : ''}`}
                onClick={() => handleCategoryClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <WebsiteCards websites={websitesData.filter((website) => selectedCategory === 'All' || website.category === selectedCategory)} />
    </div>
  );
};

export default WebsiteSection;
