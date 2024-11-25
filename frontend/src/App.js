import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './views/Landing';
import Login from './views/Login';
import Register from './views/Register';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';

function App() {
  return (
   <> <div> <Navbar /></div>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
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
