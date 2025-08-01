import { useEffect } from 'react'
import './App.css'
import { SignedIn, SignedOut } from "@clerk/clerk-react"  

// Import components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Achievements from './components/Achievements'
import Sponsors from './components/Sponsors'
import Events from './components/Events'
import Team from './components/Team'
import Footer from './components/Footer'

function App() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <Achievements />
        <Sponsors />
        <Events />
        <Team />
      </main>
      
      <Footer />
    </>
  );
}

export default App;
