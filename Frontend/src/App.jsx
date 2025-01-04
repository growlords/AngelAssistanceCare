import { useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route,ScrollRestoration } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Enquiries from './pages/Enquiries'
import Services from './pages/Services'
import JoinUs from './pages/JoinUs';
import NavEnd from './components/NavEnd';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex-grow px-3 sm:px-[2vw] md:px-[4vw] lg:px-[5vw]">
  <Navbar />
  <div className="">
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

  )
}

export default App
