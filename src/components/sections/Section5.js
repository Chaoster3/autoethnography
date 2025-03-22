import React from 'react';
import SectionNavigation from '../SectionNavigation';
import ImageWithCaption from '../ImageWithCaption';
const Section5 = ({ onNavigate, prevSection, nextSection }) => {
  return (
    <div className="container-custom">
      <h1 className="section-heading font-handwritten text-center">Now: Learning to Navigate Friendships Differently</h1>
      
      <div className="card mb-8">
        <p className="mb-4">
          As I progressed through college, I gradually recognized the importance of expanding my social horizons. After freshman year, the EH5 community became spread out across different sophomore dorms. I realized that in order to stay connected with the friends I had been closest to, I needed to take the initiative in making plans and staying in touch. This shift initially felt unnatural, as I had been used to simply seeing friends automatically when I returned to my dorm. Over time, however, I realized that meaningful friendships are built on more than just convenience and grew more accustomed to keeping up with people through my own efforts rather than circumstance.
        </p>
        
        <p className="mb-4">
          With my sophomore dorm lacking the strong closeness of KCECH, I also began extending myself into new social circles. By becoming a teaching assistant for a class and joining the UPenn Climbing Club, I found new communities of like-minded friends. I also found that collaborating with fellow computer science majors in classes, hackathons, and group projects naturally led me to form strong friendships. In fact, this website is evidence of the knowledge and skills I've developed alongside friends in my major. While being intentional about forming new friendships was again initially unfamiliar, I've found that I have become naturally more comfortable with meeting and befriending new people in various settings as I've encountered more and more people in college.
        </p>
        
        <p className="mb-16">
          This diversification has made my social life more robust and fulfilling, preventing me from feeling overly dependent on a single group. Additionally, it has broadened my understanding of what friendship looks like. In high school, my closest friendships were defined simply by the people I saw daily over four years. In college, my friendships take more diverse forms—some based on shared academic interests, others on extracurricular activities, and some on simple social compatibility. I have become more comfortable with the idea that friendships do not all have to fit the same mold and that relationships can evolve over time.
        </p>

        <ImageWithCaption 
          src="/images/section5.png" 
          alt="Image of me and fellow teaching assistants" 
          caption="Friends I have made from serving as a teaching assistant for CIS 1600."
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

export default Section5; 