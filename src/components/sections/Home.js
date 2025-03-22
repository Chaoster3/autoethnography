import React from 'react';

const Home = ({ onNavigate }) => {
  return (
    <div className="container-custom">
      <div className="text-center mb-12 bg-gradient-to-br from-primary/30 via-accent/20 to-highlight/10 p-8 rounded-3xl shadow-soft">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary">
          My Autoethnography
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-handwritten">
          Transitioning from high school to college
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="card hover:rotate-1 transition-transform">
          <h2 className="section-subheading font-handwritten">About This Website</h2>
          <p className="mb-4">
            This website documents my autoethnography on adjusting to a new social environment when transitioning from high school to college. I've organized it chronologically into five sections.
          </p>
        </div>
        
        <div className="card hover:-rotate-1 transition-transform">
          <h2 className="section-subheading font-handwritten">How to Navigate</h2>
          <p className="mb-4">
            You can use the buttons in the 
            navigation bar, the section links below, or the buttons at the bottom of the page to navigate to each section.
          </p>
        </div>
      </div>
      
      <div className="card mb-12 relative overflow-hidden">
        <h2 className="section-heading text-center font-handwritten relative z-10">Sections</h2>
        <div className="space-y-6 relative z-10">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="border-l-4 border-primary pl-4 py-3 hover:bg-primary/5 rounded-r-2xl transition-colors">
              <h3 className="font-medium text-lg mb-1">
                <button 
                  onClick={() => onNavigate(`section${num}`)}
                  className="text-secondary hover:text-primary font-display transition-colors"
                >
                  {num === 1 && "Introduction"}
                  {num === 2 && "High School: A Structured Social Life"}
                  {num === 3 && "Entering College: Facing New Social Challenges"}
                  {num === 4 && "Finding Comfort in KCECH"}
                  {num === 5 && "Now: Learning to Navigate Friendships Differently"}
                  {num === 6 && "Conclusion"}
                </button>
              </h3>
            </div>
          ))}
        </div>
      </div>
      
      <div className="text-center">
        <button 
          onClick={() => onNavigate('section1')} 
          className="btn btn-primary"
        >
          Start My Journey
        </button>
      </div>
    </div>
  );
};

export default Home; 