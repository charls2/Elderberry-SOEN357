import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import Home from './views/Home';
import Navbar from './components/Navbar';
import Welcome from './views/welcome_page';

function App() {
  return (
    <>
      <Navbar />
      <div className="h-screen overflow-hidden">
      <Routes>
        <Route path="/" element={<Welcome />} />
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

    </>
  );
}

export default App;
