import React, { useRef, useState, useEffect } from "react";
import { useUserContext } from "../context/userContext"; 
import UnigiImage from '../assets/img/Group 1066.png';
import { useHistory } from "react-router-dom"; 

 

const Signup = () => {  


  const [inputValues, setInputValue] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const [validation, setValidation] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //handle change updates 
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value }); 
  }

  const checkValidation = () => {
    let errors = validation;

    // SurName validation
    if (!inputValues.fName.trim()) {
      errors.fName = "Surname is required";
    } else {
      errors.fName = ""; 
    }
    //First Name validation
    if (!inputValues.lName.trim()) {
      errors.lName = "First name is required";  
    } else {
      errors.lName = "";
    }

    // email validation
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!inputValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!inputValues.email.match(emailCond)) {
      errors.email = "Please type a valid email address "; 
    } else {
      errors.email = "";
    }

    //password validation
    const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = inputValues.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (!password.match(cond1)) {
      errors.password = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
      errors.password = "Password must contain at least one capital letter";
    } else if (!password.match(cond3)) {
      errors.password = "Password must contain at least a number";  
    } else {
      errors.password = "";
    }

    //matchPassword validation
    if (!inputValues.confirmPassword) {
      errors.confirmPassword = "Password confirmation is required";
    } else if (inputValues.confirmPassword !== inputValues.password) {
      errors.confirmPassword = "Password does not match confirmation password";
    } else {
      errors.password = "";
    }

    setValidation(errors);
  };

  useEffect(() => { 
    checkValidation();
    //eslint-disable-next-line
  }, [inputValues]);


  const history = useHistory()

  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext(); 


  const onSubmit = (e) => {
    e.preventDefault(); 

    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name); 

        history.push("/createaccount")    

  }; 

  return (
       
    <>
    <div className="mx-auto ">
    <div className="md:flex "> 
       
      <div className="">
        <img src={UnigiImage} width={700} height={700}  alt="Login" />  
      </div> 
      

      <div className="w-full max-w-xs sm:ml-10  lg:mx-auto  mt-15 md:ml-6 my-auto">    

      <h1 className=" mt-5 mx-auto mb-7 not-italic font-normal text-2xl"> Sign up as a new student here</h1>

    <form className="  rounded px-8 pt-1 pb-8 mb-4" id="registrationForm"
      action="/" method="POST" onSubmit={onSubmit}  >
    <div className="mb-4">
      
      <div className="">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Surname   
      </label>

      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  ref={nameRef} 
       placeholder="First Name"
       type="string"
       name="fName"
       id="fName"
       onChange={(e) => handleChange(e)}
       value={inputValues.fName}  /> 
    </div>
            {validation.fName && <p>{validation.fName}</p>}
            {validation.fName && console.log(validation)}


    <label className="block text-gray-700 text-sm font-bold mb-2" for="username"> 
          First name
      </label>

      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Last Name"
              type="string"
              id="lName"
              name="lName"
              onChange={(e) => handleChange(e)}
              value={inputValues.lName} />
      </div>
      {validation.lName && <p>{validation.lName}</p>} 
      

      <label className="block text-gray-700 text-sm font-bold mb-2" for="jamb reg no">
        Jamb Reg No
      </label>

      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Jamb Reg No" type="text"  placeholder="Jamb Reg No" />

      <label className="block text-gray-700 text-sm font-bold  mt-2 mb-2" for="email">
       Email
      </label>

      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  ref={emailRef}  placeholder="email"
       type="email"
       name="email"
       onChange={(e) => handleChange(e)}
       value={inputValues.email}
        />
      {validation.email && <p>{validation.email}</p>}
      
      <label className="block text-gray-700 text-sm font-bold mt-2 mb-2" for="ParentEmail">
       Parent Email 
      </label>

      <input className="shadow appearance-none border rounded w-full mb-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ParentEmail" type="Email"  placeholder="ParentEmail" /> 


    <div className="mb-6">
    <p className="text-black-500 text-xs italic">Enter new password.</p>
      <label className="block text-gray-700 text-sm font-bold mb-2 mt-1" for="password" >
        Password 
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  placeholder="password"
              type="password"
              name="password"
              onChange={(e) => handleChange(e)}
              value={inputValues.password}
              required />
               {validation.password && <p>{validation.password}</p>} 

      <p className="text-black-500 text-xs italic">Re-enter password.</p>
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password" >
        Password 
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" placeholder="confirm password"
              type="password"
              name="confirmPassword"
              onChange={(e) => handleChange(e)}
              value={inputValues.confirmPassword}
              required ref={psdRef}  />
          {validation.confirmPassword && <p>{validation.confirmPassword}</p>}  
     
    </div>

    <div className="flex items-center justify-between ">
      <button className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 ml-7 px-20 rounded focus:outline-none focus:shadow-outline"  type="submit">
        Sign Up
      </button> 

    </div>
   
  </form>

       </div> 

      </div>
   </div>

  </> 


  );
};

export default Signup; 






























