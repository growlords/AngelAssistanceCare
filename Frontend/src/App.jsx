import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Enquiries from './pages/Enquiries';
import Services from './pages/Services';
import JoinUs from './pages/JoinUs';
import NavEnd from './components/NavEnd';
import ScrollToTop from './components/ScrollToTop';
import SplashScreen from './components/SplashScreen';
import CustomCursor from './components/CustomCursor';
import AmbientBackground from './components/AmbientBackground';
import AccessibilityTools from './components/Accessibility';
import useLenis from './hooks/useLenis';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <>
      {/* WCAG 2.2 AA Accessible Skip to Main Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999999] focus:px-6 focus:py-3 focus:bg-[#2A9D8F] focus:text-white focus:font-bold focus:rounded-xl focus:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#E76F51]"
      >
        Skip to main content
      </a>

      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      
      <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-[#2A9D8F] selection:text-white">
        <CustomCursor />
        <AmbientBackground />
        <AccessibilityTools />
        <ScrollToTop />
        <Navbar />

        {/* Semantic main element */}
        <main id="main-content" tabIndex="-1" className="flex-1 w-full outline-none">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* About */}
            <Route path="/about" element={<About />} />
            <Route path="/About" element={<About />} />

            {/* Services (canonical lowercase and legacy PascalCase) */}
            <Route path="/services" element={<Services />} />
            <Route path="/Services" element={<Services />} />

            {/* Enquiries & Contact aliases */}
            <Route path="/enquiries" element={<Enquiries />} />
            <Route path="/Enquiries" element={<Enquiries />} />
            <Route path="/contact" element={<Enquiries />} />

            {/* Careers & Join Us aliases */}
            <Route path="/careers" element={<JoinUs />} />
            <Route path="/JoinUs" element={<JoinUs />} />
            <Route path="/joinus" element={<JoinUs />} />
            <Route path="/join-us" element={<JoinUs />} />
          </Routes>
        </main>

        <NavEnd />
      </div>
    </>
  );
}

export default App;
