

import React, {useRef, useEffect } from 'react'
import styled from "styled-components";  
import login from "../assets/img/login.PNG"; 
import "./br.css" 
import { Link } from 'react-router-dom';  
import { useCoins } from './LoginContext';

 
export var BaseUrl = "https://asi.qlj.mybluehost.me/v2rakonibackend/public" 

const Login = () => {
 
  const { onLogInClicked, emailValue, setEmailValue, passwordValue, setPasswordValue} = useCoins();
  const focusDiv = useRef();

    useEffect(() => {
  if(focusDiv.current) focusDiv.current.focus(); 
 }, [focusDiv]);

      // eslint-disable-next-line 
      
   
    return  ( 
        <>

            <div class="bg-white">
            <div class="max-w-7xl  grid grid-cols-12 ">
              <div class="col-span-12 md:col-span-12 object-fill lg:col-span-6">

              <img width={1000} src={login} alt="Login" />
                
                      
 

              </div>
              <div class="col-span-12 md:col-span-12 lg:col-span-6 mx-auto"> 

            
              <RootRoot>
                
            <FlexRow>
            
              <Text1 >Are you a new student?</Text1>

                <Link to="/signup"> 
                <Text2>Sign up here</Text2> 
                </Link>
            
                
                    
            </FlexRow>

            <div>
            <FlexColumn>

                <FlexColumn1>
                <Text3>Log in to your account</Text3>

                        
                <FlexColumn2 margin={`0px 0px 14px 0px`}>
                    <Text4>Student Email</Text4>
                     <input ref={focusDiv} className='form'  value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                type="text" id="Student Number"/>  
                 </FlexColumn2>  
                 
                 <FlexColumn2 margin={`0px 0px 14px 0px`}>
                    <Text4>Password</Text4>

                    <input ref={focusDiv} className='form'  type="Password" id="Password" value={passwordValue}
                    onChange={e => setPasswordValue(e.target.value)}
                />     
                </FlexColumn2>
                <Purplebtn  disabled={!emailValue || !passwordValue}
                onClick={onLogInClicked} >Login</Purplebtn> 
            
                
                </FlexColumn1> 
                     
            
                
                {/* <Text1 alignSelf={`inherit`}>Forgot your password ?</Text1>  */} 

                <div>
            <PoweredByRakoniRoot>Powered by Rakoni</PoweredByRakoniRoot>
             </div>
            </FlexColumn> 
            </div>  
            
           </RootRoot>  


              
                </div>
              
            </div>
            </div>
          

          <br />
          <br />
          <br />
       
   

        </> 
           
    )
   
 
}

const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};
export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};


const Purplebtn = styled.button`
  border-color: #787878;
  border-style: solid;
  width: 367px;
 
  
  background-color: #2d0353;
  border-radius: 6px;
  margin: 0px 0px 14px 0px;
  border-width: 0.5px;
  color:#ffffff;  
  margin-top: 10px;
  padding-top:8.5px;
  padding-bottom:8.5px;

`
const Text1 = styled.div`
font-size: 14px;
font-family: Roboto;
line-height: 21px;
color: #505050;
padding-top: 40px;


`;


const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Text4 = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;
`;
const RootRoot = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  

  @media ${devices.mobileL} { 
    margin-left: 10px;  
  }  
 
`;
const FlexRow = styled.div`
    align-self: stretch;
    min-height: 24px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 13px;
    align-items: flex-start;
    margin-right: 8px;

    @media ${devices.mobileL} {
      margin-right: 80px;  
    }  
    
  `;
  const Text2 = styled.div`
    font-size: 14px;
    font-family: Product Sans Black;
    text-decoration: underline;
    line-height: 21.21px;
    color: #df8909;
    padding-top: 40px;
    font-weight: 900;
  `;

const FlexColumn = styled.div`
  max-height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 250px;
  @media ${devices.tablet} {
     
    margin: auto;
    padding-bottom: 100px;
    padding-top: 150px;
    
  } 


`;
const FlexColumn1 = styled.div`
  max-height: 206px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 33px 0px;
`;

const Text3 = styled.div`
  font-size: 24px;
  font-family: Product Sans Medium;
  line-height: 23.28px;
  color: #505050; 
  align-self: flex-start;
  margin: 0px 0px 21px 0px;
  font-weight: 550;
  font-size: 24px;

`; 

const PoweredByRakoniRoot = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px; 
  margin: auto; 
  margin-top: 20px; 

  @media ${devices.laptop} {
    margin-top: 120px; 
    
  }  
  
`;

export default Login;












// import React, {useRef, useEffect, useState } from 'react'
// import styled from "styled-components";  
// import login from "../assets/img/login.PNG"; 
// import "./br.css" 
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
 

// const Login = () => {

//   const focusDiv = useRef();

//     useEffect(() => {
//   if(focusDiv.current) focusDiv.current.focus(); 
//  }, [focusDiv]);
       
// //form validation to disable login button if fields are empty
//     const [emailValue, setEmailValue] = useState('');
//     const [passwordValue, setPasswordValue] = useState('');

//     const history = useHistory();

//     const onLogInClicked = () => {
      
//       history.push('/'); 
//   }


 
//     return  (
//         <>

//             <div class="bg-white">
//             <div class="max-w-7xl  grid grid-cols-12 ">
//               <div class="col-span-12 md:col-span-12 object-fill lg:col-span-6">

//               <img width={1000} src={login} alt="Login" />
                
                         


//               </div>
//               <div class="col-span-12 md:col-span-12 lg:col-span-6 mx-auto"> 

            
//               <RootRoot>
                
//             <FlexRow>
            
//               <Text1 >Are you a new student?</Text1>

//                 <Link to="/signup"> 
//                 <Text2>Sign up here</Text2> 
//                 </Link>
            
                
                    
//             </FlexRow>

//             <div>
//             <FlexColumn>

//                 <FlexColumn1>
//                 <Text3>Log in to your account</Text3>

//                 <form>           
//                 <FlexColumn2 margin={`0px 0px 14px 0px`}>
//                     <Text4>Student Number</Text4>
//                      <input ref={focusDiv} className='form'  value={emailValue}
//                 onChange={e => setEmailValue(e.target.value)}
//                 type="text" id="Student Number"/>  
//                  </FlexColumn2>  
                 
//                  <FlexColumn2 margin={`0px 0px 14px 0px`}>
//                     <Text4>Password</Text4>

//                     <input ref={focusDiv} className='form'  type="Password" id="Password" value={passwordValue}
//                     onChange={e => setPasswordValue(e.target.value)}
//                 />     
//                 </FlexColumn2>
//                 <button className='purplebtn'  disabled={!emailValue || !passwordValue}
//                 onClick={onLogInClicked} >Login</button> 
//                 </form> 
//                 </FlexColumn1> 

                
//                 <Text1 alignSelf={`inherit`}>Forgot your password ?</Text1> 

//                 <div>
//             <PoweredByRakoniRoot>Powered by Rakoni</PoweredByRakoniRoot>
//              </div>
//             </FlexColumn>
//             </div>  
            
//            </RootRoot>  


              
//                 </div>
              
//             </div>
//             </div>
          

//           <br />
//           <br />
//           <br />
     
      
    
//         </> 
           
//     )
 
// }

// const sizes = {
//   mobileS: "320px",
//   mobileM: "375px",
//   mobileL: "425px",
//   tablet: "768px",
//   laptop: "1024px",
//   laptopL: "1440px",
//   desktop: "2560px",
// };
// export const devices = {
//   mobileS: `(min-width: ${sizes.mobileS})`,
//   mobileM: `(min-width: ${sizes.mobileM})`,
//   mobileL: `(max-width: ${sizes.mobileL})`,
//   tablet: `(max-width: ${sizes.tablet})`,
//   laptop: `(min-width: ${sizes.laptop})`,
//   laptopL: `(min-width: ${sizes.laptopL})`,
//   desktop: `(min-width: ${sizes.desktop})`,
// };



// const Text1 = styled.div`
// font-size: 14px;
// font-family: Roboto;
// line-height: 21px;
// color: #505050;
// padding-top: 40px;


// `;


// const FlexColumn2 = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
//   justify-content: center;
//   align-items: center;
//   margin: ${(props) => props.margin};
// `;
// const Text4 = styled.div`
//   font-size: 16px;
//   font-family: Roboto;
//   line-height: 24px;
//   color: #505050;
//   align-self: flex-start;
// `;
// const RootRoot = styled.div`

//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: flex-start;
  

//   @media ${devices.mobileL} { 
//     margin-left: 10px;  
//   }  
 
// `;
// const FlexRow = styled.div`
//     align-self: stretch;
//     min-height: 24px;
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-end;
//     gap: 13px;
//     align-items: flex-start;
//     margin-right: 8px;

//     @media ${devices.mobileL} {
//       margin-right: 80px;  
//     }  
    
//   `;
//   const Text2 = styled.div`
//     font-size: 14px;
//     font-family: Product Sans Black;
//     text-decoration: underline;
//     line-height: 21.21px;
//     color: #df8909;
//     padding-top: 40px;
//     font-weight: 900;
//   `;

// const FlexColumn = styled.div`
//   max-height: 1000px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding-top: 250px;
//   @media ${devices.tablet} {
     
//     margin: auto;
//     padding-bottom: 100px;
//     padding-top: 150px;
    
//   } 


// `;
// const FlexColumn1 = styled.div`
//   max-height: 206px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   margin: 0px 0px 33px 0px;
// `;

// const Text3 = styled.div`
//   font-size: 24px;
//   font-family: Product Sans Medium;
//   line-height: 23.28px;
//   color: #505050; 
//   align-self: flex-start;
//   margin: 0px 0px 21px 0px;
//   font-weight: 550;
//   font-size: 24px;

// `; 

// const PoweredByRakoniRoot = styled.div`
//   font-size: 14px;
//   font-family: Roboto;
//   line-height: 21px; 
//   margin: auto; 
//   margin-top: 20px; 

//   @media ${devices.laptop} {
//     margin-top: 120px; 
    
//   }  
  
// `;



// export default Login;


