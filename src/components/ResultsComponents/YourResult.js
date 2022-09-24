import React, {useState, useEffect} from 'react'
import "../br.css" 
import styled from "styled-components";
import axios from 'axios';
import { BaseUrl } from 'components/Login';



const YourResult = () => {

  const [data, setData] = useState([])
  const [resCourse, setResCourse] = useState(false)
  const [responseresult, setResponseresult] = useState([])
  

  useEffect(() => {
    const fetchData = async () => {
 
      const dataname = JSON.parse(localStorage.getItem('data'));
      if (dataname) {
        setData(dataname);   
      }

     const headers = {
       accept: 'application/json',
       Authorization: `Bearer ${data.token}`  
   }
     
      try { 
        const response = await axios.post(`${BaseUrl}/api/v1/mygrades`, {
         school: data.school,
         userId: data.userId,
     },{ 
         headers: headers
     }); 
        console.log(response.data); 
        setResponseresult(response.data)
        localStorage.setItem('resultData', JSON.stringify(response.data.data))  
        setResCourse(true) 
       
      } catch (error) {
        console.error(error.message);   
      }
    

    }

    fetchData();
  }, [data.school,data.userId,data.token]); 

 
 
  return (
    <>
    <div className='bg-white'>
        
        <div className='ml-4'>
        <YourResultRoot>Your Result</YourResultRoot>  
        </div>
        

<table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
     <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
         {/* <th style={{width:"4%"}}></th>  */}
         <th style={{width:"11.8%",paddingLeft:"10px"}}> Course Code</th>
         <th style={{width:"11.8%"}}>Department</th> 
         <th style={{width:"35%"}}>Course Title</th>
         <th style={{width:"9.3%"}}>Unit</th>
         <th style={{width:"9.3%"}}>Score</th>
         <th style={{width:"9.3%"}}>Grade</th> 
         <th style={{width:"9.3%"}}>Point</th>    
         
     </tr> 



     {  resCourse  ? responseresult.data.courses.map((course) => {
        return (
     <tr key={course.id} style={{height:"70px"}}> 
        
         <td style={{paddingLeft:"10px"}} ><Text3>{course.courseCode} </Text3></td>
         <td style={{paddingLeft:"10px"}}> <Text3>Computer Science</Text3></td>
         <td><Text3>Introduction to Computer Science</Text3></td>
         <td><Text3>3</Text3></td>
         <td><Text3>{course.score}</Text3></td>
         <td><Text3>8</Text3></td>
         <td><Text3>16</Text3></td>   
     </tr>
    
    );})   :  ( <div className="pos-center" >
    <div className="loader"></div> 
   </div>
) 
    }   
  
  
     
 </table>

  
 
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

const Text3 = styled.div`
  mix-blend-mode: normal;
  font-size: 17px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
  text-align: left;
 
`;

export default YourResult








// import React from 'react'
// import "../br.css" 
// import SearchYear from './SearchYear'
// import styled from "styled-components";


// const YourResult = () => {
//   return (
//     <div className='bg-white'>
//         <SearchYear />
//         <br />
//         <div className='ml-4'>
//         <YourResultRoot>Your Result</YourResultRoot>  
//         </div>
        

//          <div className='bg-white ml-5 '> 
//      <table className='Youresult' style={{width:""}}>  
//      <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
//          <th style={{width:"60px"}}></th>
//          <th style={{width:"100px"}}>Course Code</th>
//          <th style={{width:"140px"}} >Department</th>
//          <th style={{width:"140px"}}>Course Title</th>
//          <th style={{paddingLeft:"0px", width:"90px"}}>Unit</th>
//          <th style={{width:"90px"}}>Score</th>
//          <th style={{width:"90px"}}>Grade</th> 
//          <th style={{width:"90px"}}>Point</th>  
         
//      </tr>
//      <tr style={{height:"70px"}}> 
//          <td > <input style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td> 
//          <td>STA 101</td>
//          <td style={{paddingLeft:"10px"}}>Statistics</td>
//          <td>Introduction to Statistics and Maths</td>
//          <td>4</td>
//          <td>60</td>
//          <td>8</td>
//          <td>16</td>
//      </tr>
//      <tr className='bg-gray-100' style={{height:"70px"}}> 
//          <td> <input style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/> </td>
//          <td>STA 101</td>
//          <td style={{paddingLeft:"10px"}}>Statistics</td>
//          <td>Introduction to Statistics and Maths</td>
//          <td>4</td>
//          <td>60</td>
//          <td>8</td>
//          <td>16</td>
//      </tr>
//      <tr style={{height:"70px"}}> 
//          <td ><input style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
//          <td >STA 101</td>
//          <td style={{paddingLeft:"10px"}}>Statistics</td>
//          <td>Introduction to Statistics and Maths</td>
//          <td>4</td>
//          <td>60</td>
//          <td>8</td>
//          <td>16</td>
//      </tr>
//      <tr className='bg-gray-100' style={{height:"70px"}}> 
//          <td ><input style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
//          <td>STA 101</td>
//          <td style={{paddingLeft:"10px"}}>Statistics</td>
//          <td>Introduction to Statistics and Maths</td>
//          <td>4</td>
//          <td>60</td>
//          <td>8</td>
//          <td>16</td>
//      </tr>
//      <tr style={{height:"70px"}}> 
//          <td><input style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/> </td>
//          <td>STA 101</td>
//          <td style={{paddingLeft:"10px"}}>Statistics</td>
//          <td>Introduction to Statistics and Maths</td>
//          <td>4</td>
//          <td>60</td>
//          <td>8</td>
//          <td>16</td> 
//      </tr>

//      <tr className='bg-gray-100' style={{height:"70px"}}> 
//          <td ><input style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
//          <td>STA 101</td>
//          <td style={{paddingLeft:"10px"}}>Statistics</td>
//          <td>Introduction to Statistics and Maths</td>
//          <td>4</td>
//          <td>60</td>
//          <td>8</td>
//          <td>16</td> 
//      </tr>

//      <tr style={{height:"70px",}}> 
//          <td colspan="2" >Total Point </td>
//          <td></td>
//          <td></td>
//          <td></td>
//          <td>16</td>
//          <td></td>
//          <td>120</td>
//          <td></td>  
//      </tr>

//      <tr style={{height:"70px"}}> 
//          <td >GPA </td>
//          <td></td>
//          <td></td>
//          <td></td>
//          <td>4.0</td>
//          <td></td>
//          <td></td>
//          <td></td>  
//      </tr>
     
     
//  </table>

  
 
// </div>
        
//     </div>
//   )
// }
// const YourResultRoot = styled.div`
//   font-size: 16px;
//   font-family: Roboto;
//   line-height: 24px;
//   color: #2d0353;
// `;

// export default YourResult