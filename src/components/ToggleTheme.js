import React from 'react';

const ToggleTheme = () => {
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 dark:from-blue-700 dark:to-purple-800 text-white shadow-lg hover:shadow-xl focus:outline-none transition-transform transform hover:scale-105"
      aria-label="Toggle between light and dark mode"
    >
      <span className="sr-only">Toggle Theme</span>
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1M12 20v1M4.22 4.22l.707.707M19.07 19.07l.707.707M3 12h1M20 12h1M4.22 19.07l.707-.707M19.07 4.22l.707-.707M12 7a5 5 0 110 10 5 5 0 010-10z"></path>
      </svg>
    </button>
  );
};

export default ToggleTheme;
