import { useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock login check (replace with your own logic if needed)
    if (email === 'test@example.com' && password === 'password123') {
      localStorage.setItem('isLoggedIn', 'true'); // Set login flag
      window.location.href = '/'; // Redirect to home page
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="Login">
      <div className="main">
        <div className="left-container">
         
        </div>
        <div className="right-container">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-btn1">
              Login
            </button>
            {error && <p className="error">{error}</p>}
          </form>
          <div className="paragraphs">
          <p><a href="/signup">Forget Password?</a></p>
          <p>Don't have an account? <a href="/signup">Signup</a></p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
