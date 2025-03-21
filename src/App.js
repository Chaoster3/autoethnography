import React from 'react';
import AutoethnographyContent from './components/AutoethnographyContent';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AutoethnographyContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;
