import React from 'react';
import SectionNavigation from '../SectionNavigation';

const Section1 = ({ onNavigate, prevSection, nextSection }) => {
  return (
    <div className="container-custom">
      <h1 className="section-heading font-handwritten text-center">Introduction</h1>
      
      <div className="card mb-8">
        <p className="mb-4">
          For me, the most challenging aspect of my transition from high school to college was adapting to a larger, more unstructured social environment. In high school, friendships were naturally woven into my daily routine. In college, however, I faced a much more expansive and less structured social landscape, where forming and maintaining relationships required more intentional effort. This autoethnography explores how I navigated this shift and learned to adapt to a new social world.
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

export default Section1; 