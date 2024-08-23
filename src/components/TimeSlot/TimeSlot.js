import React, { useState } from 'react';
import './TimeSlot.css';
import { Link } from 'react-router-dom'; // Make sure to import Link if you are using React Router

const TimeSlot = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <div className="student-container">
            {/* Header */}
            <header className="header">
                <h1>BrightFuture University</h1>
                <p>Your Gateway to Excellence</p>
            </header>

            {/* Navigation bar */}
            <nav className="navbar">
                <div className="navbar-toggle" onClick={toggleMenu}>
                    ☰ Menu
                </div>
                <div className={`navbar-menu ${isMenuOpen ? 'show' : ''}`}>
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
                    </ul>
                </div>
            </nav>

            {/* Main Content */}
            <main className="main-content">
                <div className="time-slot-form">
                    <h2>Add Time Slot</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="time-slot-id">Time Slot ID:</label>
                            <input type="text" id="time-slot-id" name="time-slot-id" placeholder="Enter time slot ID" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="day">Day:</label>
                            <input type="text" id="day" name="day" placeholder="Enter day" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="start-time">Start Time:</label>
                            <input type="time" id="start-time" name="start-time" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="end-time">End Time:</label>
                            <input type="time" id="end-time" name="end-time" />
                        </div>
                        <button type="submit" className="submit-btn">Add Time Slot</button>
                    </form>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 BrightFuture University. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default TimeSlot;
