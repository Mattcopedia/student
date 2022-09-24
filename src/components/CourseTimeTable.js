

import React from 'react';
import Sidebar from './Sidebar';
// import coursett from "../assets/img/coursetimetable.PNG";
import styled from "styled-components";  
import "./br.css" 
import { Link } from 'react-router-dom';
 


const CourseTimeTables = () => {
  return ( 
    <>

   <Sidebar /> 

   <div className='bg-white ml-2 '> 

   <div>
   <CourseAndExamTimeTableRoot>
      Course and exam time table{" "}
    </CourseAndExamTimeTableRoot>
   </div>

   <div className='mt-5'>
   <ComponentRoot>
      <FlexColumn> 
        <Link to="/coursetimetable">
        <CourseTimeTable>Course time table</CourseTimeTable>
        <RoyalPurpleRectangle />
        </Link>
        
      </FlexColumn>
      <FlexColumn>
        <Link to="/examtimetable">
        <Text1>Exam time table</Text1>
        <RoyalPurpleRectangle1 />
        </Link>
       
      </FlexColumn>
    </ComponentRoot> 
   </div>

     <div style={{overflowX: "auto"}} >
   <table className='Yourdocs mx-auto my-6' style={{width:"100%"}} >    
     <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
         <th style={{width:"12.5%"}}></th> 
         <th style={{width:"12.5%"}}>Mon</th>
         <th style={{width:"12.5%"}}>Tues</th> 
         <th style={{width:"12.5%"}}>Wed</th>
         <th style={{width:"12.5%"}}>Thurs</th>
         <th style={{width:"12.5%"}}>Fri</th>
         <th style={{width:"12.5%"}}>Sat</th> 
         <th style={{width:"12.5%"}}>Sun</th>   
         
     </tr>    

     <tr style={{height:"70px"}}> 
            <td><Text3>08:00 <br></br> <span>2/4/21</span></Text3></td>
            <td> <Text3>CSC202 <br></br> <span>Big lecture<br></br> room</span> </Text3></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
            <td> <Text3>09:00 <br></br> <span>2/4/21</span> </Text3> </td>
            <td></td>
            <td> <Text3>CSC202 <br></br> <span>Big lecture<br></br> room</span></Text3></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr style={{height:"70px"}}> 
            <td><Text3>10:00 <br></br> <span>2/4/21</span></Text3></td>
            <td></td>
            <td></td>
            <td><Text3>CSC202 <br></br> <span>Big lecture<br></br> room</span></Text3></td>
            <td></td>
            <td></td>
            <td><Text3>CSC202 <br></br> <span>Big lecture<br></br> room</span> </Text3></td>
            <td></td>
        </tr>
        <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
            <td> <Text3>11:00 <br></br> <span>2/4/21</span></Text3></td>
            <td> <Text3>CSC202 <br></br> <span>Big lecture<br></br> room</span></Text3></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        <tr style={{height:"70px"}}> 
            <td><Text3>12:00 <br></br> <span>2/4/21</span></Text3> </td>
            <td></td>
            <td></td>
            <td><Text3>CSC202 <br></br> <span>Big lecture<br></br> room</span></Text3></td>
            <td></td>
            <td><Text3>CSC202 <br></br> <span>Big lecture<br></br> room</span></Text3></td>
            <td></td>
            <td></td> 
        </tr>

        <tr style={{height:"70px", backgroundColor: "#e5e5e5"}}> 
            <td><Text3>01:00 <br></br> <span>2/4/21</span> </Text3></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
     </table> 
     </div>

   

      <div className='mt-5'>
        <NBTimetableIsSubjectToChangeRoot>
        NB: Timetable is subject to change
        </NBTimetableIsSubjectToChangeRoot>
      </div>
    
   </div>
    
           
        </> 
  )
}


const CourseAndExamTimeTableRoot = styled.div`
  font-size: 18px;
  font-family: Product Sans Black;
  line-height: 17.46px;
  color: #2d0353;
  white-space: pre-wrap;
  font-weight: bold;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13.43px;
  justify-content: center;
  align-items: center;
`;
const ComponentRoot = styled.div`
  width: 240px;
  display: flex;
  flex-direction: row;
  gap: 29px;
  justify-content: center;
  align-items: center;
`;
const CourseTimeTable = styled.div`
  width: 110px;
  height: 20.15px;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #2d0353;
`;
const RoyalPurpleRectangle = styled.div`
  width: 110px;
  height: 3.84px;
  background-color: #2d0353;
`;
const Text1 = styled.div`
  width: 101px;
  height: 20.15px;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
`;
const RoyalPurpleRectangle1 = styled.div`
  width: 100px;
  height: 3.84px;
  background-color: #2d0353;
  opacity: 0;
  align-self: flex-start;
`;

const NBTimetableIsSubjectToChangeRoot = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #df8909;
`;

const Text3 = styled.div`
  mix-blend-mode: normal;
  font-size: 17px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
  text-align: center;
 
`;





export default CourseTimeTables; 