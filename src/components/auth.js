import React, { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);  
  };
  return (
    <div className=""> 
  
    
    {!index ? <Signin /> : <Signup />}
       
    <p className="mx-auto not-italic font-black text-sm underline text-red-600 " onClick={toggleIndex}>
      {!index ? "Are you a new student?  Sign up Here " : "Are you a returning student?  Log In here "}
    </p>       
 
     
 
  </div> 
  );
};

export default Auth; 
