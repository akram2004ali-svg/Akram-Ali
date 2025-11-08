
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400">
        Baba Taraknath Bharat Gas Agency
      </h1>
      <p className="text-md text-gray-600 dark:text-gray-300 mt-2">
        Your Trusted Gas Partner - Contact Directory
      </p>
    </header>
  );
};

export default Header;
