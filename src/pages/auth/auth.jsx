// Authentication.js
import React, { useState } from 'react';
// import Login from '../LogIn';
// import Signup from '../SignUp';
import "../../style.css"
import Signup from '../SignUp';
import Login from '../LogIn';

const Auth = () => {
    const [flip,setFlip] = useState(true);
    const toggleComponent = ()=>{ 
        setFlip(!flip);
        
    }

  return (
    <div className={`wrapper ${flip? "animated-signin" :"animated-signup"}`}>
      <div >
        <div>
         <Signup  toggleComponent={toggleComponent} />
         <Login toggleComponent={toggleComponent} />
        </div>
       
      </div>
    </div>
  );
};

export default Auth;
