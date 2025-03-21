import React from 'react';
import SectionNavigation from '../SectionNavigation';

const Section3 = ({ onNavigate, prevSection, nextSection }) => {
  return (
    <div className="container-custom">
      <h1 className="section-heading font-handwritten text-center">Section 3: Challenges & Growth</h1>
      
      <div className="card mb-8">
        <h2 className="section-subheading font-handwritten">Facing Challenges</h2>
        <p className="mb-4">
          Not everything was smooth sailing. Here are some of the challenges I encountered...
          [Add your personal story about challenges]
        </p>
        
        <div className="quote">
          <p className="text-gray-700">
            "The most difficult moments often lead to the greatest growth..."
          </p>
        </div>
        
        <h2 className="section-subheading font-handwritten mt-8">Learning Process</h2>
        <p className="mb-4">
          Through these challenges, I learned important lessons about...
          [Add your reflections on what you learned]
        </p>
        
        <h2 className="section-subheading font-handwritten mt-8">Key Takeaways</h2>
        <div className="flex flex-wrap mt-2">
          <span className="bubble-tag">Lesson #1</span>
          <span className="bubble-tag">Lesson #2</span>
          <span className="bubble-tag">Lesson #3</span>
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

export default Section3; 