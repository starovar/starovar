// components/CategoryList.js
import React from 'react';

const CategoryList = ({ categories, selectedCategory, onSelectCategory }) => (
  <div className="flex justify-center gap-4 text-sm mb-4 mt-10">
    {categories.map((category) => (
      <div
        key={category}
        className={`cursor-pointer px-3 py-2 rounded-md ${selectedCategory === category ? 'bg-orange-400 text-gray-800' : 'bg-blue-600 text-gray-800 hover:bg-gray-300'}`}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </div>
    ))}
  </div>
);

export default CategoryList;
