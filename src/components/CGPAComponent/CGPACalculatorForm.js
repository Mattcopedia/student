import React from 'react'

const CGPACalculatorForm = () => {
  return (
    <div>
               <div style={{overflowX: "auto"}} className='bg-white lg:mx-16 md:mx-16 mx-3 my-4 mb-11 '> 
     <table className='Youresult' style={{width:"100%"}} >    
     <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
         <th style={{width:"60px"}}></th>
         <th style={{width:"100px"}}>Course Code 1</th>
         <th style={{width:"140px"}} ></th>
         <th style={{width:"140px"}}></th>
         <th style={{paddingLeft:"0px", width:"90px"}}>Course Unit</th> 
         <th style={{width:"90px"}}></th>
         <th style={{width:"90px"}}></th> 
         <th style={{width:"90px"}}>Projected Grade</th>  
         
     </tr>

     <tr style={{height:"70px"}}> 
         <td >  </td>  
         <td><label for="firstcourse">STA 101</label></td>
         <td ><label for="firstcourse"></label></td>
         <td><label for="firstcourse"></label></td>
         <td><label for="firstcourse">4</label></td> 
         <td><label for="firstcourse"></label></td>
         <td><label for="firstcourse"></label></td>
         <td><label for="firstcourse">A (5)</label></td> 
     </tr>

     <tr className='bg-gray-100' style={{height:"70px"}}> 
         <td >  </td> 
         <td><label for="firstcourse">STA 101</label></td>
         <td ><label for="firstcourse"></label></td>
         <td><label for="firstcourse"></label></td>
         <td><label for="firstcourse">3</label></td>
         <td><label for="firstcourse"></label></td>
         <td><label for="firstcourse"></label></td>
         <td><label for="firstcourse">A (5)</label></td> 
     </tr>

     <tr  style={{height:"70px"}}> 
         <td >  </td> 
         <td><label for="firstcourse">STA 101</label></td>
         <td ><label for="firstcourse"></label></td>
         <td><label for="firstcourse"></label></td>
         <td><label for="firstcourse">1</label></td>
         <td><label for="firstcourse"></label></td>
         <td><label for="firstcourse"></label></td>
         <td><label for="firstcourse">B (5)</label></td> 
     </tr>


     <tr className='bg-gray-100' style={{height:"70px",}}>  
         <td colspan="1" > </td>
         <td>Total </td>
         <td></td>
         <td></td>
         <td>8</td>
         <td></td>
         <td></td> 
         <td>14</td>  
     </tr>

     <tr style={{height:"70px",}}> 
         <td> </td> 
         <td>CGPA</td>
         <td></td>
         <td></td>
         <td></td>
         <td></td>
         <td></td> 
         <td>4.0</td>  
     </tr>
     
     
 </table>

  <br />
  <br />
  <br />
 
</div> 

    </div>
  )
}

export default CGPACalculatorForm






// import React from 'react'

// const CGPACalculatorForm = () => {
//   return (
//     <div>CGPACalculatorForm</div>
//   )
// }

// export default CGPACalculatorForm