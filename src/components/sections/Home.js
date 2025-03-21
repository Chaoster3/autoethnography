import React from 'react';

const Home = ({ onNavigate }) => {
  return (
    <div className="container-custom">
      <div className="text-center mb-12 bg-gradient-to-br from-primary/30 via-accent/20 to-highlight/10 p-8 rounded-3xl shadow-soft">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary">
          My Autoethnography
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-handwritten">
          A personal journey through memories, experiences, and reflections
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="card hover:rotate-1 transition-transform">
          <h2 className="section-subheading font-handwritten">About This Project</h2>
          <p className="mb-4">
            Hey there! This is my autoethnography project where I share my personal journey 
            and experiences related to [your topic]. I've organized my story chronologically
            so you can follow along as it unfolds. Hope you enjoy!
          </p>
        </div>
        
        <div className="card hover:-rotate-1 transition-transform">
          <h2 className="section-subheading font-handwritten">How to Navigate</h2>
          <p className="mb-4">
            Feel free to explore my story however you want! You can use the fun buttons in the 
            navigation bar, or the section links below. Each section builds on the previous one,
            but they can also be read independently.
          </p>
        </div>
      </div>
      
      <div className="card mb-12 relative overflow-hidden">
        <h2 className="section-heading text-center font-handwritten relative z-10">My Journey</h2>
        <div className="space-y-6 relative z-10">
          {[1, 2, 3, 4, 5].map((num) => (
            <div key={num} className="border-l-4 border-accent pl-4 py-3 hover:bg-blue-50/50 rounded-r-2xl transition-colors">
              <h3 className="font-medium text-lg mb-1">
                <button 
                  onClick={() => onNavigate(`section${num}`)}
                  className="text-primary hover:text-secondary font-display"
                >
                  Section {num}
                </button>
              </h3>
              <p className="text-gray-600 font-handwritten text-lg">
                {num === 1 && "Where it all began... the first chapter of my story"}
                {num === 2 && "New experiences and perspectives that changed my outlook"}
                {num === 3 && "Challenges, growth, and unexpected lessons"}
                {num === 4 && "The turning points that shaped my understanding"}
                {num === 5 && "Reflecting on the journey and what it all means"}
              </p>
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