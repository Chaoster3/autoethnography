import React from 'react';
import SectionNavigation from '../SectionNavigation';

const Section1 = ({ onNavigate, prevSection, nextSection }) => {
  return (
    <div className="container-custom">
      <h1 className="section-heading font-handwritten text-center">Section 1: The Beginning</h1>
      
      <div className="card mb-8">
        <h2 className="section-subheading font-handwritten">Setting the Scene</h2>
        <p className="mb-4">
          I still remember when it all started... [Add your personal story here in a casual, conversational tone]
        </p>
        
        <h2 className="section-subheading font-handwritten mt-8">Early Memories</h2>
        <p className="mb-4">
          Looking back, these experiences shaped me in ways I couldn't have imagined at the time...
          [Add more of your story here]
        </p>
        
        <div className="quote">
          <p className="text-gray-700">
            "That moment when I realized... [add a meaningful quote or reflection]"
          </p>
        </div>
        
        <h2 className="section-subheading font-handwritten mt-8">The Bigger Picture</h2>
        <p className="mb-4">
          My personal experiences weren't happening in isolation. Here's what was going on around me...
          [Add contextual information]
        </p>
        
        <h2 className="section-subheading font-handwritten mt-8">Things I Learned</h2>
        <div className="flex flex-wrap mt-2">
          <span className="bubble-tag">Insight #1</span>
          <span className="bubble-tag">Insight #2</span>
          <span className="bubble-tag">Insight #3</span>
        </div>
      </div>
      
      <SectionNavigation 
        prevSection={prevSection} 
        nextSection={nextSection}
        onNavigate={onNavigate} 
      />
    </div>
  );
};

export default Section1; 