
import React from 'react'
import PrintOutSelectForm from './PrintOutSelectForm'
import styled from "styled-components";

const PrintOutFormTable = () => {
  return (
    <div>
      
       <PrintOutSelectForm />
       <br />
       <br />

       <div style={{overflowX: "auto"}} className='bg-white ml-5 '> 
     <table className='Youresult' style={{width:"100%"}} >    
     <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
         <th style={{width:"60px"}}></th>
         <th style={{width:"100px"}}><TextX>Course Code</TextX></th>
         <th style={{width:"100px"}} > <TextX>Department</TextX></th>
         <th style={{width:"180px"}}><TextX>Course Title</TextX></th>
         <th style={{paddingLeft:"0px", width:"90px"}}><TextX>Unit</TextX></th>
         <th style={{width:"90px"}}><TextX>Status</TextX></th>
         <th style={{width:"90px"}}><TextX>Semester</TextX></th> 
         <th style={{width:"90px"}}><TextX>Level</TextX></th>  
         
     </tr>

     <tr style={{height:"70px"}}> 
         <td >  </td> 
         <td><label className="tabelinputleft" for="firstcourse">STA 101</label></td>
         <td ><label className="tabelinputleft" for="firstcourse">STA 101</label></td>
         <td><label className="tabelinputleft" for="firstcourse">Introduction to Statistics and Maths</label></td>
         <td><label className="tabelinputleft" for="firstcourse">4</label></td>
         <td><label className="tabelinputleft" for="firstcourse">C</label></td>
         <td><label className="tabelinputleft" for="firstcourse">First</label></td>
         <td><label className="tabelinputleft" for="firstcourse">100</label></td>
     </tr>

     <tr style={{height:"70px"}}> 
         <td >  </td> 
         <td><label className="tabelinputleft" for="firstcourse">STA 101</label></td>
         <td ><label className="tabelinputleft" for="firstcourse">STA 101</label></td>
         <td><label className="tabelinputleft" for="firstcourse">Introduction to Statistics and Maths</label></td>
         <td><label className="tabelinputleft" for="firstcourse">4</label></td>
         <td><label className="tabelinputleft" for="firstcourse">C</label></td>
         <td><label className="tabelinputleft" for="firstcourse">First</label></td>
         <td><label className="tabelinputleft" for="firstcourse">100</label></td>
     </tr>
     <tr style={{height:"70px"}}> 
         <td >  </td> 
         <td><label className="tabelinputleft" for="firstcourse">STA 101</label></td>
         <td ><label className="tabelinputleft" for="firstcourse">STA 101</label></td>
         <td><label className="tabelinputleft" for="firstcourse">Introduction to Statistics and Maths</label></td>
         <td><label className="tabelinputleft" for="firstcourse">4</label></td>
         <td><label className="tabelinputleft" for="firstcourse">C</label></td>
         <td><label className="tabelinputleft" for="firstcourse">First</label></td>
         <td><label className="tabelinputleft" for="firstcourse">100</label></td>
     </tr>
     <tr style={{height:"70px"}}> 
         <td >  </td> 
         <td><label className="tabelinputleft" for="firstcourse">STA 101</label></td>
         <td ><label className="tabelinputleft" for="firstcourse">STA 101</label></td>
         <td><label className="tabelinputleft" for="firstcourse">Introduction to Statistics and Maths</label></td>
         <td><label className="tabelinputleft" for="firstcourse">4</label></td>
         <td><label className="tabelinputleft" for="firstcourse">C</label></td>
         <td><label className="tabelinputleft" for="firstcourse">First</label></td>
         <td><label className="tabelinputleft" for="firstcourse">100</label></td>
     </tr>
     <tr style={{height:"70px"}}> 
         <td >  </td> 
         <td><label className="tabelinputleft" for="firstcourse">STA 101</label></td>
         <td ><label className="tabelinputleft" for="firstcourse">STA 101</label></td>
         <td><label className="tabelinputleft" for="firstcourse">Introduction to Statistics and Maths</label></td>
         <td><label className="tabelinputleft" for="firstcourse">4</label></td>
         <td><label className="tabelinputleft" for="firstcourse">C</label></td>
         <td><label className="tabelinputleft" for="firstcourse">First</label></td>
         <td><label className="tabelinputleft" for="firstcourse">100</label></td>
     </tr>

     <tr style={{height:"70px"}}> 
         <td >  </td> 
         <td><label className="tabelinputleft" for="firstcourse">STA 101</label></td>
         <td ><label className="tabelinputleft" for="firstcourse">STA 101</label></td>
         <td><label className="tabelinputleft" for="firstcourse">Introduction to Statistics and Maths</label></td>
         <td><label className="tabelinputleft" for="firstcourse">4</label></td>
         <td><label className="tabelinputleft" for="firstcourse">C</label></td>
         <td><label className="tabelinputleft" for="firstcourse">First</label></td>
         <td><label className="tabelinputleft" for="firstcourse">100</label></td>
     </tr>

     <tr style={{height:"70px",}}>  
         <td colspan="1" ><TotalRoot>Total Unit </TotalRoot> </td>
         <td></td>
         <td></td>
         <td></td>
         <td><TotalRoot>16 </TotalRoot></td>
         <td></td>
         <td></td> 
         <td></td>  
     </tr>

     <tr style={{height:"70px",}}> 
         <td ><TotalRoot>GPA </TotalRoot> </td> 
         <td></td>
         <td></td>
         <td></td>
         <td><TotalRoot>3.0 </TotalRoot></td>
         <td></td>
         <td></td> 
         <td></td>  
     </tr>
     
     
 </table>

  
 
</div> 

<div className='justify mt-7'> 
       

       <WhiteFlexRowRoot>
      <FlexRowy>
        <Image2 src={`https://file.rendit.io/n/CBLQyHKVqIgSGQsrpKHW.svg`} />
        <Texty>Preview and print</Texty>
      </FlexRowy> 
    </WhiteFlexRowRoot>   

     

    
     </div>

    </div>
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

const TotalRoot = styled.div`
mix-blend-mode: normal;
font-size: 18px;
font-family: Product Sans Medium;
line-height: 17.46px;
color: #219653; 
`;

const TextX = styled.div`
mix-blend-mode: normal;
font-size: 14px;
font-family: Product Sans Medium;
line-height: 21.21px;
color: #505050;

   @media ${devices.mobileL} {  
    
    font-size: 12.5px;
  } 

  
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
const Image2 = styled.img`
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
`;

export default PrintOutFormTable