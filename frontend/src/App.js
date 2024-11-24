import logo from './logo.svg';
import './App.css';
import {Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    
      <div>
        <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            {/* <li><a href="/contact">Contact</a></li> */}
          </ul>
        </nav>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} />
          INSERT OTHER PAGE ROUTES HERE */}
        </Routes>
      </div>
   
   
  );
}

export default App;
