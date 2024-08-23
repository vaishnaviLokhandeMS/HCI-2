import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Classroom.css';

const Classroom = () => {
    const [formData, setFormData] = useState({
        building: '',
        roomNumber: '',
        capacity: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form validation and submission logic here
        console.log('Classroom data submitted:', formData);
    };

    return (
        <div className="homepage">
            {/* Header */}
            <header className="header">
                <h1>BrightFuture University</h1>
                <p>Your Gateway to Excellence</p>
            </header>

            {/* Navigation bar */}
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

            {/* Main Content */}
            <div className="content">
                <div className="classroom-form">
                    <h2>Classroom Information</h2>
                    <form onSubmit={handleSubmit}>
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
                            <label>Room Number:</label>
                            <input
                                type="text"
                                name="roomNumber"
                                value={formData.roomNumber}
                                onChange={handleChange}
                                placeholder="Enter room number"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Capacity:</label>
                            <input
                                type="number"
                                name="capacity"
                                value={formData.capacity}
                                onChange={handleChange}
                                placeholder="Enter capacity"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 BrightFuture University. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Classroom;
