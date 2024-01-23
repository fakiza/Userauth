import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../../components/hooks/useAuthContext";

const Signup = ({toggleComponent }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  
  const [confirmPassword,setConfirmPassword] = useState("")
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    try {
      await signUp(email, password)
        toggleComponent();     
        alert('User registered successfully');
    } catch (err) {
      setError(err.message);
    }
  };

 
  return(
    <div className="form-container sign-up">
      
              <form  onSubmit={handleSubmit} >
              {error && <Alert variant="danger">{error}</Alert>}
                  <h2>sign up</h2>
                  
                  <div className="form-group">
                      <input type="email" id="email" required 
                      onChange={(e) => setEmail(e.target.value)}
                      />
                      <i className="fas fa-at"></i>
                      <label for="email">email</label>
                  </div>
                  <div className="form-group">
                      <input type="password" id="password" required
                       pattern="^(?=.*[A-Z])(?=.*\d).{6,}$"  
                       title="Six or more characters and one uppercase letter and one digit required"  
                      onChange={(e) => setPassword(e.target.value)}
                      />
                      <i className="fas fa-lock"></i>
                      <label for="password">password</label>
                  </div>
                  <div className="form-group">
                      <input type="password" id="confirmPassword" required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <i className="fas fa-lock"></i>
                      <label for="confirmPassword">confirm password</label>
                  </div>
                  <button type="submit" className="btn">sign up</button>
                  <div className="link">
                      <p>You already have an account?<a  className="signin-link" onClick={toggleComponent}> sign in</a></p>
                  </div>
              </form>
          </div>
          
  );
};

export default Signup;


