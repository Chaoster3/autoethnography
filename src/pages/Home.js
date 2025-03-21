import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-primary">
            My Autoethnography
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A chronological exploration of personal experiences and cultural reflections
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="section-subheading">About This Project</h2>
            <p className="mb-4">
              This autoethnography presents a chronological journey through key experiences
              that have shaped my understanding of [your topic]. Through personal reflection and
              cultural analysis, I explore the interplay between individual experience and broader social contexts.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="section-subheading">Navigation Guide</h2>
            <p className="mb-4">
              This project is divided into five chronological sections. You can navigate through
              them using the navigation bar above or the section links below. Each section builds
              upon the previous one to create a cohesive narrative.
            </p>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="section-heading text-center">Sections</h2>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className="border-l-4 border-primary pl-4 py-2">
                <h3 className="font-semibold text-lg mb-1">
                  <Link 
                    to={`/section${num}`} 
                    className="text-primary hover:text-secondary"
                  >
                    Section {num}
                  </Link>
                </h3>
                <p className="text-gray-600">
                  {num === 1 && "The beginning of my journey..."}
                  {num === 2 && "Exploring new perspectives..."}
                  {num === 3 && "Challenges and growth..."}
                  {num === 4 && "Critical turning points..."}
                  {num === 5 && "Reflection and synthesis..."}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/section1" className="btn btn-primary">
            Begin Reading
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 