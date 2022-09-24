
import React from 'react'
import styled from "styled-components";  
import "../br.css" 
import { Link } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
 

const ProfileEdit = () => {
 
    return  ( 
        <>
        <Sidebar />
        <section class=" mb-4 mx-auto body-font overflow-hidden bg-white"> 
        <div class="container ">
          <div class="flex flex-wrap ">       
              <div class="flex items-center flex-wrap w-full ">

              <RootRoot>
           
            <div >
            <FlexColumn>
            <div className='mb-11'>
            <Element1>
            <FlexColumnaw>
              <Link to="/profile-edit">
                <Text1>Password</Text1>
                </Link>
                <RoyalPurpleRectangle />
              </FlexColumnaw>

            

              <Line src={`https://file.rendit.io/n/6cBDw74bzdqLtcJNebMN.svg`} />
              <FlexColumnaw>
              <Link to="/editpassword">
                <Text1z>Profile</Text1z>
                </Link>
              </FlexColumnaw>
             

              <Line src={`https://file.rendit.io/n/6cBDw74bzdqLtcJNebMN.svg`} />
              <FlexColumnaw>
              <Link to="/editmedia">
                <Text1z>Media</Text1z>
                </Link>
              </FlexColumnaw>
              
            </Element1> 
            </div>
                           

                <FlexColumn1>
                

                <form>           
                <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                <Text4 htmlFor="First Name"> First name</Text4>        
                 <input className='form' placeholder='Ayomide joy' type="text" id="First Name"/>  
                 </FlexColumn2> 
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="Last name"> Last name</Text4>        
                 <input className='form' placeholder='Ayomide' type="text" id="Last name"/>  
                 </FlexColumn2> 
                
                 <FlexColumn2 margin={`0px 0px 10px 0px`}>  

                 <Text4 htmlFor="email"> Email</Text4>        
                 <input className='form' placeholder='akinzzz@zzz.com' type="email" id="email"/>  
                 </FlexColumn2> 
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="phonenumber"> Phone number</Text4>        
                 <input className='form' placeholder='08064540969' type="text" id="phonenumber"/>  
                 </FlexColumn2>  

                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="address"> Address</Text4>        
                 <input className='form' placeholder='Imam saka str,Lagos' type="text" id="address"/>  
                 </FlexColumn2>  

                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                    <Text4 htmlFor="NIM"> NIM</Text4>         
                    <input className='form' placeholder='NIM' type="text" id="NIM"/>   
                    </FlexColumn2> 
                 
                <button className='purplebtn' type='submit'>Save</button> 
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
    
      </section>

       <div> 
       
       </div>
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


const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Text4 = styled.label`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;
`;
const RootRoot = styled.div`


  min-width: 424px;
  min-height: 549px;    
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
  background-color: #FAFAFA;
  margin-bottom: 170px; 

  @media ${devices.mobileL} { 
    min-width: 100px; 
    margin: 0px;
    overflow: hidden; 
   }  

`;








const FlexColumn = styled.div`
  min-height: 600px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding-right:60px; 
  padding-left:60px; 


  @media ${devices.tablet} {
    margin-left: 90px;
    height: 319px;
    padding-left:27px;  
    padding-right:40px; 
    margin-left:10px
  }    


  @media ${devices.mobileL} { 
    
    margin-left: 0px;
    height: 319px;
    padding-left:0px;  
    padding-right:0px; 
   
  }  

`;
const FlexColumn1 = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 5px 0px;

  @media ${devices.mobileL} { 
    margin: 0px 0px 0px 0px;
    margin-right: 145px; 

  } 
`; 





const Element1 = styled.div`
  width: 484px;
  height: 31px;
  display: flex;
  flex-direction: row; 
  margin-top:10px;
`;
const FlexColumnaw = styled.div`
  
  position: static;
  gap: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Text1 = styled.div`
 
  margin: 0px 2px 0px 0px;
  color: #2d0353;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
`;

const Text1z = styled.div`
  align-self: flex-start;
  margin: 0px 2px 0px 0px;
  color: #2d0353;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  padding-bottom:10px; 
`;

const RoyalPurpleRectangle = styled.div`
  width: 90px;
  height: 3px;
  border-radius: 8px 8px 0px 0px;
  background-color: #2d0353;
`;
const Line = styled.img`
  width: 30px;
  height: 0.5px;
  top: 30.5px;
  position: static;
`;



export default ProfileEdit; 


