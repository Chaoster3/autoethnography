import React from 'react';
import SectionNavigation from '../components/SectionNavigation';

const Section2 = () => {
  // Navigation configuration
  const prevSection = { title: 'Section 1', path: '/section1' };
  const nextSection = { title: 'Section 3', path: '/section3' };

  return (
    <div className="bg-background">
      <div className="container-custom">
        <h1 className="section-heading">Section 2: [Title]</h1>
        
        {/* Content similar to Section1 but with your section 2 content */}
        
        <SectionNavigation prevSection={prevSection} nextSection={nextSection} />
      </div>
    </div>
  );
};

export default Section2; 