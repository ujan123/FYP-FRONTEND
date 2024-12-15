import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/login/Login';
import './App.css';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the /login route */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
