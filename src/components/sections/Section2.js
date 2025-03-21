import React from 'react';
import SectionNavigation from '../SectionNavigation';

const Section2 = ({ onNavigate, prevSection, nextSection }) => {
  return (
    <div className="container-custom">
      <h1 className="section-heading font-handwritten text-center">Section 2: New Horizons</h1>
      
      <div className="card card-gradient mb-8">
        <h2 className="section-subheading font-handwritten">Moving Forward</h2>
        <p className="mb-4">
          After the experiences in section one, I found myself exploring new territory...
          [Add your continuing story here in a casual, conversational tone]
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-accent/10 p-5 rounded-xl">
            <h3 className="font-display text-lg mb-2 text-primary">Memorable Moment #1</h3>
            <p>That time when... [add a brief story]</p>
          </div>
          <div className="bg-softgreen/20 p-5 rounded-xl">
            <h3 className="font-display text-lg mb-2 text-primary">Memorable Moment #2</h3>
            <p>I'll never forget when... [add another brief story]</p>
          </div>
        </div>
        
        <div className="quote">
          <p className="text-gray-700">
            "Sometimes you have to take a step back to see the whole picture..."
          </p>
        </div>
        
        <h2 className="section-subheading font-handwritten mt-8">Connections</h2>
        <p className="mb-4">
          How these experiences connected to broader themes and ideas...
          [Add your analysis here]
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

export default Section2; 