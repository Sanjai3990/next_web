import { useNavigate } from "react-router-dom";
import "../css/Registration.css"; 

function Registration() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    localStorage.setItem("newStudent", JSON.stringify(data)); 
    console.log("Student Data Collected via FormData:", data);
    navigate("/login");
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2>Student Registration</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <input type="text" name="fullName" placeholder="Full Name" required />
          <input type="email" name="email" placeholder="Student Email" required />
          <input type="password" name="password" placeholder="Create Password" required />
          <input type="number" name="age" placeholder="Age" min="16" required />
          <input type="tel" name="phone" placeholder="Phone Number" required />
          <input type="date" name="dob" required />
          
          <select name="department" required>
            <option value="">Select Department</option>
            <option value="cs">Computer Science</option>
            <option value="ee">Electrical Engineering</option>
            <option value="me">Mechanical Engineering</option>
          </select>
          <input type="text" name="address" placeholder="Full Address" required />
          
          <div className="radio-group">
            <label>Gender: </label>
            <input type="radio" name="gender" value="male" required /> Male
            <input type="radio" name="gender" value="female" required /> Female
          </div>
          
          <label className="checkbox-group">
            <input type="checkbox" name="agreement" required /> I agree to the terms
          </label>

          <button type="submit" className="submit-btn">Register Student</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;