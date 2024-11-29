import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Home from './pages/Home';
import Welcome from './pages/welcome_page';
import Register from './pages/Register';
import BrowseNewRecommendations from './pages/BrowseNewRecommendations';
import EditPreferences from './views/EditPreferences';
import MyCommunities from './views/MyCommunities.jsx';
import ContactUs from './views/ContactUs.jsx';
import Community from './pages/Community.js';
import Mentorship from './pages/Mentorship.js';
import AboutUs from './pages/About.js';

function App() {
  return (
    <>
      <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/preferences" element={<EditPreferences />} />
        <Route path="/communities" element={<MyCommunities />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/mentors" element={<Mentorship />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/browse" element={<BrowseNewRecommendations />} />
        <Route path='/communities/:id' element={<Community />} />
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

    </>
  );
}

export default App;
