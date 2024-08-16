import React from 'react';

const ToggleTheme = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 border rounded-md bg-gray-200 dark:bg-gray-700 dark:text-white"
      aria-label="Toggle between light and dark mode"
    >
      Toggle Theme
    </button>
  );
};

export default ToggleTheme;
