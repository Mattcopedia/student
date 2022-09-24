import React from 'react'
import styled from "styled-components"; 

const CGPAGoalSetterinputCom = () => {

  return (

    <>
      <div className='bg-gray-100 mx-4'>

    <div>
    <div class="bg-gray-100 my-4">
   <div class="max-w-7xl mx-auto grid grid-cols-12 bg-gray-100">
     <div class="col-span-4">
     <Text1>S/N</Text1>
     <p className='pl-3 pt-7 md:pt-3'>1</p> 
            
        </div>
     <div class="col-span-4 bg-gray-100"> 
     <Text1>Course code</Text1>
     <WhiteText>STA 202</WhiteText>
        </div>

     <div class="col-span-4">
     <Text1> Course unit</Text1>

     <div className="reducesize pl-2 py-2">
   <select className='' >
    <option selected>1 </option> 
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>  
   </select> 

    </div> 

        </div>
   </div>
  </div>
    </div>








    <div>
    <div class="bg-gray-100 my-4">
   <div class="max-w-7xl mx-auto grid grid-cols-12 bg-gray-100">
     <div class="col-span-4">
     
            <p className='pl-3 pt-7 md:pt-3'>2</p>
        </div>
     <div class="col-span-4 bg-gray-100"> 
    
     <WhiteText>STA 202</WhiteText>
        </div>

     <div class="col-span-4">
 

     <div className="reducesize pl-2 py-2">
   <select className='' >
    <option selected>1 </option> 
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>  
   </select> 

    </div> 

        </div>
   </div>
  </div>
    </div>

    <div>
    <div class="bg-gray-100 my-4">
   <div class="max-w-7xl mx-auto grid grid-cols-12 bg-gray-100">
     <div class="col-span-4">
    
            <p className='pl-3 pt-7 md:pt-3'>3</p>
        </div>
     <div class="col-span-4 bg-gray-100"> 
   
     <WhiteText>STA 202</WhiteText>
        </div>

     <div class="col-span-4">
     

     <div className="reducesize pl-2 py-2">
   <select className=''>
    <option selected>1 </option> 
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>  
   </select> 

    </div> 

        </div>
   </div>
  </div>
    </div>


    <div>
    <div class="bg-gray-100 my-4">
   <div class="max-w-7xl mx-auto grid grid-cols-12 bg-gray-100">
     <div class="col-span-5">
   
     <SelectAcademicYearRoot>Choose the minium CGPA you want to attain </SelectAcademicYearRoot>  
        </div>
     <div class="col-span-3 bg-gray-100">  
 
     
        </div>

     <div class="col-span-4">
     

     <div className="reducesize pl-2 py-2">
   <select className='' >
    <option selected>1 </option> 
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>  
   </select> 

    </div> 

        </div>
   </div>
  </div>
    </div>




   

   

    

    
    <div class='justify'> 
     <RectangleRoot>
      <p className='text-white pl-11 md:pl-16  '>Calculate </p> 
    </RectangleRoot>
     </div>




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


const SelectAcademicYearRoot = styled.div`
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  color: #2d0353;
  padding-bottom: 40px; 
  padding-left: 32px;
  padding-top: 20px;


  @media ${devices.tablet} {
    padding-bottom: 50px;    
  } 

  @media ${devices.mobileL} { 
    padding-top: 8px;
  } 

`; 


const WhiteText = styled.div`
  mix-blend-mode: normal;
  display: flex;
  font-size: 14px;
  font-family: Product Sans Medium;
  line-height: 21.21px;
  color: #787878;
  border-style: solid;
  border-color: #b3b1b1;
  max-width: 266px;
  height: 40px;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: flex-start;
  border-radius: 6px;
  padding: 11.5px 21.5px;
  border-width: 0.5px;
  margin-top: 10px; 
  margin-left: 10px;
  text-align: center; 

  @media ${devices.tablet} {
    width: 120px;    
  } 

  @media ${devices.mobileL} {
    width: 60px;    
    height: 60px;
    margin-top: 2px; 
    text-align: left;
    margin-left: 10px; 
    padding: 10px 17px;
  } 
  

`;

const Text1 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Product Sans Medium;
  line-height: 21.21px;
  color: #787878;
  margin: 0px 250px 0px 0px;
  margin-left: 8px;
  
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
  margin-top: 20px;
 
  @media ${devices.mobileL} { 
    width: 160px;
    height: 50px;
  } 

`;



export default CGPAGoalSetterinputCom; 