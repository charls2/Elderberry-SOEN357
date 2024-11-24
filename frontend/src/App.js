import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './views/Landing';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import Navbar from './components/Navbar';

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
