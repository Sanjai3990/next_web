import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";

function Home() {
  const [activePage, setActivePage] = useState("dashboard");
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const savedStudent = localStorage.getItem("newStudent");
    if (savedStudent) {
      setStudentData(JSON.parse(savedStudent));
    }
  }, []);

  return (
    <div className="home-container">
      <nav className="top-nav">
        <div className="nav-brand">
          <h3>Student Portal</h3>
        </div>
        
        <ul className="nav-menu">
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setActivePage("dashboard"); }}>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setActivePage("courses"); }}>
              Courses
            </a>
          </li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setActivePage("settings"); }}>
              Settings
            </a>
          </li>
          <li className="logout-link">
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </nav>

      <div className="page-content">
        {activePage === "dashboard" && (
          <div>
            <h1>Dashboard</h1>
            {studentData ? (
              <div className="student-profile-card">
                <h2>Student Profile</h2>
                <div className="profile-grid">
                  <p><strong>Name:</strong> {studentData.fullName}</p>
                  <p><strong>Email:</strong> {studentData.email}</p>
                  <p><strong>Age:</strong> {studentData.age}</p>
                  <p><strong>Phone:</strong> {studentData.phone}</p>
                  <p><strong>DOB:</strong> {studentData.dob}</p>
                  <p><strong>Department:</strong> {studentData.department.toUpperCase()}</p>
                  <p><strong>Address:</strong> {studentData.address}</p>
                  <p><strong>Gender:</strong> {studentData.gender}</p>
                </div>
              </div>
            ) : (
              <p>No student data found. Please register first!</p>
            )}
          </div>
        )}

        {activePage === "courses" && (
          <div>
            <h1>Your Courses</h1>
            <p>You are currently enrolled in your department's core curriculum.</p>
          </div>
        )}

        {activePage === "settings" && (
          <div>
            <h1>Account Settings</h1>
            <p>Update your password, email, and notification preferences here.</p>
          </div>
        )}
        
      </div>
    </div>
  );
}
export default Home;