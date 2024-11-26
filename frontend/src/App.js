import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './views/Landing';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import Navbar from './components/Navbar';
import About from './views/About';
import EventDetailsDesign1 from './views/DetailedEvent1';
import EventDetailsDesign2 from './views/DetailedEvent2';

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
          <Route path="/Event1" element={<EventDetailsDesign1 />} />
          <Route path="/Event2" element={<EventDetailsDesign2 />} />
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
