import { useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset error message before each login attempt
    setError('');

    try {
      // Send login data to the backend API
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // On successful login, store the token (or user info) in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(data.user)); // Optionally store user info

        // Redirect to home page
        window.location.href = '/';
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred while logging in. Please try again later.');
    }
  };

  return (
    <div className="Login">
      <div className="main">
        <div className="left-container">
          {/* Add any left container content here */}
        </div>
        <div className="right-container">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-btn1">
              Login
            </button>
            {error && <p className="error">{error}</p>}
          </form>
          <div className="paragraphs">
            <p><a href="/signup">Forgot Password?</a></p>
            <p>Don't have an account? <a href="/signup">Signup</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
