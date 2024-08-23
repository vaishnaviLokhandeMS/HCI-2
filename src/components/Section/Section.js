import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import './Section.css';

const Section = () => {
    return (
        <div className="section-container">
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
                </ul>
            </nav>

            <main className="main-content">
                <div className="section-form">
                    <h2>Add New Section</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="course-id">Course ID:</label>
                            <input type="text" id="course-id" name="course-id" placeholder="Enter course ID" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sec-id">Section ID:</label>
                            <input type="text" id="sec-id" name="sec-id" placeholder="Enter section ID" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="semester">Semester:</label>
                            <input type="text" id="semester" name="semester" placeholder="Enter semester" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="year">Year:</label>
                            <input type="number" id="year" name="year" placeholder="Enter year" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="building">Building:</label>
                            <input type="text" id="building" name="building" placeholder="Enter building" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="room-number">Room Number:</label>
                            <input type="text" id="room-number" name="room-number" placeholder="Enter room number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="time-slot-id">Time Slot ID:</label>
                            <input type="text" id="time-slot-id" name="time-slot-id" placeholder="Enter time slot ID" />
                        </div>
                        <button type="submit" className="submit-btn">Add Section</button>
                    </form>
                </div>
            </main>

            <footer className="footer">
                <p>&copy; 2024 BrightFuture University. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Section;
