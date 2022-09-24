
import React from 'react'
import styled from "styled-components"; 

const CGPAForecasterForm  = () => {
  return (
    <div>
             <div style={{overflowX: "auto"}} className='bg-gray-100 mx-3 '> 
       
       <table className='Yourcoursereg mx-auto my-6' style={{width:"100%"}} >    
   <tr style={{height:"40px"}}>    
     

       <th colspan="" style={{width: "50%"}}>  <Text1>Minimum CGPA per semester</Text1></th>
         
         <th  style={{paddingLeft:"0px", width:"25%"}}> <Text1>Projected CGPA </Text1></th> 
          
         <th  style={{width:"25%"}}> <Text1>Projected Class of degree </Text1></th>   *

         
     </tr>
        

     <tr style={{height:"70px"}}> 
      
         <td ><label className="tabelinput" for="firstcourse"> if you get a GPA of not less than 5.0 per semester</label></td>
  
         <td><label className="tabelinput" for="firstcourse">4.28</label></td>  
       
         <td ><label className="tabelinput" for="firstcourse">Second Class Upper division </label></td> 
     </tr> 
 
     
     <tr style={{height:"70px"}}> 
      
      <td ><label className="tabelinput" for="firstcourse">if you get a GPA of not less than 5.0 per semester</label></td>

      <td><label className="tabelinput" for="firstcourse">4.28</label></td> 
    
      <td ><label className="tabelinput" for="firstcourse">Second Class Upper division </label></td> 
  </tr>

  <tr style={{height:"70px"}}> 
      
         <td ><label className="tabelinput" for="firstcourse">if you get a GPA of not less than 5.0 per semester</label></td>
  
         <td><label className="tabelinput" for="firstcourse">4.28</label></td> 
       
         <td ><label className="tabelinput" for="firstcourse">Third Class </label></td> 
     </tr>

     <tr style={{height:"70px"}}> 
      
         <td ><label className="tabelinput" for="firstcourse">if you get a GPA of not less than 5.0 per semester</label></td>
  
         <td><label className="tabelinput" for="firstcourse">4.28</label></td> 
       
         <td ><label className="tabelinput" for="firstcourse">Third Class </label></td> 
     </tr>

     <tr style={{height:"70px"}}> 
      
         <td ><label className="tabelinput" for="firstcourse">if you get a GPA of not less than 5.0 per semester</label></td>
  
         <td><label className="tabelinput" for="firstcourse">4.28</label></td> 
       
         <td ><label className="tabelinput" for="firstcourse">Third Class </label></td> 
     </tr>

     <tr style={{height:"70px"}}> 
      
         <td ><label className="tabelinput" for="firstcourse">if you get a GPA of not less than 5.0 per semester</label></td>
  
         <td><label className="tabelinput" for="firstcourse">4.28</label></td> 
       
         <td ><label className="tabelinput" for="firstcourse">Third Class </label></td> 
     </tr>
    
     

     
     
     
 </table>

  <br />
  <br />
  <br />
 
</div> 

    </div>
  )
}

export default CGPAForecasterForm; 


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
  mix-blend-mode: normal;
  font-size: 17.5px;
  font-family: Product Sans Medium;
  line-height: 21.21px;
  color: #787878;
   font-weight: 900px; 

   @media ${devices.mobileL} { 
    
    font-size: 12.5px;
  } 

  
`;




