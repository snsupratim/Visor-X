import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [username, setUsername] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add your signup logic here (e.g., API call, validation)
    console.log({
      name,
      contactNo,
      username,
      dateOfBirth,
      gender,
      email,
      password,
    });
    // Reset form fields after submission if needed
    setName("");
    setContactNo("");
    setUsername("");
    setDateOfBirth("");
    setGender("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSocialSignup = (platform) => {
    console.log(`Signing up with ${platform}`);
    // Add your social signup logic here (e.g., OAuth integration)
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-grid">
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="contactNo">Contact No</label>
            <input
              type="text"
              id="contactNo"
              name="contactNo"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label>Gender</label>
            <div className="gender-options">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={gender === "Other"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Other
              </label>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit">Sign Up</button>

        <div className="social-signup">
          <p>Or sign up with:</p>
          <button
            type="button"
            className="social-button google"
            onClick={() => handleSocialSignup("Google")}
          >
            Google
          </button>
          <button
            type="button"
            className="social-button github"
            onClick={() => handleSocialSignup("GitHub")}
          >
            GitHub
          </button>
          <button
            type="button"
            className="social-button facebook"
            onClick={() => handleSocialSignup("Facebook")}
          >
            Facebook
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
