import React from 'react';
import SectionNavigation from '../SectionNavigation';

const Section6 = ({ onNavigate, prevSection, nextSection }) => {
  return (
    <div className="container-custom">
      <h1 className="section-heading font-handwritten text-center">Conclusion</h1>
      
      <div className="card mb-8">
        <p className="mb-4">
          Reflecting on my transition, I see how my experiences at Regis shaped my initial approach to college social life. I was used to structured, built-in friendships and needed to learn how to navigate a more independent social world requiring greater personal agency. KCECH was a crucial stepping stone in my transition, providing social belonging while I adjusted to university life's unstructured nature. However, it did ultimately limit my full integration into the broader campus community. 
        </p>
        
        <p className="mb-4">
          With time, I've made progress in becoming more socially proactive by reaching out to people through clubs, classes, and spontaneous encounters. This has helped me maintain relationships through intentional effort rather than mere proximity. Overall, adapting to my new social environment in college has helped prepare me for post-college life, where social structures are even less defined.
        </p>
        
        <p>
          While I don't consider myself an expert at navigating such open social landscapes yet, I feel significantly more confident in my ability to create and sustain a fulfilling social life beyond the structured environments of school. This journey has taught me that meaningful connection requires effort and intentionality—a lesson that extends far beyond the college experience into all aspects of human relationship.
        </p>
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

export default Section6; 