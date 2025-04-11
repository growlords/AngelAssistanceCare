import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Enquiries from './pages/Enquiries';
import Services from './pages/Services';
import JoinUs from './pages/JoinUs';
import NavEnd from './components/NavEnd';
import ScrollToTop from './components/ScrollToTop.jsx';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Show splash for 3 seconds
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="flex-grow">
      <Navbar />
      <ScrollToTop />
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Enquiries" element={<Enquiries />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/JoinUs" element={<JoinUs />} />
        </Routes>
      </div>
      <NavEnd />
    </div>
  );
}

export default App;
