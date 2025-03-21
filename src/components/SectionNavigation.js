import React from 'react';

const SectionNavigation = ({ prevSection, nextSection, onNavigate }) => {
  return (
    <div className="flex justify-between items-center mt-12 mb-8">
      {prevSection ? (
        <button
          onClick={() => onNavigate(prevSection.id)}
          className="flex items-center bg-white py-3 px-5 rounded-2xl shadow-soft hover:shadow-md transition-all duration-200 text-primary font-medium transform hover:scale-105 hover:-translate-x-1"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          {prevSection.title}
        </button>
      ) : (
        <div></div>
      )}
      
      {nextSection && (
        <button
          onClick={() => onNavigate(nextSection.id)}
          className="flex items-center bg-primary py-3 px-5 rounded-2xl shadow-soft hover:shadow-md transition-all duration-200 text-white font-medium transform hover:scale-105 hover:translate-x-1"
        >
          {nextSection.title}
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default SectionNavigation; 