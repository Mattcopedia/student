
import React, {useRef, useEffect } from 'react'
import styled from "styled-components";  
import login from "../assets/img/login.PNG"; 
import "./br.css" 
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";  
 

const CreateAccountS = () => {

  const focusDiv = useRef();

    useEffect(() => {
  if(focusDiv.current) focusDiv.current.focus();  
 }, [focusDiv]);

 const history = useHistory()

const onSubmit = (e) => {
  e.preventDefault(); 
      history.push("/")     
}; 

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
            
              <Text1 ></Text1>

                <Link to="/login"> 
                <Text2></Text2> 
                </Link>
            
                
                    
            </FlexRow>

            <div>
            <FlexColumn>

                 <FlexColumn1>
                 <Text3>Create your student account</Text3>

                 <form id="createAccount"  onSubmit={onSubmit}>           
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="nationality"> Nationality</Text4> 

                   <div>
                   <select ref={focusDiv} id='nationality' className="form" required> 
                     <option value="volvo" selected>Nigerian</option>
                     <option value="saab">South African</option> 
                     <option value="mercedes">Ghanian</option>
                     <option value="audi">Other Countries</option>  
                     </select>
                 </div>

                   </FlexColumn2> 
                  <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                  <Text4 htmlFor="address"> Address</Text4>        
                  <input ref={focusDiv} className='form' placeholder='k2 mile 12 Ikeja Lagos' type="text" id="address" required/>  
                  </FlexColumn2> 
                  <FlexColumn2 margin={`0px 0px 10px 0px`}> 

               

                  <Text4 htmlFor="state of origin"> State of Origin</Text4> 
                  <div>
                  <select ref={focusDiv} id="state of origin" className="form " required>         
                  <option  value="Lagos" selected>Lagos</option>  
                  <option value="Abuja">Abuja</option>
                  <option value="Kaduna">kaduna</option>
                  <option value="Other states">Other states</option>    
               </select>   
               </div> 
                  </FlexColumn2> 
                  <FlexColumn2 margin={`0px 0px 10px 0px`}>  

                  <Text4 htmlFor="religion"> Religion</Text4>         
                  <div>
                   <select ref={focusDiv} id="religion" className="form" required> 
                     <option value="christianity">Christianity</option>
                     <option value="Islam">Islam</option>
                     <option value="Others">Others</option>
                     </select>
                 </div>

                  </FlexColumn2> 
                  <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                  <Text4 htmlFor="info">Parent/guardian/sponsor phone number</Text4>        
                  <input ref={focusDiv} className='form' placeholder='080453454xxx' type="text" id="info" required />  
                  </FlexColumn2>   
                 
                 <button className='purplebtn' type='submit'>Submit</button>  
                 </form> 
              
                 </FlexColumn1> 
                 <div>
           
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
    padding-bottom: 120px;
    padding-top: 250px;
    
  } 

  @media ${devices.mobileL} {
    padding-right: 10px;  
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








export default CreateAccountS;





