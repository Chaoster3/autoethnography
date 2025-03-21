import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const navItems = [
    { title: 'Home', id: 'home' },
    { title: 'Section 1', id: 'section1' },
    { title: 'Section 2', id: 'section2' },
    { title: 'Section 3', id: 'section3' },
    { title: 'Section 4', id: 'section4' },
    { title: 'Section 5', id: 'section5' },
  ];

  // Listen for active section updates from the content area
  useEffect(() => {
    const handleActiveUpdate = (event) => {
      if (event.detail && event.detail.sectionId) {
        setActiveSection(event.detail.sectionId);
      }
    };

    window.addEventListener('updateNavbarActive', handleActiveUpdate);
    
    return () => {
      window.removeEventListener('updateNavbarActive', handleActiveUpdate);
    };
  }, []);

  const handleNavigation = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    
    // Dispatch a custom event for section navigation
    window.dispatchEvent(new CustomEvent('navigateToSection', { 
      detail: { sectionId } 
    }));
  };

  return (
    <nav className="bg-gradient-to-r from-secondary via-primary to-accent text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={() => handleNavigation('home')} 
              className="font-display text-xl font-bold transform hover:scale-105 transition-transform"
            >
              My Autoethnography
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transform transition-all duration-200 hover:scale-105 ${
                  activeSection === item.id
                    ? 'bg-white text-primary'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl bg-white/10 hover:bg-white/20"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className={`block w-full text-left px-4 py-2 rounded-xl text-base font-medium ${
                  activeSection === item.id
                    ? 'bg-white text-primary'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 