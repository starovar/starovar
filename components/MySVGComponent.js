import React from 'react';

const MySVGComponent = () => {
  const isDarkTheme = true; // Здесь вы можете использовать свой способ определения темы

  return (
    <div className={`bg-white ${isDarkTheme ? 'dark:bg-black' : ''}`}>
      <svg
        fill="none"
        height="110"
        viewBox="0 0 800 110"
        width="100%"
        data-divider="true"
        role="separator"
      >
        {/* Градиент для светлого фона */}
        <linearGradient
          id="gradient-light"
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2="800"
          y1="30"
          y2="30"
        >
          <stop stopOpacity="0"></stop>
          <stop offset="0.0328358"></stop>
          <stop offset="0.692529"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>

        {/* Градиент для темного фона */}
        <linearGradient
          id="gradient-dark"
          gradientUnits="userSpaceOnUse"
          x1="0"
          x2="800"
          y1="30"
          y2="30"
        >
          <stop stopOpacity="0"></stop>
          <stop offset="0.0328358" stopColor="white"></stop>
          <stop offset="0.692529" stopColor="gray"></stop>
          <stop offset="1" stopOpacity="0"></stop>
        </linearGradient>

        {/* Применение градиента в зависимости от режима цветовой схемы */}
        <path
          d="M0 30H800"
          opacity="0.12"
          className={`${isDarkTheme ? 'dark:stroke-white' : ''}`}
          strokeDasharray="2 2"
          style={{
            stroke: isDarkTheme
              ? 'url(#gradient-dark)'
              : 'url(#gradient-light)',
          }}
        ></path>

        {/* Добавьте другие элементы SVG */}
      </svg>
    </div>
  );
};

export default MySVGComponent;
