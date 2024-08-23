import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
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

            <main className="content">
                <section className="welcome">
                    <h2>Welcome to BrightFuture University</h2>
                    <p>
                        We are committed to providing the best education and resources to help our students excel. Explore the courses, connect with faculty, and manage your academic journey with ease.
                    </p>
                </section>
                <section className="features">
                    <div className="feature-box">
                        <h3>Manage Courses</h3>
                        <p>Enroll, drop, and track progress in all your courses.</p>
                        <img src="https://via.placeholder.com/150" alt="Manage Courses" className="feature-image"/>
                    </div>
                    <div className="feature-box">
                        <h3>Student Portal</h3>
                        <p>Access your academic records, schedule, and more.</p>
                        <img src="https://via.placeholder.com/150" alt="Student Portal" className="feature-image"/>
                    </div>
                    <div className="feature-box">
                        <h3>Faculty Access</h3>
                        <p>Communicate with professors and manage your teaching activities.</p>
                        <img src="https://via.placeholder.com/150" alt="Faculty Access" className="feature-image"/>
                    </div>
                    <div className="feature-box">
                        <h3>Campus Events</h3>
                        <p>Stay updated with the latest events and activities on campus.</p>
                        <img src="https://via.placeholder.com/150" alt="Campus Events" className="feature-image"/>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2024 BrightFuture University. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
