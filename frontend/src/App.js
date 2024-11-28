import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Home from './views/Home';
import Welcome from './pages/welcome_page';
import CreateAccount from './pages/CreateAccount';
import BrowseNewRecommendations from './pages/BrowseNewRecommendations';

function App() {
  return (
    <>
      <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/browse" element={<BrowseNewRecommendations />} />
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
