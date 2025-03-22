import React from 'react';
import SectionNavigation from '../SectionNavigation';

const Section4 = ({ onNavigate, prevSection, nextSection }) => {
  return (
    <div className="container-custom">
      <h1 className="section-heading font-handwritten text-center">Finding Comfort in KCECH</h1>
      
      <div className="card mb-8">
        <p className="mb-4">
          In response to this unfamiliarity, I instinctively gravitated toward the most structured social space available—my dormitory. I lived in King's Court English College House (KCECH), a smaller, more isolated dorm compared to the Quad where most freshmen lived. Falling back on how I had made friends in high school, I grew closer to people on my floor, English House 5 (EH5), since I saw them regularly when entering and exiting my room. Our floor quickly formed a tight-knit community, utilizing our central lounge area as a meeting area to find friends whenever we were not in class. This became a gathering place where we played games like trivia and Dance Dance Revolution regularly. My peers on EH5 became my first group of friends at Penn, and they were my social anchor throughout freshman year.
        </p>
        
        <p className="mb-4">
          Some of my EH5 friends are still close to me today. However, in retrospect, I now realize that solely relying on this social circle may have been a mistake. Because I already had a comfortable group of friends, I felt little motivation to branch out and meet other freshmen. This was especially true since KCECH was geographically isolated from some of the other freshman dorms.
        </p>
        
        <p>
          Additionally, these friendships were largely based on convenience. Having a floor lounge where I knew I would automatically see friends prevented me from needing to worry about making plans or putting in significant effort to maintain relationships. While this made socializing easy, it also meant I was receiving less practice in developing the skills necessary to sustain friendships in less structured settings, which I would need once I no longer lived in the same place as all my friends.
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