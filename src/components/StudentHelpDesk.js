import React, {useRef} from "react";
import styled from "styled-components";
import "./br.css" 

import ticket from "../assets/img/submit a ticket.PNG";
import Sidebar from "./Sidebar";



export default function StudentHelpDesk() {

  const focusDiv = useRef();

    
  if(focusDiv.current) {
    focusDiv.current.focus(); 
  }
 

  return (
    <>
    <Sidebar />
    <div className="grid grid-cols-5 py-4 mb-16 mx-4 resultcolor bg-gray-100 ">
       <div className=" col-span-4"> 
       <FlexColumnRoot>
      <Paragraph4> Student Help <br className="responsivemodal"></br> Desk</Paragraph4> 
     </FlexColumnRoot>
         
       </div>
       <div className=" bg-gray-100">   
       <ImageRoot src={`https://file.rendit.io/n/4LVVYAe4zpARayxk4t17.svg`}  /> 
       </div>  
     
    </div> 




    <StudentRoot>

      <div className="flex justify-center">
        <FlexColumn>

          <div>
            <Paragraph>
              PLEASE FOLLOW THIS REGISTRATION STEPS <br className="responsivehelp"></br>  FOR THE CURRENT SEMESTER
            </Paragraph>
          </div>

          <div> 
                
                <FlexRow10 >
                  <div>
             <Text17>  <Image18
                src={`https://file.rendit.io/n/m93ncopMt4NJttz1VKUu.svg`}
              /> STEP 1</Text17>
              </div> 

              <FlexColumn1 gap={`5px`}>
                
                <Paragraph1 > 
                  REMITA: approach any of the Banks for  school <br className="responsivehelp"></br> fees,mention   you
                  want to pay your school fees <br className="responsivehelp"></br> (exclusive bank charges)   on 
                  REMITA Make sure <br className="responsivehelp"></br> the payer name is in same order as your  
                  fullname <br className="responsivehelp"></br> on simportal. This step will grant access to your <br className="responsivehelp"></br> 
                  course  registration .You may now proceed to <br className="responsivehelp"></br>  course  
                  registration.
                </Paragraph1>
              </FlexColumn1>
            </FlexRow10>



            <FlexRow10 >
                  <div>
             <Text17>  <Image18
                src={`https://file.rendit.io/n/m93ncopMt4NJttz1VKUu.svg`}
              /> STEP 2</Text17>
              </div>
              <FlexColumn1 gap={`5px`}>
                
                <Paragraph1 >
                  Click on SELECTED COURSE via which you will  <br className="responsivehelp"></br> select the course 
                  you are taking for the semester, <br className="responsivehelp"></br> then click on Transfer to
                  course form button at  <br className="responsivehelp"></br> the end of the list 
                </Paragraph1>
              </FlexColumn1>
            </FlexRow10>


            <FlexRow10 >
                  <div>
             <Text17>  <Image18
                src={`https://file.rendit.io/n/m93ncopMt4NJttz1VKUu.svg`}
              /> STEP 3</Text17>
              </div>

              <FlexColumn1 gap={`5px`}>
                
                <Paragraph1 >
                  Click on course form to view your earlier selected  <br className="responsivehelp"></br> course:Preview for repetitions.
                  When satisfied  <br className="responsivehelp"></br> with your selection,click on the FINAL SUBMIT  <br className="responsivehelp"></br>
                  button to submit your course form
                </Paragraph1>
              </FlexColumn1>
            </FlexRow10>

            <FlexRow10 >
                  <div>
             <Text17>  <Image18
                src={`https://file.rendit.io/n/m93ncopMt4NJttz1VKUu.svg`}
              /> STEP 4</Text17>
              </div>

              <FlexColumn1 gap={`5px`}>
                <Paragraph2 >
                Click on PRINT COURSEFORM on the menu to  <br className="responsivehelp"></br> print a copy of the
                  course form <br className="responsivehelp"></br> (or click on the pdf version to gat a copy).
                </Paragraph2>
              </FlexColumn1>
            </FlexRow10>
            
          

            
          </div>

          <FlexRow14>
          </FlexRow14>
        </FlexColumn>
      </div>
    </StudentRoot>

    <div class="grid grid-cols-12 py-4 mx-4 ">
       <div class=" flex justify-center col-span-12 md:col-span-12 lg:col-span-6 pb-3"> 
        
        <img
                  width={400}
                  height={400}
                  src={ticket}
                  alt="Submit a ticket"
                /> 
       
       </div>

       <div class=" col-span-12 md:col-span-6 lg:col-span-6 flex justify-center">   
            
       
          <form className="bg-gray-100 px-7 pt-5">
         
          <Paragraphticket>
              Submit a Ticket
            </Paragraphticket>
          <Texto>Full name</Texto>
          <Input ref={focusDiv} type="text"   /> 


          <div className="flex flex-col lg:flex-row">
            
            <div>
            <Texto>Email</Texto>
          <Inputemail ref={focusDiv} type="text"  /> 
            </div>
            <div>
           
            <Textn>Phone number</Textn> 
          <Inputpn ref={focusDiv} type="text"  /> 
            </div>
          </div>

          <Texto>Message</Texto>
          <div>  
            <Textarea ref={focusDiv}  rows="4" cols="47"  id="message"/>  
            </div>

              <div className ='flex justify-end'> 
              <RectangleRoot>
      <Text1> <button> Submit </button> </Text1> 
         </RectangleRoot>
          </div>

          </form>
       </div>  
     
    </div> 
    </>
  );
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
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
};

const FlexColumnRoot = styled.div`
    
flex-direction: column;
gap: 15px;

`;


const Paragraph4 = styled.div`
font-size: 36px;
font-family: Product Sans Medium;
line-height: 34.92px;
color: #2d0353;
text-align: left;
padding-left: 91px;
font-weight: bold;

@media ${devices.mobileL} { 
  
  padding-left: 33px;
} 
`; 

const ImageRoot = styled.img`
width: 100px;
height: 100px;
`;


const RectangleRoot = styled.div`
  width: 156px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 0px;
  border-radius: 6px;
  background-color: #2d0353;
`;
const Text1 = styled.div`
  color: #ffffff;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
`;
const Textarea = styled.textarea`
  border-style: solid;
  border-color: #b3b1b1;
  width: 420px;

  mix-blend-mode: normal;
  background-color: #ffffff;
  border-radius: 6px;
  border-width: 0.5px; 
  margin-bottom: 20px;

  :focus {
    padding-left: 10px;
  } 

    @media ${devices.tablet} {
      width: 280px;
    }

@media ${devices.mobileL} {
      width: 280px;
    }
`;


const Input = styled.input.attrs({ type: 'text'})`
  border-style: solid;
  border-color: #b3b1b1;
  width: 420px;
  height: 44px; 
  mix-blend-mode: normal;
  background-color: #ffffff;
  border-radius: 6px;
  border-width: 0.5px; 
  margin-bottom: 20px;

  :focus {
    padding-left: 10px;
  } 

    @media ${devices.tablet} {
      width: 280px;
    }

@media ${devices.mobileL} {
      width: 280px;
    }
`;




const Inputemail = styled.input`
  border-style: solid;
  border-color: #b3b1b1;
  width: 250px;
  height: 44px;
  mix-blend-mode: normal;
  background-color: #ffffff;
  border-radius: 6px;
  border-width: 0.5px; 
  margin-bottom: 20px;

  :focus {
    padding-left: 10px;
  } 

    @media ${devices.tablet} {
      width: 280px;
    }
`;

const Inputpn = styled.input`
  border-style: solid;
  border-color: #b3b1b1;
  width: 150px;
  height: 44px;
  mix-blend-mode: normal;
  background-color: #ffffff;
  border-radius: 6px;
  border-width: 0.5px; 
  margin-bottom: 20px;
  margin-left: 20px;

  :focus {
    padding-left: 10px;
  }  

    @media ${devices.tablet} {
      width: 280px;
      margin-left: 2px;
    }
`; 

const Texto = styled.div`
  mix-blend-mode: normal;
  font-size: 21px;
  font-family: Roboto;
  line-height: 21px;
  color: #505050;
  align-self: flex-start;
  padding-bottom: 10px;
`;

const Textn = styled.div`
  mix-blend-mode: normal;
  font-size: 21px;
  font-family: Roboto;
  line-height: 21px;
  color: #505050;
  align-self: flex-start;
  padding-bottom: 10px;
  padding-left: 20px; 

  @media ${devices.tablet} {
     padding-left: 0px; 
    }
`;


 


const FlexRow10 = styled.div`
  display: flex;
  flex-direction: column;
 
  justify-content: center;
 
  margin: 0px 0px 20px 63px; 

  @media ${devices.tablet} {
    margin: 0px 0px 20px 12px; 
  }

`;
const Image18 = styled.img`
  width: 16px;
  height: 16px;
 
`;
const FlexColumn1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: start;
  }

  gap: ${(props) => props.gap};
`;
const Paragraph1 = styled.div`
  font-size:14px;
  font-family: Roboto;
  line-height: 21px; 
  text-align: left; 
  

  width: ${(props) => props.width};
  @media ${devices.tablet} {
    font-size: 12px;
  }
  display: inline-block; 
`;

const Paragraph2 = styled.div`
  font-size:14px;
  font-family: Roboto;
  line-height: 21px; 
  text-align: left; 
  padding-lefi:0px;
  padding-right:0px; 
  width: ${(props) => props.width};
  @media ${devices.tablet} {
    font-size: 12px;
  }
  display: inline-block; 
`;
 

const StudentRoot = styled.div`
 
  background-color: #ffffff;
  display: flex;
  overflow: hidden;
  flex-direction: row; 
  justify-content: center; 


`;
const FlexColumn = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  align-items: flex-start;
`;

const Paragraph = styled.div`
 
  font-size: 18px;
  font-family: Product Sans Black;
  line-height: 17.46px;
  color: #2d0353;
  margin: 0px 0px 31px 63px;
  font-weight: bold; 
  @media ${devices.tablet} {
    margin: 0px 0px 31px 8px;
   
  }
  @media ${devices.mobileL} {
    font-size: 12px;
  }
`;

const Paragraphticket = styled.div`
 
  font-size: 27px;
  font-family: Product Sans Black;
  line-height: 17.46px;
  color: #2d0353;
  font-weight: bold; 
  padding-bottom:10px; 
  @media ${devices.tablet} {
    font-size: 18px; 
  }
`;

const Text17 = styled.div`

  font-size: 12px;
  font-family: Product Sans Black;
  line-height: 18.18px;
  color: #219653;
  display: flex;
  flex-direction: row; 
  gap: 30px; 
  align-self: flex-start;
  margin: 0px 0px 0px 1.17px;

`;
const FlexRow14 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 100px 0px 70px;
  
`;





