import React from 'react';
import Header from './components/Header';
import Services from './sections/Services';
import WhatsAppButton from './components/WhatsAppButton'
import About from './sections/About';
import Hero from './sections/Hero'
import Footer from './components/Footer';
import './index.css';


function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
      </main>

      <WhatsAppButton />

      <Footer />
    </div>
  );
}

export default App;
