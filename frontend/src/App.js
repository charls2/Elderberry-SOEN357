import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './views/Landing.js';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import Navbar from './components/Navbar';
import EditPreferences from './views/EditPreferences';
import MyCommunities from './views/MyCommunities.jsx';
import ContactUs from './views/ContactUs.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/preferences" element={<EditPreferences />} />
          <Route path="/communities" element={<MyCommunities />} />
          <Route path="/contact" element={<ContactUs />} />

          <Route
            path="*"
            element={
              <div className="text-center mt-20 text-xl">
                <p>404 - Page Not Found</p>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
