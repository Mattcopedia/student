

import React, {useRef, useEffect, useState } from 'react'
import styled from "styled-components";  
import login from "../assets/img/login.PNG"; 
import "./br.css" 
import { useHistory } from "react-router-dom"; 
 

const CreateLoginPassword = () => {
  const [shouldshow, setShouldshow] = useState(false);


  const focusDiv = useRef();

    useEffect(() => {
  if(focusDiv.current) focusDiv.current.focus(); 
 }, [focusDiv]);

  useEffect(() => { 
  setTimeout(() => {
      setShouldshow(true);
  }, 3000);

 }, []); 


//Password Validation

 const [inputValues, setInputValue] = useState({
  password: "",
  confirmPassword: "",
});


const [validation, setValidation] = useState({ 
  
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

const onSubmit = (e) => {
  e.preventDefault(); 
      history.push("/createaccount")     
}; 

 
    return  (
        <>
     
     { shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <ShamrockFlexRow>
              <Paragraph>
          Your email akinshaywai@gmail.com has been verified{" "}
           </Paragraph>
            <Image2 src={`https://file.rendit.io/n/KxmCRDnZknrDYMUeD301.svg`} />
            </ShamrockFlexRow>
     
            </ModalBody>
        </ModalBackground>
      )}




            <div class="bg-white">
            <div class="max-w-7xl  grid grid-cols-12 ">
              <div class="col-span-12 md:col-span-12 object-fill lg:col-span-6">

              <img width={1000} src={login} alt="Login" />
                
                         


              </div>
              <div class="col-span-12 md:col-span-12 lg:col-span-6 mx-auto"> 

            
              <RootRoot>
                
            <FlexRow>
            
              <Text1> </Text1>

              
                <Text2></Text2> 
               
            
                
                    
            </FlexRow>

            <div>
            <FlexColumn>

            <FlexColumn1>
            <Text3>Create a new login password</Text3>

            <form id="createPassword"  onSubmit={onSubmit}>            

             <FlexColumn2 margin={`0px 0px 14px 0px`}>
                <Text4 htmlFor="password">Enter your new password</Text4> 

                <input ref={focusDiv} className='form'  id="Password"
                type="password"
                name="password"
                onChange={(e) => handleChange(e)}
                value={inputValues.password} required
                />     
                {validation.password && <p>{validation.password}</p>} 
            </FlexColumn2>

            <FlexColumn2 margin={`0px 0px 14px 0px`}> 
                <Text4 htmlFor="ConfirmPassword">Re-enter password</Text4>

                <input ref={focusDiv} className='form'  type="password"
              name="confirmPassword"
              onChange={(e) => handleChange(e)}
              value={inputValues.confirmPassword} />   
              {validation.confirmPassword && <p>{validation.confirmPassword}</p>}    

            </FlexColumn2>
            <button className='purplebtn' type='submit'>Log in</button> 
            </form> 
            </FlexColumn1> 
               
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
  margin-left: 20px; 
 

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

const ModalBackground = styled.div`
   position:fixed;
   z-index: 1;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   overflow: auto;
   background-color: rgba(0,0,0,0.5);
`

const ModalBody = styled.div`
   
   margin: 10% auto;
   padding: 20px; 
   width: 50%;
   @media ${devices.tablet} {
      width: 90%;   
    } 
`
const ShamrockFlexRow = styled.div`
  border-style: solid;
  border-color: #6fcf97;
  width: 336px;
  height: 57px;
  mix-blend-mode: normal;
  background-color: rgba(111, 207, 151, 0.11);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 32px;
  align-items: flex-start; 
  border-radius: 6px;
  padding: 10px 15px 13px 15px;
  border-width: 1px;
`;
const Paragraph = styled.div`
  text-align: center;
  mix-blend-mode: normal;
  width: 250px;
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  color: #27ae60;
  align-self: flex-end;
  white-space: pre-wrap;
`;
const Image2 = styled.img`
  width: 16px;
  height: 16px;
  mix-blend-mode: normal;
`;



export default CreateLoginPassword;

















