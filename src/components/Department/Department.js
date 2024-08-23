import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Make sure to have react-router-dom installed
import './Department.css';

const Department = () => {
    const [formData, setFormData] = useState({
        deptName: '',
        building: '',
        budget: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simple validation check
        if (formData.deptName && formData.building && formData.budget) {
            // Add form submission logic here (e.g., API call)
            console.log('Department data submitted:', formData);
            setMessage('Department information submitted successfully!');
        } else {
            setMessage('Please fill out all fields.');
        }
    };

    return (
        <div className="department-container">
            <header className="header">
                <h1>BrightFuture University</h1>
                <p>Your Gateway to Excellence</p>
            </header>
            
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/classroom">Classroom</Link></li>
                    <li><Link to="/department">Department</Link></li>
                    <li><Link to="/course">Course</Link></li>
                    <li><Link to="/instructor">Instructor</Link></li>
                    <li><Link to="/student">Student</Link></li>
                    <li><Link to="/section">Section</Link></li>
                    <li><Link to="/teaches">Teaches</Link></li>
                    <li><Link to="/prereq">Prereq</Link></li>
                    <li><Link to="/advisor">Advisor</Link></li>
                    <li><Link to="/takes">Takes</Link></li>
                    <li><Link to="/timeslot">TimeSlot</Link></li>
                    {/* Add other navigation links as needed */}
                </ul>
            </nav>

            <main className="main-content">
                <div className="department-form">
                    <h2>Department Information</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Department Name:</label>
                            <input
                                type="text"
                                name="deptName"
                                value={formData.deptName}
                                onChange={handleChange}
                                placeholder="Enter department name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Building:</label>
                            <input
                                type="text"
                                name="building"
                                value={formData.building}
                                onChange={handleChange}
                                placeholder="Enter building name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Budget:</label>
                            <input
                                type="number"
                                name="budget"
                                value={formData.budget}
                                onChange={handleChange}
                                placeholder="Enter budget"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>
                        {message && <p className="message">{message}</p>}
                    </form>
                </div>
            </main>

            <footer className="footer">
                <p>&copy; 2024 BrightFuture University. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Department;
