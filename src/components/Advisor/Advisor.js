import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Advisor.css';

const Advisor = () => {
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
                </ul>
            </nav>

            {/* Advisor Form */}
            <div className="advisor-form">
                <h2>Add Advisor Assignment</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="s-id">Student ID:</label>
                        <input type="text" id="s-id" name="s-id" placeholder="Enter student ID" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="i-id">Instructor ID:</label>
                        <input type="text" id="i-id" name="i-id" placeholder="Enter instructor ID" />
                    </div>
                    <button type="submit" className="submit-btn">Add Advisor</button>
                </form>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 BrightFuture University. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Advisor;
