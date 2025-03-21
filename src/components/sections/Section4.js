import React from 'react';
import SectionNavigation from '../SectionNavigation';

const Section4 = ({ onNavigate, prevSection, nextSection }) => {
  return (
    <div className="container-custom">
      <h1 className="section-heading font-handwritten text-center">Section 4: Turning Points</h1>
      
      <div className="card mb-8">
        <h2 className="section-subheading font-handwritten">Critical Moments</h2>
        <p className="mb-4">
          There were several pivotal moments that changed my perspective...
          [Describe your turning points]
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-accent/10 p-5 rounded-xl">
            <h3 className="font-display text-lg mb-2 text-primary">Turning Point #1</h3>
            <p>When I realized that... [describe a key turning point]</p>
          </div>
          <div className="bg-softgreen/20 p-5 rounded-xl">
            <h3 className="font-display text-lg mb-2 text-primary">Turning Point #2</h3>
            <p>The moment I understood... [describe another turning point]</p>
          </div>
        </div>
        
        <div className="quote">
          <p className="text-gray-700">
            "Looking back, I can see how these moments shaped who I am today..."
          </p>
        </div>
        
        <h2 className="section-subheading font-handwritten mt-8">New Directions</h2>
        <p className="mb-4">
          These pivotal moments led me down new paths that I hadn't considered before...
          [Add more details about the impact of these turning points]
        </p>
      </div>
      
      <SectionNavigation 
        prevSection={prevSection} 
        nextSection={nextSection}
        onNavigate={onNavigate}
      />
    </div>
  );
};

export default Section4; 