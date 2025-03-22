import React, { useState, useEffect } from 'react';
import Home from './sections/Home';
import Section1 from './sections/Section1';
import Section2 from './sections/Section2';
import Section3 from './sections/Section3';
import Section4 from './sections/Section4';
import Section5 from './sections/Section5';
import Section6 from './sections/Section6';

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
            nextSection={{ id: 'section2', title: 'High School' }}
          />
        );
      case 'section2':
        return (
          <Section2
            onNavigate={navigateToSection}
            prevSection={{ id: 'section1', title: 'Introduction' }}
            nextSection={{ id: 'section3', title: 'College' }}
          />
        );
      case 'section3':
        return (
          <Section3
            onNavigate={navigateToSection}
            prevSection={{ id: 'section2', title: 'High School' }}
            nextSection={{ id: 'section4', title: 'KCECH' }}
          />
        );
      case 'section4':
        return (
          <Section4
            onNavigate={navigateToSection}
            prevSection={{ id: 'section3', title: 'College' }}
            nextSection={{ id: 'section5', title: 'Now' }}
          />
        );
      case 'section5':
        return (
          <Section5
            onNavigate={navigateToSection}
            prevSection={{ id: 'section4', title: 'KCECH' }}
            nextSection={{ id: 'section6', title: 'Conclusion' }}
          />
        );
      case 'section6':
        return (
          <Section6
            onNavigate={navigateToSection}
            prevSection={{ id: 'section5', title: 'Now' }}
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