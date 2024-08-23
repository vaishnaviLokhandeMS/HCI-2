import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have react-router-dom installed
import './Instructor.css';

const Instructor = () => {
    return (
        <div className="instructor-container">
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
                <div className="instructor-form">
                    <h2>Add New Instructor</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="id">Instructor ID:</label>
                            <input type="text" id="id" name="id" placeholder="Enter instructor ID" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Enter instructor name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dept-name">Department Name:</label>
                            <input type="text" id="dept-name" name="dept-name" placeholder="Enter department name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="salary">Salary:</label>
                            <input type="number" id="salary" name="salary" placeholder="Enter salary" />
                        </div>
                        <button type="submit" className="submit-btn">Add Instructor</button>
                    </form>
                </div>
            </main>

            <footer className="footer">
                <p>&copy; 2024 BrightFuture University. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Instructor;
