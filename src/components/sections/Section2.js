import React from 'react';
import SectionNavigation from '../SectionNavigation';
import ImageWithCaption from '../ImageWithCaption';


const Section2 = ({ onNavigate, prevSection, nextSection }) => {
  return (
    <div className="container-custom">
      <h1 className="section-heading font-handwritten text-center">High School: A Structured Social Life</h1>
      
      <div className="card mb-8">
        <p className="mb-4">
          Before college, I attended Regis High School, an all-boys Catholic school in New York City known for its academic rigor. Since all students received full scholarships, the school attracted individuals from across the tri-state area. I personally lived in New Jersey, commuting around 90 minutes each way to school. In a grade of around 135 students, there was a strong sense of brotherhood and camaraderie.
        </p>
        
        <p className="mb-4">
          After reflecting and reminiscing with some friends, I believe this tight-knit community formed through our shared experiences of long commutes and demanding coursework. We spent long hours studying together, helping each other with assignments, and navigating unpredictable public transportation. Every Regian knew what it was like to pull an all-nighter writing an English essay or get stuck at a train station waiting to go home, and these unique struggles made socialization effortless.
        </p>
        
        <p className="mb-16">
          Regis' class scheduling approach further reinforced this social cohesion for me. Each year, students were placed in an "advisement" of 14 peers who would take all their classes together. By chance, I was placed in practically the same advisement group throughout my four years there, meaning I attended almost all of my classes with the exact same people. This created a stable and consistent social circle that required little effort to maintain. Simply due to the amount of time I spent with these peers, friendship was inevitable and not something I had to actively pursue. In retrospect, I never needed to develop the skills for seeking out new connections because my social world was automatically formed around me.
        </p>

        <ImageWithCaption 
          src="/images/section2.jpg" 
          alt="Image of me and my friends from Regis" 
          caption="Some of my closest friends from Regis at our high school graduation."
          width="2/3"
          align="center"
        />
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