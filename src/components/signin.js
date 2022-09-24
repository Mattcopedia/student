
import React, { useRef} from "react";
import { useUserContext } from "../context/userContext"; 
import UnigiImage from '../assets/img/Group 1066.png';



 
const Signin = () => { 

  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };  

  return (
  
    <>

  


    <div className="mx-auto ">
    <div className="md:flex "> 
       
      <div className="">
        <img src={UnigiImage} width={500} height={500}  alt="Login" />  

      </div>

     
      <div className="w-full max-w-xs sm:ml-10  lg:mx-auto  mt-15 md:ml-6 my-auto">    

      <h1 className=" mt-5 mx-auto mb-7 not-italic font-normal text-2xl"> Log In to your Account</h1>
    <form className="bg-white shadow-md   rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Student Email
      </label>

      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" ref={emailRef} placeholder="Username" />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password" >
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password"  ref={psdRef} /> 

      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div className="flex items-center justify-between ">
      <button className="bg-indigo-900 hover:bg-blue-700 text-white font-bold py-2 ml-7 px-20 rounded focus:outline-none focus:shadow-outline"  type="submit"> 
        Sign In 
      </button>

    </div> 

    <div>    
    <p onClick={forgotPasswordHandler}  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 ml-20" >   
        Forgot Password? 
      </p> 

    </div> 
  </form>

       </div>
      </div>
   </div>

  </> 

  );
};

export default Signin;  







