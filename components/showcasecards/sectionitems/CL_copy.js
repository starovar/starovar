import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const UnderlineTransition = ({ selectedCategory }) => {
  return (
    <motion.div
      initial={{ width: '0%', x: '0%' }}
      animate={{ width: '100%', x: '0%' }}
      exit={{ width: '0%', x: '0%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="absolute bottom-0 left-0 w-full h-1.5 bg-blue-500"
      style={{ originX: 0, originY: 1 }}
    />
  );
};

const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex justify-center gap-4 text-sm mb-4 mt-10 relative">
      {categories.map((category) => (
        <div
          key={category}
          className={`cursor-pointer px-3 py-2 relative rounded-md ${selectedCategory === category ? 'bg-orange-400 text-gray-800' : 'bg-blue-600 text-gray-800 hover:bg-gray-300'}`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
          {selectedCategory === category && <UnderlineTransition selectedCategory={selectedCategory} />}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
