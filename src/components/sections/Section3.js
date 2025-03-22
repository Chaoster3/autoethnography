import React from 'react';
import SectionNavigation from '../SectionNavigation';

const Section3 = ({ onNavigate, prevSection, nextSection }) => {
  return (
    <div className="container-custom">
      <h1 className="section-heading font-handwritten text-center">Entering College: Facing New Social Challenges</h1>
      
      <div className="card mb-8">
        <p className="mb-4">
          Arriving at UPenn, I quickly realized that the structured social environment I was accustomed to no longer existed. Unlike high school, where I was surrounded by the same few faces every day, college presented a setting where friendships were not built into my routine. I needed to be proactive in seeking out connections, a skill I had never fully developed.
        </p>
        
        <p className="mb-4">
          Here, I see somewhat of a parallel to an issue described in the ASAN's College Transition Guide. The guide emphasizes how unlike in high school, where accommodations and support are often provided automatically, college requires neurodivergent students to actively seek out resources and advocate for themselves. Although I did not require formal accommodations, I experienced an analogous challenge in social settings. While my high school had made it easy to form friendships, I now needed to actively build my social life rather than having it structured for me.
        </p>
        
        <p>
          Additionally, beyond meeting new people, I quickly learned that keeping up connections in college required effort in a way that high school friendships had not. In high school, I saw my friends daily without having to coordinate plans. Now, I had to actively reach out and make time to see people since relationships would not be automatically sustained through proximity alone. I met countless people during freshman orientation. However, many of these initial connections faded because I had little experience with intentionally maintaining contact after a first interaction.
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

export default Section3; 