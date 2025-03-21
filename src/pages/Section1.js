import React from 'react';
import SectionNavigation from '../components/SectionNavigation';

const Section1 = () => {
  // Navigation configuration
  const prevSection = null; // This is the first section
  const nextSection = { title: 'Section 2', path: '/section2' };

  return (
    <div className="bg-background">
      <div className="container-custom">
        <h1 className="section-heading">Section 1: [Title]</h1>
        
        <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-8">
          <h2 className="section-subheading">Introduction</h2>
          <p className="mb-4">
            This is the beginning of my autoethnographic journey. In this section, I explore...
            [Add your content here]
          </p>
          
          <h2 className="section-subheading mt-8">Early Experiences</h2>
          <p className="mb-4">
            [Add your content here]
          </p>
          
          <div className="my-8 border-l-4 border-accent pl-6 py-2 bg-gray-50 italic">
            <p className="text-gray-700">
              "Add a meaningful quote or reflection here that encapsulates a key moment."
            </p>
          </div>
          
          <h2 className="section-subheading mt-8">Cultural Context</h2>
          <p className="mb-4">
            [Add your content here]
          </p>
          
          <h2 className="section-subheading mt-8">Key Insights</h2>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>[Your first insight]</li>
            <li>[Your second insight]</li>
            <li>[Your third insight]</li>
          </ul>
        </div>
        
        <SectionNavigation prevSection={prevSection} nextSection={nextSection} />
      </div>
    </div>
  );
};

export default Section1; 