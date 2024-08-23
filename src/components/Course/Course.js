import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Course.css';

const Course = () => {
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

            {/* Course Form */}
            <div className="course-form">
                <h2>Add New Course</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="course-id">Course ID:</label>
                        <input type="text" id="course-id" name="course-id" placeholder="Enter course ID" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="title" name="title" placeholder="Enter course title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dept-name">Department Name:</label>
                        <input type="text" id="dept-name" name="dept-name" placeholder="Enter department name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="credits">Credits:</label>
                        <input type="number" id="credits" name="credits" placeholder="Enter credits" />
                    </div>
                    <button type="submit" className="submit-btn">Add Course</button>
                </form>
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 BrightFuture University. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Course;
