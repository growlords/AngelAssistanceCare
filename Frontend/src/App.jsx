import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route,ScrollRestoration } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Enquiries from './pages/Enquiries'
import Services from './pages/Services'
import JoinUs from './pages/JoinUs';
import NavEnd from './components/NavEnd';
import  AccessibilityTools  from './components/Accessibility.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div className="flex-grow ">
  <Navbar />
   <AccessibilityTools />
   <ScrollToTop/>
  
  <div className=" w-full">
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
</div>
  )
}

export default App
