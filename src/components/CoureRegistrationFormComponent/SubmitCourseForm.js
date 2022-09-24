import React, {useEffect} from 'react'
import "../br.css" 
import styled from "styled-components";
import RegistrationHeader from 'components/ResultsComponents/RegistrationHeader';
import Sidebar from 'components/Sidebar';
import { BaseUrl } from 'components/Login';
import axios from 'axios'; 
import { Link } from 'react-router-dom';
import { useState } from "react";


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

      @media ${devices.mobileL} { 
        width: 100%;
      } 

`


const SubmitCourseForm = () => {

  const [shouldshow, setShouldshow] = useState(false);
  
  const [isClosed, setIsClosed] = useState(false);
  
  const [courseInfo, setcourseInfo] = useState([])

  const [data, setData] = useState([])

  // const [responseresult, setResponseresult] = useState([])
  const [resCourseTaken, setResCourseTaken] = useState(false)
  const [responseresultTaken, setResponseresultTaken] = useState([])
  



  useEffect(() => {
    const fetchInfo = async () => {
    
      const dataname = JSON.parse(localStorage.getItem('data'));
      if (dataname) {
       setData(dataname);   
      }
    
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
  

  const handleIsClosed = () => {
   setIsClosed(!isClosed);
 };
  
  const SubmitForm = async () => {
    if (isClosed) {
     const dataname = JSON.parse(localStorage.getItem('data'));
     if (dataname) {
     setData(dataname);   
     }

     const coursedata = JSON.parse(localStorage.getItem('resultData'));
     if (coursedata) {
     setcourseInfo(coursedata);   
     }

    const headers = {
      accept: 'application/json',
      Authorization: `Bearer ${data.token}`  
  }
    
     try {  
       const response = await axios.post(`${BaseUrl}/api/v1/myregistrations`, {
        school: data.school,
        userId: data.userId,
        semester: courseInfo.courses[0].semester, 
        courseCode: courseInfo.courses[0].courseCode,  
       //  courseCode: isClosed ? courseInfo.courses[0].courseCode : data.semester, 
    },{ 
        headers: headers
    }); 
       console.log(response.data);  
    
       localStorage.setItem('submitData', JSON.stringify(response.data.data)) 
       
       setShouldshow(true)
      
     } catch (error) {
       console.error(error.message);   
     }
    }   else {
     alert("Please Select Courses For Submission");
    }
    

 }
 

  return (
    <>
      { shouldshow && (
        <ModalBackground onClick={() => setShouldshow(false)}>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                
            <WhiteFlexColumnRoot> 
      <FlexColumn>
        <Image2 src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
        <Text1>Successful</Text1>
        <Paragraph>
          Your course form for 2021-2022 academic <br className="responsivemodal"></br>   section has been submitted
          successfully{" "}
        </Paragraph>
        <RoyalPurpleText onClick={() => setShouldshow(false)}>Ok</RoyalPurpleText>
      </FlexColumn>
    </WhiteFlexColumnRoot>

    
            </ModalBody>
        </ModalBackground>
      )}


    <div className='bg-white'>
        <Sidebar />
        <RegistrationHeader />
     
        <br />
        <div className='ml-4'> 
        <YourResultRoot>Course Form</YourResultRoot> 
         
        </div>
      
        
        <div style={{overflowX: "auto"}} className='bg-white mx-3 '> 
       
       <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
   <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
       <th style={{width:"4%"}}></th> 
       <th style={{width:"11.8%"}}>Course Code</th>
       <th style={{width:"11.8%"}}>Department</th> 
       <th style={{width:"35%"}}>Course Title</th>
       <th style={{width:"9.3%"}}>Unit</th>
       <th style={{width:"9.3%"}}>Status</th>
       <th style={{width:"9.3%"}}>Semester</th> 
       <th style={{width:"9.3%"}}>Level</th>    
       
   </tr>    
   
   
   {/* <tr style={{height:"70px"}}> 
       <td> <input onClick={handleIsClosed}  style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse" checked={isClosed}  />
       </td> 
       <td><label for="firstcourse"> <Text3>CSC 101</Text3></label></td>
       <td ><label for="firstcourse"><Text3>Statistics</Text3></label></td>
       <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
       <td><label for="firstcourse"><Text3>4</Text3></label></td>
       <td><label for="firstcourse"><Text3>C</Text3></label></td>
       <td><label for="firstcourse"><Text3>First</Text3></label></td>
       <td><label for="firstcourse"><Text3>100</Text3></label></td>
   </tr> */}

{  resCourseTaken ?  responseresultTaken.data.courses.map((course) => (
   
   <tr key={course.id} style={{height:"70px"}}>  
    <td> <input onClick={handleIsClosed}  style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse" checked={isClosed}  />
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


   <tr style={{height:"70px"}}> 
       <td colspan="2"> <td><label for="firstcourse"> <Text4>Total Unit</Text4></label></td>
       </td> 
       <td ><label for="firstcourse"></label></td>
       <td><label for="firstcourse"></label></td>
       <td><label for="firstcourse"><Text4>6</Text4></label></td>
       <td><label for="firstcourse"></label></td>
       <td><label for="firstcourse"></label></td>
       <td><label for="firstcourse"></label></td>  
   </tr>

      </table>
    

</div>
     
     <br />
     <div class='justify'> 
     <RectangleRoot>
      <p onClick={SubmitForm}  className='text-white  px-auto text-center  cursor-pointer'>Submit course form</p>   
    </RectangleRoot>

    
    <WhiteFlexRowRoot>
    <Link to="/printoutform">
      <FlexRowy>
        <Image1 src={`https://file.rendit.io/n/Ud9ZXaKjnVAz4TRL5LAM.svg`} />
        <Texty>Print course form</Texty>
      </FlexRowy> 
      </Link>
    </WhiteFlexRowRoot>
   

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

  @media ${devices.mobileL} { 
    width: 200px;
    height: 70px; 
    padding-right: 10px; 
   margin-left:10px; 
  } 
  
`;

const WhiteFlexColumnRoot = styled.div`
  height: 390px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 0px 40px 0px 43px;
`;
const FlexColumn = styled.div`
  height: 273px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

 ]

`;
const Image2 = styled.img`
  width: 112px;
  height: 112px;
  margin: 0px 0px 12px 0px;
`;
const Text1 = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #219653;
  margin: 0px 0px 13px 0px;
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
    margin-left:10px; 
    margin-right:10px;
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
  padding: 13px 0px 11px 0px;
  cursor: pointer;
`;





const WhiteFlexRowRoot = styled.div`
  width: 180px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  padding: 12px 0px;
  margin-left: 20px; 
  cursor: pointer;
`;
const FlexRowy = styled.div`
  display: flex;
  flex-direction: row;
  gap: 11px;
  justify-content: center;
  align-items: center;
`;
const Image1 = styled.img`
  width: 16px;
  height: 14px;
  align-self: flex-end;
  margin: 0px 0px 3px 0px;
`;
const Texty = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878; 
  cursor: pointer; 
  text:center; 
  @media ${devices.mobileL} {  
 
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

const Text4 = styled.div`
mix-blend-mode: normal;
font-size: 18px;
font-family: Product Sans Medium;
line-height: 17.46px;
color: #219653;
 
`;


export default SubmitCourseForm;  











// import React, {useState } from 'react'
// import "../br.css" 
// import styled from "styled-components";
// import RegistrationHeader from 'components/ResultsComponents/RegistrationHeader';
// import Sidebar from 'components/Sidebar';

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

//       @media ${devices.mobileL} { 
//         width: 100%;
//       } 

// `


// const SubmitCourseForm = () => {
//    const [shouldshow, setShouldshow] = useState(false);

  



//   return (
//     <>
//       { shouldshow && (
//         <ModalBackground onClick={() => setShouldshow(false)}>
//             <ModalBody onClick={(e) => e.stopPropagation()}>
                
//             <WhiteFlexColumnRoot> 
//       <FlexColumn>
//         <Image2 src={`https://file.rendit.io/n/7I3yZRjpHsAGEb48rZcx.svg`} />
//         <Text1>Successful</Text1>
//         <Paragraph>
//           Your course form for 2021-2022 academic <br className="responsivemodal"></br>   section has been submitted
//           successfully{" "}
//         </Paragraph>
//         <RoyalPurpleText onClick={() => setShouldshow(false)}>Ok</RoyalPurpleText>
//       </FlexColumn>
//     </WhiteFlexColumnRoot>

    
//             </ModalBody>
//         </ModalBackground>
//       )}


//     <div className='bg-white'>
//         <Sidebar />
//         <RegistrationHeader />
     
//         <br />
//         <div className='ml-4'> 
//         <YourResultRoot>Course Form</YourResultRoot>   
//         </div>
        
//         <div style={{overflowX: "auto"}} className='bg-white mx-3 '> 
       
//        <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
//    <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
//        <th style={{width:"4%"}}></th> 
//        <th style={{width:"11.8%"}}>Course Code</th>
//        <th style={{width:"11.8%"}}>Department</th> 
//        <th style={{width:"35%"}}>Course Title</th>
//        <th style={{width:"9.3%"}}>Unit</th>
//        <th style={{width:"9.3%"}}>Status</th>
//        <th style={{width:"9.3%"}}>Semester</th> 
//        <th style={{width:"9.3%"}}>Level</th>    
       
//    </tr>    

//    <tr style={{height:"70px"}}> 
//        <td > <input  style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse"  />
//        </td> 
//        <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
//        <td ><label for="firstcourse"><Text3>Statistics</Text3></label></td>
//        <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
//        <td><label for="firstcourse"><Text3>4</Text3></label></td>
//        <td><label for="firstcourse"><Text3>C</Text3></label></td>
//        <td><label for="firstcourse"><Text3>First</Text3></label></td>
//        <td><label for="firstcourse"><Text3>100</Text3></label></td>
//    </tr>

//    <tr className='bg-gray-100' style={{height:"70px"}}> 
//        <td > <input  style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse"  />
//        </td> 
//        <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
//        <td ><label for="firstcourse"><Text3>Statistics</Text3></label></td>
//        <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
//        <td><label for="firstcourse"><Text3>4</Text3></label></td>
//        <td><label for="firstcourse"><Text3>C</Text3></label></td>
//        <td><label for="firstcourse"><Text3>First</Text3></label></td>
//        <td><label for="firstcourse"><Text3>100</Text3></label></td>
//    </tr>

//    <tr style={{height:"70px" }}> 
//        <td > <input  style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse"  />
//        </td> 
//        <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
//        <td ><label for="firstcourse"><Text3>Statistics</Text3></label></td>
//        <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
//        <td><label for="firstcourse"><Text3>4</Text3></label></td>
//        <td><label for="firstcourse"><Text3>C</Text3></label></td>
//        <td><label for="firstcourse"><Text3>First</Text3></label></td>
//        <td><label for="firstcourse"><Text3>100</Text3></label></td>
//    </tr>

//    <tr className='bg-gray-100' style={{height:"70px" }}> 
//        <td > <input  style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse"  />
//        </td> 
//        <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
//        <td ><label for="firstcourse"><Text3>Statistics</Text3></label></td>
//        <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
//        <td><label for="firstcourse"><Text3>4</Text3></label></td>
//        <td><label for="firstcourse"><Text3>C</Text3></label></td>
//        <td><label for="firstcourse"><Text3>First</Text3></label></td>
//        <td><label for="firstcourse"><Text3>100</Text3></label></td>
//    </tr>

//    <tr style={{height:"70px"}}> 
//        <td > <input checked style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse"  />
//        </td> 
//        <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
//        <td ><label for="firstcourse"><Text3>Statistics</Text3></label></td>
//        <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
//        <td><label for="firstcourse"><Text3>4</Text3></label></td>
//        <td><label for="firstcourse"><Text3>C</Text3></label></td>
//        <td><label for="firstcourse"><Text3>First</Text3></label></td>
//        <td><label for="firstcourse"><Text3>100</Text3></label></td>
//    </tr>

//    <tr className='bg-gray-100' style={{height:"70px" }}> 
//        <td > <input checked style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse"  />
//        </td> 
//        <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
//        <td ><label for="firstcourse"><Text3>Statistics</Text3></label></td>
//        <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
//        <td><label for="firstcourse"><Text3>4</Text3></label></td>
//        <td><label for="firstcourse"><Text3>C</Text3></label></td>
//        <td><label for="firstcourse"><Text3>First</Text3></label></td>
//        <td><label for="firstcourse"><Text3>100</Text3></label></td>
//    </tr>

//    <tr style={{height:"70px"}}> 
//        <td > <input checked style={{marginLeft:"15px"}} type="checkbox" id="firstcourse" name="firstcourse"  />
//        </td> 
//        <td><label for="firstcourse"> <Text3>STA 101</Text3></label></td>
//        <td ><label for="firstcourse"><Text3>Statistics</Text3></label></td>
//        <td><label for="firstcourse"><Text3>Introduction to Statistics and Maths</Text3></label></td>
//        <td><label for="firstcourse"><Text3>4</Text3></label></td>
//        <td><label for="firstcourse"><Text3>C</Text3></label></td>
//        <td><label for="firstcourse"><Text3>First</Text3></label></td>
//        <td><label for="firstcourse"><Text3>100</Text3></label></td>  
//    </tr>

//    <tr style={{height:"70px"}}> 
//        <td colspan="2"> <td><label for="firstcourse"> <Text4>Total Unit</Text4></label></td>
//        </td> 
//        <td ><label for="firstcourse"></label></td>
//        <td><label for="firstcourse"></label></td>
//        <td><label for="firstcourse"><Text4>16</Text4></label></td>
//        <td><label for="firstcourse"></label></td>
//        <td><label for="firstcourse"></label></td>
//        <td><label for="firstcourse"></label></td>  
//    </tr>

//       </table>
    

// </div>
     
//      <br />
//      <div class='justify'> 
//      <RectangleRoot>
//       <p onClick={() => setShouldshow(true)} className='text-white  pl-2 text-center lg:pl-6 cursor-pointer'>Submit course form</p>   
//     </RectangleRoot>

//     <WhiteFlexRowRoot>
//       <FlexRowy>
//         <Image1 src={`https://file.rendit.io/n/Ud9ZXaKjnVAz4TRL5LAM.svg`} />
//         <Texty>Print course form</Texty>
//       </FlexRowy> 
//     </WhiteFlexRowRoot>
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

//   @media ${devices.mobileL} { 
//     width: 200px;
//     height: 70px; 
//     padding-right: 10px; 
//    margin-left:10px; 
//   } 
  
// `;

// const WhiteFlexColumnRoot = styled.div`
//   height: 390px;
//   background-color: #ffffff;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 6px;
//   padding: 0px 40px 0px 43px;
// `;
// const FlexColumn = styled.div`
//   height: 273px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//  ]

// `;
// const Image2 = styled.img`
//   width: 112px;
//   height: 112px;
//   margin: 0px 0px 12px 0px;
// `;
// const Text1 = styled.div`
//   font-size: 18px;
//   font-family: Product Sans Medium;
//   line-height: 17.46px;
//   color: #219653;
//   margin: 0px 0px 13px 0px;
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
//     margin-left:10px; 
//     margin-right:10px;
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
//   padding: 13px 0px 11px 0px;
//   cursor: pointer;
// `;





// const WhiteFlexRowRoot = styled.div`
//   width: 180px;
//   background-color: #f0f0f0;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   border-radius: 6px;
//   padding: 12px 0px;
//   margin-left: 20px; 
//   cursor: pointer;
// `;
// const FlexRowy = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 11px;
//   justify-content: center;
//   align-items: center;
// `;
// const Image1 = styled.img`
//   width: 16px;
//   height: 14px;
//   align-self: flex-end;
//   margin: 0px 0px 3px 0px;
// `;
// const Texty = styled.div`
//   font-size: 14px;
//   font-family: Roboto;
//   line-height: 21px;
//   color: #787878; 
//   cursor: pointer; 
//   text:center; 
//   @media ${devices.mobileL} {  
 
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


// export default SubmitCourseForm;  