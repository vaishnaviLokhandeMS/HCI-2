import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Classroom from './components/Classroom/Classroom';
import Department from './components/Department/Department';
import Course from './components/Course/Course';
import Instructor from './components/Instructor/Instructor';
import Student from './components/Student/Student';
import Section from './components/Section/Section';
import Teaches from './components/Teaches/Teaches';
import Prereq from './components/Prereq/Prereq';
import Advisor from './components/Advisor/Advisor';
import Takes from './components/Takes/Takes';
import TimeSlot from './components/TimeSlot/TimeSlot';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/classroom" element={<Classroom />} />
                <Route path="/department" element={<Department />} />
                <Route path="/course" element={<Course />} />
                <Route path="/instructor" element={<Instructor />} />
                <Route path="/student" element={<Student />} />
                <Route path="/section" element={<Section />} />
                <Route path="/teaches" element={<Teaches />} />
                <Route path="/prereq" element={<Prereq />} />
                <Route path="/advisor" element={<Advisor />} />
                <Route path="/takes" element={<Takes />} />
                <Route path="/timeslot" element={<TimeSlot />} />
            </Routes>
        </Router>
    );
};

export default App;
