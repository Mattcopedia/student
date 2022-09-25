import React, { useState, useEffect } from 'react';
import "../br.css" 
import styled from "styled-components";
import RegistrationHeader from 'components/ResultsComponents/RegistrationHeader';
import {Link } from 'react-router-dom';
import axios from 'axios'; 
import { BaseUrl } from 'components/Login';

 
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
     background-color: white;
     margin: 10% auto;
     padding: 20px; 
     width: 50%;
     @media ${devices.tablet} {
        width: 90%;   
      } 
`
 


const CourseReg = () => {

  const [resCourseTaken, setResCourseTaken] = useState(false)
  const [responseresultTaken, setResponseresultTaken] = useState([])
  // const [data, setData] = useState([])
  const [shouldshow, setShouldshow] = useState(false);

  const dataname = JSON.parse(localStorage.getItem('data'));
  const data = dataname

  useEffect(() => {
    const fetchInfo = async () => {
    
      // const dataname = JSON.parse(localStorage.getItem('data'));
      // if (dataname) {
      //  setData(dataname);   
      // }
    
     const headers = {
       accept: 'application/json',
       Authorization: `Bearer ${data.token}`  
   }
     
      try { 
        const response = await axios.post(`${BaseUrl}/api/v1/mycourses`, {
         school: data.school,
         programme: data.programme,
     },{ 
         headers: headers
     }); 
        console.log(response.data); 
        setResponseresultTaken(response.data)
        
        localStorage.setItem('courseData', JSON.stringify(response.data.data)) 
        setResCourseTaken(true)
       
      } catch (error) {
        console.error(error.message);   
      }
    

    }

    fetchInfo();
  }, [data.school,data.programme,data.token]);  


  return (
    <>
      { shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
                <WhiteFlexColumnRoot>
                <FlexColumn gap={`21px`}>
                    <FlexColumn gap={`9px`}>
                    <Text1>Note</Text1>
                    <Paragraph>
                      
                        The selected courses have been updated <br className="responsivemodal"></br> on your course form. Please check <br className="responsivemodal"></br> critically for course duplication
                    </Paragraph>
                    </FlexColumn>
                    <FlexRow>
                    <WhiteText onClick={() => setShouldshow(false)}>Cancel</WhiteText>
                    <Link to="/submit-course-form">
                    <RoyalPurpleText onClick={() => setShouldshow(false)}>Continue</RoyalPurpleText>
                    </Link>
                    </FlexRow>
                </FlexColumn>
                </WhiteFlexColumnRoot>
    
            </ModalBody>
        </ModalBackground>
      )}


    <div className='bg-white'>
        <RegistrationHeader />
     
        <br />
        <div className='ml-4'>
      
        <YourResultRoot>Select Course</YourResultRoot>  
     
       
        </div>
       

        
         <div style={{overflowX: "auto"}} className='bg-white mx-3 '> 
       
         <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
     <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
        <th style={{width:"5%"}}></th>
         <th style={{width:"11.8%",paddingLeft:"10px"}}>Course Code</th>
         <th style={{width:"11.8%"}}>Department</th> 
         <th style={{width:"30%"}}>Course Title</th>
         <th style={{width:"9.3%"}}>Unit</th>
         <th style={{width:"9.3%"}}>Status</th>
         <th style={{width:"9.3%"}}>Semester</th> 
         <th style={{width:"9.3%"}}>Level</th>    
         
     </tr> 
   {  resCourseTaken ?  responseresultTaken.data.courses.map((course) => (
   
     <tr key={course.id} style={{height:"70px"}}> 

       <td> <input style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse"  />
       </td>    
         <td style={{paddingLeft:"10px"}}><label for="firstcourse"> <Text3>{course.courseCode}</Text3></label></td>
         <td ><label for="firstcourse"><Text3>{course.programme}</Text3></label></td>
         <td><label for="firstcourse"><Text3>{course.courseTitle}</Text3></label></td>
         <td><label for="firstcourse"><Text3>{course.courseUnit}</Text3></label></td>
         <td><label for="firstcourse"><Text3>C</Text3></label></td>
         <td><label for="firstcourse"><Text3>{course.semester}</Text3></label></td>
         <td><label for="firstcourse"><Text3>{course.level}</Text3></label></td>
     </tr>
      ))  : ( <div className="pos-center" >
          <div className="loader"></div> 
         </div>
    ) }  
    

        </table>
      
 
</div>
                
     
     <br />
     <div class='justify'> 
     <RectangleRoot>
      
      <p className='text-white pl-3 cursor-pointer' onClick={() => setShouldshow(true)}>Transfer to course form</p> 
    </RectangleRoot>
     </div>
        
    </div>
    </>
  )
}



const YourResultRoot = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #2d0353;
`;

const RectangleRoot = styled.div`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  width: 200px;
  height: 50px;
  background-color: #2d0353;
  padding-top: 12px;
  padding-bottom: 12px;
 
 
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};

  @media ${devices.mobileL} { 
   
    margin-left: 27px;
  } 
`;
const WhiteFlexColumnRoot = styled.div` 
  height: 234px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 0px 36px 0px 37px;
  
 
`;
const Text1 = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #505050;
  align-self: flex-start;
  margin: 0px 0px 0px 1px;
`;
const Paragraph = styled.div`
  text-align: center;
  width: 313px;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #505050;
  margin: 0px 0px 32px 0px;
  white-space: pre-wrap;

  @media ${devices.mobileL} { 
    text-align: left;
  } 
  
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;
`;
const WhiteText = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #2d0353;
  border-color: #b3b1b1;
  border-style: solid;
  width: 168px;
  height: 45px;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
  padding: 11px 0px;
  border-width: 1px;
  cursor: pointer;

  @media ${devices.mobileL} { 
    width: 80px;
    
  } 
`;
const RoyalPurpleText = styled.div`
  display: flex;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #ffffff;
  width: 170px;
  height: 45px;
  background-color: #2d0353;
  flex-direction: row;
  justify-content: center;
  border-radius: 6px;
  padding: 12px 0px;
  cursor: pointer;

  @media ${devices.mobileL} { 
    width: 80px;
  } 
`;

const Text3 = styled.div`
  mix-blend-mode: normal;
  font-size: 17px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
  text-align: left;
 
`;






export default CourseReg; 







// import React, {useState} from 'react'
// import "../br.css" 
// import styled from "styled-components";
// import RegistrationHeader from 'components/ResultsComponents/RegistrationHeader';
// import {Link } from 'react-router-dom';

// const sizes = {
//     mobileS: "320px",
//     mobileM: "375px",
//     mobileL: "425px",
//     tablet: "768px",
//     laptop: "1024px",
//     laptopL: "1440px",
//     desktop: "2560px",
//   };
//   export const devices = {
//     mobileS: `(min-width: ${sizes.mobileS})`,
//     mobileM: `(min-width: ${sizes.mobileM})`,
//     mobileL: `(max-width: ${sizes.mobileL})`,
//     tablet: `(max-width: ${sizes.tablet})`,
//     laptop: `(min-width: ${sizes.laptop})`,
//     laptopL: `(min-width: ${sizes.laptopL})`,
//     desktop: `(min-width: ${sizes.desktop})`,
//   };


// const ModalBackground = styled.div`
//      position:fixed;
//      z-index: 1;
//      left: 0;
//      top: 0;
//      width: 100%;
//      height: 100%;
//      overflow: auto;
//      background-color: rgba(0,0,0,0.5);
// `

// const ModalBody = styled.div`
//      background-color: white;
//      margin: 10% auto;
//      padding: 20px; 
//      width: 50%;
//      @media ${devices.tablet} {
//         width: 90%;   
//       } 
// `


// const CourseReg = () => {
//    const [shouldshow, setShouldshow] = useState(false);





//   return (
//     <>
//       { shouldshow && (
//         <ModalBackground onClick={() => setShouldshow(false)}>
//             <ModalBody onClick={(e) => e.stopPropagation()}>
                
//                 <WhiteFlexColumnRoot>
//                 <FlexColumn gap={`21px`}>
//                     <FlexColumn gap={`9px`}>
//                     <Text1>Note</Text1>
//                     <Paragraph>
//                         The selected courses have been updated <br className="responsivemodal"></br> on your course form. Please check <br className="responsivemodal"></br> critically for course duplication
//                     </Paragraph>
//                     </FlexColumn>
//                     <FlexRow>
//                     <WhiteText onClick={() => setShouldshow(false)}>Cancel</WhiteText>
//                     <Link to="/submit-course-form">
//                     <RoyalPurpleText onClick={() => setShouldshow(false)}>Continue</RoyalPurpleText>
//                     </Link>
//                     </FlexRow>
//                 </FlexColumn>
//                 </WhiteFlexColumnRoot>
    
//             </ModalBody>
//         </ModalBackground>
//       )}


//     <div className='bg-white'>
//         <RegistrationHeader />
     
//         <br />
//         <div className='ml-4'>
//         <YourResultRoot>Select Course</YourResultRoot>  
//         </div>
        

//          <div style={{overflowX: "auto"}} className='bg-white mx-3 '> 
       
//          <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
//      <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
//          <th style={{width:"4%"}}></th> 
//          <th style={{width:"11.8%"}}>Course Code</th>
//          <th style={{width:"11.8%"}}>Department</th> 
//          <th style={{width:"35%"}}>Course Title</th>
//          <th style={{width:"9.3%"}}>Unit</th>
//          <th style={{width:"9.3%"}}>Status</th>
//          <th style={{width:"9.3%"}}>Semester</th> 
//          <th style={{width:"9.3%"}}>Level</th>    
         
//      </tr>    

//      <tr style={{height:"70px"}}> 
//          <td > <input  style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse"  />
//          </td> 
//          <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
//          <td ><label for="firstcourse"><Text3>Statistics</Text3></label></td>
//          <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
//          <td><label for="firstcourse"><Text3>4</Text3></label></td>
//          <td><label for="firstcourse"><Text3>C</Text3></label></td>
//          <td><label for="firstcourse"><Text3>First</Text3></label></td>
//          <td><label for="firstcourse"><Text3>100</Text3></label></td>
//      </tr>

//      <tr className='bg-gray-100' style={{height:"70px"}}> 
//          <td > <input  style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse"  />
//          </td> 
//          <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
//          <td ><label for="firstcourse"><Text3>Statistics</Text3></label></td>
//          <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
//          <td><label for="firstcourse"><Text3>4</Text3></label></td>
//          <td><label for="firstcourse"><Text3>C</Text3></label></td>
//          <td><label for="firstcourse"><Text3>First</Text3></label></td>
//          <td><label for="firstcourse"><Text3>100</Text3></label></td>
//      </tr>

//      <tr style={{height:"70px" }}> 
//          <td > <input  style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse"  />
//          </td> 
//          <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
//          <td ><label for="firstcourse"><Text3>Statistics</Text3></label></td>
//          <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
//          <td><label for="firstcourse"><Text3>4</Text3></label></td>
//          <td><label for="firstcourse"><Text3>C</Text3></label></td>
//          <td><label for="firstcourse"><Text3>First</Text3></label></td>
//          <td><label for="firstcourse"><Text3>100</Text3></label></td>
//      </tr>

//      <tr className='bg-gray-100' style={{height:"70px" }}> 
//          <td > <input  style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse"  />
//          </td> 
//          <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
//          <td ><label for="firstcourse"><Text3>Statistics</Text3></label></td>
//          <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
//          <td><label for="firstcourse"><Text3>4</Text3></label></td>
//          <td><label for="firstcourse"><Text3>C</Text3></label></td>
//          <td><label for="firstcourse"><Text3>First</Text3></label></td>
//          <td><label for="firstcourse"><Text3>100</Text3></label></td>
//      </tr>

//      <tr style={{height:"70px"}}> 
//          <td > <input  style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse"  />
//          </td> 
//          <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
//          <td ><label for="firstcourse"><Text3>Statistics</Text3></label></td>
//          <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
//          <td><label for="firstcourse"><Text3>4</Text3></label></td>
//          <td><label for="firstcourse"><Text3>C</Text3></label></td>
//          <td><label for="firstcourse"><Text3>First</Text3></label></td>
//          <td><label for="firstcourse"><Text3>100</Text3></label></td>
//      </tr>

//      <tr className='bg-gray-100' style={{height:"70px" }}> 
//          <td > <input  style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse"  />
//          </td> 
//          <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
//          <td ><label for="firstcourse"><Text3>Statistics</Text3></label></td>
//          <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
//          <td><label for="firstcourse"><Text3>4</Text3></label></td>
//          <td><label for="firstcourse"><Text3>C</Text3></label></td>
//          <td><label for="firstcourse"><Text3>First</Text3></label></td>
//          <td><label for="firstcourse"><Text3>100</Text3></label></td>
//      </tr>

//      <tr style={{height:"70px"}}> 
//          <td > <input  style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse"  />
//          </td> 
//          <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
//          <td ><label for="firstcourse"><Text3>Statistics</Text3></label></td>
//          <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
//          <td><label for="firstcourse"><Text3>4</Text3></label></td>
//          <td><label for="firstcourse"><Text3>C</Text3></label></td>
//          <td><label for="firstcourse"><Text3>First</Text3></label></td>
//          <td><label for="firstcourse"><Text3>100</Text3></label></td>  
//      </tr>

//      <tr style={{height:"70px"}}> 
//          <td colspan="2"> <td><label for="firstcourse"> <Text4>Total Unit</Text4></label></td>
//          </td> 
//          <td ><label for="firstcourse"></label></td>
//          <td><label for="firstcourse"></label></td>
//          <td><label for="firstcourse"><Text4>16</Text4></label></td>
//          <td><label for="firstcourse"></label></td>
//          <td><label for="firstcourse"></label></td>
//          <td><label for="firstcourse"></label></td>  
//      </tr>

//         </table>
      
 
// </div>
     
//      <br />
//      <div class='justify'> 
//      <RectangleRoot>
      
//       <p className='text-white pl-3 cursor-pointer' onClick={() => setShouldshow(true)}>Transfer to course form</p> 
//     </RectangleRoot>
//      </div>
        
//     </div>
//     </>
//   )
// }



// const YourResultRoot = styled.div`
//   font-size: 16px;
//   font-family: Roboto;
//   line-height: 24px;
//   color: #2d0353;
// `;

// const RectangleRoot = styled.div`
//   border-top-left-radius: 6px;
//   border-top-right-radius: 6px;
//   border-bottom-left-radius: 6px;
//   border-bottom-right-radius: 6px;
//   width: 200px;
//   height: 50px;
//   background-color: #2d0353;
//   padding-top: 12px;
//   padding-bottom: 12px;
 
 
// `;

// const FlexColumn = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: ${(props) => props.gap};

//   @media ${devices.mobileL} { 
   
//     margin-left: 27px;
//   } 
// `;
// const WhiteFlexColumnRoot = styled.div` 
//   height: 234px;
//   background-color: #ffffff;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 6px;
//   padding: 0px 36px 0px 37px;
  
 
// `;
// const Text1 = styled.div`
//   font-size: 18px;
//   font-family: Product Sans Medium;
//   line-height: 17.46px;
//   color: #505050;
//   align-self: flex-start;
//   margin: 0px 0px 0px 1px;
// `;
// const Paragraph = styled.div`
//   text-align: center;
//   width: 313px;
//   font-size: 14px;
//   font-family: Roboto;
//   line-height: 21px;
//   color: #505050;
//   margin: 0px 0px 32px 0px;
//   white-space: pre-wrap;

//   @media ${devices.mobileL} { 
//     text-align: left;
//   } 
  
// `;
// const FlexRow = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   gap: 8px;
//   align-items: center;
// `;
// const WhiteText = styled.div`
//   display: flex;
//   font-size: 14px;
//   font-family: Roboto;
//   line-height: 21px;
//   color: #2d0353;
//   border-color: #b3b1b1;
//   border-style: solid;
//   width: 168px;
//   height: 45px;
//   background-color: #ffffff;
//   flex-direction: row;
//   justify-content: center;
//   border-radius: 6px;
//   padding: 11px 0px;
//   border-width: 1px;
//   cursor: pointer;

//   @media ${devices.mobileL} { 
//     width: 80px;
    
//   } 
// `;
// const RoyalPurpleText = styled.div`
//   display: flex;
//   font-size: 14px;
//   font-family: Roboto;
//   line-height: 21px;
//   color: #ffffff;
//   width: 170px;
//   height: 45px;
//   background-color: #2d0353;
//   flex-direction: row;
//   justify-content: center;
//   border-radius: 6px;
//   padding: 12px 0px;
//   cursor: pointer;

//   @media ${devices.mobileL} { 
//     width: 80px;
//   } 
// `;

// const Text3 = styled.div`
//   mix-blend-mode: normal;
//   font-size: 17px;
//   font-family: Roboto;
//   line-height: 21px;
//   color: #787878;
//   text-align: left;
 
// `;

// const Text4 = styled.div`
// mix-blend-mode: normal;
// font-size: 18px;
// font-family: Product Sans Medium;
// line-height: 17.46px;
// color: #219653;
 
// `;




// export default CourseReg; 