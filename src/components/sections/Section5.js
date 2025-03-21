import React from 'react';
import SectionNavigation from '../SectionNavigation';

const Section5 = ({ onNavigate, prevSection, nextSection }) => {
  return (
    <div className="container-custom">
      <h1 className="section-heading font-handwritten text-center">Section 5: Reflections</h1>
      
      <div className="card mb-8">
        <h2 className="section-subheading font-handwritten">Looking Back</h2>
        <p className="mb-4">
          As I reflect on the entire journey, I can see how each experience connected to form a larger pattern...
          [Add your reflections on the whole journey]
        </p>
        
        <div className="quote">
          <p className="text-gray-700">
            "The meaning of our experiences often becomes clear only when we look back at them..."
          </p>
        </div>
        
        <h2 className="section-subheading font-handwritten mt-8">Synthesis</h2>
        <p className="mb-4">
          Bringing all these experiences together, I've come to understand...
          [Add your concluding thoughts]
        </p>
        
        <h2 className="section-subheading font-handwritten mt-8">Moving Forward</h2>
        <p className="mb-4">
          This journey has prepared me for what's next in my life by...
          [Add your thoughts about how these experiences will shape your future]
        </p>
        
        <div className="bg-accent/10 p-6 rounded-xl mt-8">
          <h3 className="font-display text-xl mb-3 text-primary text-center">Thank You for Joining Me</h3>
          <p className="text-center font-handwritten text-lg">
            I hope my story has resonated with you in some way. Thanks for taking the time to read about my journey!
          </p>
        </div>
      </div>
      
      <SectionNavigation 
        prevSection={prevSection} 
        nextSection={nextSection}
        onNavigate={onNavigate}
      />
      
      <div className="text-center mt-8">
        <button 
          onClick={() => onNavigate('home')} 
          className="btn bg-accent text-white hover:bg-accent/80 shadow-soft"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Section5; 