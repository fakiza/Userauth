import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../../components/hooks/useAuthContext";

const Login = ({toggleComponent}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    // <>
    //   <div className=" position-relative d-flex justify-content-center align-items-center vh-100 ">
    //   <div className="w-75 auth-container">
    //     <div className="row my-4   shadow-lg ">  
    //       {/* <div className="col-md-5 p-0 ">
    //         <img src="images/banner_2.jpg" alt="login banner" className="img-responsive imagebanner " />
    //       </div> */}
    //       <div className="col p-0">                                                                          
    //       <div className="p-4 ">
    //     <h2 className="mb-3 text-center text-capitalize">sign In</h2>

    //     {error && <Alert variant="danger">{error}</Alert>}

    //     <div className="my-4 d-flex justify-content-center">
    //       <GoogleButton
    //         className="g-btn"
    //         type="dark"
    //         onClick={handleGoogleSignIn}
    //       />
    //     </div>
    //     {/* <div className="text-center my-4 text-uppercase">--or--</div> */}
    //     <Form onSubmit={handleSubmit}>
          
    //       <Form.Group className="mb-4" controlId="formBasicEmail">
    //         <Form.Control
    //           type="email"
    //           placeholder="Email address"
    //           autoComplete="off"
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </Form.Group>

    //       <Form.Group className="mb-4" controlId="formBasicPassword">
    //         <Form.Control
    //           type="password"
    //           placeholder="Password"
    //           autoComplete="off"
    //             onChange={(e) => setPassword(e.target.value)}
    //         />
    //       </Form.Group>

    //       <div className="d-grid gap-2">
    //         <Button variant="primary" type="Submit">
    //           Log In
    //         </Button>
    //       </div>
    //     </Form>
    //     <hr />
        
      
    //   <div className="p-4 box mt-3 text-center">
    //     Don't have an account? <Link >Sign up</Link>
    //   </div>
    //   </div>
    //       </div>
    //     </div>
        
    //   </div>
    //   </div>
    // </>
    <>
    
    <div className="form-container sign-in">
    
        
        <form onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
            <h2>login</h2>
            <div className="form-group">
                <input type="email" id="email" required
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                />
                 <i className="fas fa-at"></i>
                <label for="email">Email</label>
            </div>
            <div className="form-group">
                <input type="password" id="password" required
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                />
                <i className="fas fa-lock"></i>
                <label for="password">password</label>
            </div>
            <div className="forgot-pass">
                <a href="#">forgot password?</a>
            </div>
            <button type="submit" className="btn">login</button>

            <div className="my-4 d-flex justify-content-center">
              <GoogleButton
                  className="g-btn"
                  type="dark"
                  onClick={handleGoogleSignIn}
                />
            </div>

            <div className="link">
                <p>Don't have an account?<a onClick={toggleComponent} className="signup-link"> sign up</a></p>
            </div>
            
        </form>

    </div>
    </>
  );

  

};

export default Login;