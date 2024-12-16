// fileName: Signup.js
import React, { useState } from 'react';
import './Signup.css'; // Import the external CSS file

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '', // Removed +977 prefix
        password: '',
        confirmPassword: ''
    });

    const [statusMessage, setStatusMessage] = useState(''); // State for status message
    const [statusType, setStatusType] = useState(''); // State for success/error type

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validation for password match
        if (formData.password !== formData.confirmPassword) {
            setStatusMessage('Passwords do not match!');
            setStatusType('error');
            return;
        }

        // Password length validation (minimum 6 characters)
        if (formData.password.length < 6) {
            setStatusMessage('Password must be at least 6 characters long.');
            setStatusType('error');
            return;
        }

        console.log('Form Data:', formData);

        // Sending data to the backend (you can replace the URL with your actual backend URL)
        try {
            const response = await fetch('http://localhost:3000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                setStatusMessage('Signup successful! Please log in.');
                setStatusType('success');
                // You can redirect the user to the login page or clear the form
            } else {
                setStatusMessage(data.message || 'Signup failed! Please try again.');
                setStatusType('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatusMessage('An error occurred. Please try again later.');
            setStatusType('error');
        }
    };

    return (
        <div className="signup-container">
            <h2 className="signup-header">Signup</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <input
                    className="signup-input-fullname"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                />

                <input
                    className="signup-input-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                />

                <input
                    className="signup-input-phone"
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                />

                <input
                    className="signup-input-password"
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                />
                
                <input
                    className="signup-input-password"
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    required
                />

                <button className="signup-button" type="submit">Sign Up</button>
            </form>

            {/* Display success or error message */}
            {statusMessage && (
                <div className={`status-message ${statusType}`}>
                    {statusMessage}
                </div>
            )}
                        <div className="login-link">
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default Signup;
