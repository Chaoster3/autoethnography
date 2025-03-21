import React, { useState, useEffect } from 'react';
import Home from './sections/Home';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';

const AutoethnographyContent = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Function to change the active section
  const navigateToSection = (sectionId) => {
    setActiveSection(sectionId);
    
    // Emit an event so the navbar can update its active state
    window.dispatchEvent(new CustomEvent('updateNavbarActive', { 
      detail: { sectionId } 
    }));
    
    // Scroll to top when changing sections
    window.scrollTo(0, 0);
  };

  // Set up an effect to listen for navigation events from the Navbar
  useEffect(() => {
    const handleNavigation = (event) => {
      if (event.detail && event.detail.sectionId) {
        navigateToSection(event.detail.sectionId);
      }
    };

    // Add event listener
    window.addEventListener('navigateToSection', handleNavigation);

    // Clean up
    return () => {
      window.removeEventListener('navigateToSection', handleNavigation);
    };
  }, []);

  // Render the appropriate section based on activeSection state
  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home onNavigate={navigateToSection} />;
      case 'section1':
        return (
          <Section1
            onNavigate={navigateToSection}
            prevSection={null}
            nextSection={{ id: 'section2', title: 'Section 2' }}
          />
        );
      case 'section2':
        return (
          <Section2
            onNavigate={navigateToSection}
            prevSection={{ id: 'section1', title: 'Section 1' }}
            nextSection={{ id: 'section3', title: 'Section 3' }}
          />
        );
      case 'section3':
        return (
          <Section3
            onNavigate={navigateToSection}
            prevSection={{ id: 'section2', title: 'Section 2' }}
            nextSection={{ id: 'section4', title: 'Section 4' }}
          />
        );
      case 'section4':
        return (
          <Section4
            onNavigate={navigateToSection}
            prevSection={{ id: 'section3', title: 'Section 3' }}
            nextSection={{ id: 'section5', title: 'Section 5' }}
          />
        );
      case 'section5':
        return (
          <Section5
            onNavigate={navigateToSection}
            prevSection={{ id: 'section4', title: 'Section 4' }}
            nextSection={null}
          />
        );
      default:
        return <Home onNavigate={navigateToSection} />;
    }
  };

  return <div className="bg-background">{renderSection()}</div>;
};

export default AutoethnographyContent; 