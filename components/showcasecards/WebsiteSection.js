// components/WebsiteSection.js
import React, { useState } from 'react';
import CategoryList from './sectionitems/CategoryList';
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
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredWebsites = selectedCategory === 'All'
    ? websitesData
    : websitesData.filter((website) => website.category === selectedCategory);

  return (
    <div className='pt-6 lg:pt-16'>
      <h4 className='dark:text-neutral-200/90 tracking-tight text-center text-3xl font-semibold'>Портфоліо</h4>
      <CategoryList categories={categories} selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
      <WebsiteCards websites={filteredWebsites} />
    </div>
  );
};

export default WebsiteSection;
