import React, { useState } from 'react';
import './Signup.css'; // Import the external CSS file

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '+977',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add form submission logic here
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
                    pattern="\+977[0-9]{9}"
                    title="Phone number must start with +977 and contain 9 digits after the country code."
                    placeholder="Phone Number (+977)"
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
                    name="Confirmpassword"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    required
                />

                <button className="signup-button" type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
