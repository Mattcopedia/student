

import React, {  useState } from 'react'
import "./br.css" 
import axios from 'axios'; 
import { useHistory } from 'react-router-dom';   
import { createContext, useContext} from "react";

 
export var BaseUrl = "https://asi.qlj.mybluehost.me/v2rakonibackend/public" 

const NameContext = createContext({})

export const LoginProvider = ({children}) => {
 
 
    // eslint-disable-next-line  
    
      const history = useHistory();

     
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [restoken, setResToken] = useState("")
    const [errorMessage, setErrorMessage] = useState('');


 
      const onLogInClicked = async () => {

            try {
        const response = await axios.post(`${BaseUrl}/api/v1/auth/login`,
       
        {
            email: emailValue,
            password: passwordValue,
        });
        console.log(response.data); 
       
        const RealToken = response.data.data.token
        console.log(RealToken)

        localStorage.setItem('customtoken', JSON.stringify(RealToken))
        localStorage.setItem('data', JSON.stringify(response.data.data)) 
      
        setResToken(RealToken)  
        
       history.push("/") 
      } catch (e) {
        console.log(e.message)
        setErrorMessage("Incorrect Email or Password");
    }


    } 


   
    return  (
        <NameContext.Provider value={{ onLogInClicked, emailValue, setEmailValue, passwordValue, setPasswordValue, restoken,errorMessage}}>
            {children} 
          
        </NameContext.Provider>
           
    )
   
 
}

export const useCoins = () => useContext(NameContext)  
 










// import React, { useEffect, useState } from 'react'
// import "./br.css" 
// import axios from 'axios'; 
// import { useHistory } from 'react-router-dom';   
// import { createContext, useContext} from "react";

 
// export var BaseUrl = "https://asi.qlj.mybluehost.me/v2rakonibackend/public" 

// const NameContext = createContext({})

// export const LoginProvider = ({children}) => {
 
 
//     // eslint-disable-next-line  
    
//       const history = useHistory();

     
//     const [emailValue, setEmailValue] = useState('');
//     const [passwordValue, setPasswordValue] = useState('');
//     const [restoken, setResToken] = useState("")

//     const [data, setData] = useState([])
//     const [coursedata, setcourseData] = useState([])
//     const [resultdata, setresultData] = useState([])


//     const [submitdata, setSubmitData] = useState([]);
//      const [response, setResponse] = useState([])
  

//      const [resCourse, setResCourse] = useState(false)
//      const [responseresult, setResponseresult] = useState([])

//      const [resCourseTaken, setResCourseTaken] = useState(false)
//      const [responseresultTaken, setResponseresultTaken] = useState([]) 


//      const [courseInfo, setcourseInfo] = useState([])


//      const [shouldshow, setShouldshow] = useState(false);
  
//      const [isClosed, setIsClosed] = useState(false);

     
  
//      const handleIsClosed = () => {
//       setIsClosed(!isClosed);
//     };


 
//       const onLogInClicked = async () => {
  
//         const response = await axios.post(`${BaseUrl}/api/v1/auth/login`,
      
//         {
//             email: emailValue,
//             password: passwordValue,
//         });
//         console.log(response.data); 
       
//         const RealToken = response.data.data.token
//         console.log(RealToken)

//         localStorage.setItem('customtoken', JSON.stringify(RealToken))
//         localStorage.setItem('data', JSON.stringify(response.data.data)) 
      
//         setResToken(RealToken)  
        
//        history.push("/")  

//     } 


   
//     return  (
//         <NameContext.Provider value={{ onLogInClicked, emailValue, setEmailValue, passwordValue, setPasswordValue, restoken, response, setResponse, shouldshow, setShouldshow,isClosed,handleIsClosed,responseresult,resCourse,responseresultTaken,resCourseTaken, data, submitdata, setSubmitData}}>
//             {children} 
          
//         </NameContext.Provider>
           
//     )
   
 
// }

// export const useCoins = () => useContext(NameContext)  
 








