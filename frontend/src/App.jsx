import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/login/Login';
import './App.css';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <Router>
      <Routes>
        {/* Define the /login route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Navbar />} />
        
      </Routes>
    </Router>
  );
}

export default App;
