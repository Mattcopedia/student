import React from 'react'
import RegistrationHeader from './RegistrationHeader'
import styled from "styled-components"; 
import Sidebar from 'components/Sidebar';

const OutstandingResult = () => {
  return (
    <div className='bg-white'>
        <Sidebar />
       <RegistrationHeader /> 
       <br/>

       <div className='ml-3'>
       <WhiteFlexRowRoot>
      <FlexColumn>
        <TotalCourseTaken>Total outstanding</TotalCourseTaken>
        <Element1>2</Element1>
      </FlexColumn>
      <FlexRow>
        <Image1 src={`https://file.rendit.io/n/5guBSzVfsU5JSSTsNN1v.svg`} />
      </FlexRow>
    </WhiteFlexRowRoot>
       </div>

       <div className='ml-4'>
        <YourResultRoot>Your Result</YourResultRoot> 
        </div>
        

         <div style={{overflowX: "auto"}}  className='bg-white ml-5 '> 
     <table className='Youresult' style={{width:""}}>  
     <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
         <th style={{width:"60px"}}></th>
         <th style={{width:"100px"}}>Course Code</th>
         <th style={{width:"140px"}} >Department</th>
         <th style={{width:"140px"}}>Course Title</th>
         <th style={{paddingLeft:"0px", width:"90px"}}>Unit</th>
         <th style={{width:"90px"}}>Grade</th>
         <th style={{width:"90px"}}>Semester</th> 
         <th style={{width:"90px"}}>Level</th>  
         
     </tr>
     <tr style={{height:"70px"}}> 
         <td > <input style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td> 
         <td>STA 101</td>
         <td style={{paddingLeft:"10px"}}>Statistics</td>
         <td>Introduction to Statistics and Maths</td>
         <td >4</td>
         <td >F</td>
         <td >First</td>
         <td >100</td>
     </tr>
     <tr className='bg-gray-100' style={{height:"70px"}}> 
         <td> <input style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/> </td>
         <td>STA 101</td>
         <td style={{paddingLeft:"10px"}}>Statistics</td>
         <td>Statistical Analysis</td>
         <td >2</td>
         <td >F</td>
         <td >First</td>
         <td>100</td>
     </tr>
    
     
 </table>

  
 
</div>
       
   <br />
   <br />
   <br />
   <br />
    </div>
  )
}

const WhiteFlexRowRoot = styled.div`
  width: 239px;
  background-color: #f3e2e2;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 38px;
  align-items: flex-start;
  border-radius: 10px;
  padding: 18px 15px 17px 15px;
`;
const FlexColumn = styled.div`
  align-self: stretch;
  width: 141px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 13px;
  flex-grow: 1;
  align-items: center;
`;
const TotalCourseTaken = styled.div`
  font-size: 18px;
  font-family: Roboto;
  line-height: 27.09px;
  color: #505050;
`;
const Element1 = styled.div`
  font-size: 36px;
  font-family: Roboto;
  line-height: 54.18px;
  color: #505050;
  align-self: flex-start;
`;
const FlexRow = styled.div`
  width: 50px;
  background-image: url("https://file.rendit.io/n/kwtu7lyX0mgY9LBVGgnz.svg");
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 13px 0px;
`;
const Image1 = styled.img`
  width: 19px;
  height: 24px;
`; 

const YourResultRoot = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #2d0353;
  margin-top: 20px;
  margin-botom: 20px; 
`;



export default OutstandingResult