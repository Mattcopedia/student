
import React from 'react'
import styled from "styled-components"; 

const CGPAForecasterInputCom = () => {

  return (

    <>
    <div className='bg-white pb-11'>

      <div className='bg-gray-100 mx-4  '>

    <div>
    <div class="bg-gray-100 my-4">
   <div class="max-w-7xl mx-auto grid grid-cols-12 bg-gray-100">
     <div class="col-span-4 ">
     <Text1>S/N</Text1>
     <p className='pl-3 pt-7 md:pt-3'>1</p> 
            
        </div>
     <div class="col-span-4 bg-gray-100"> 
     <Text1>Semesters</Text1>
     <p className='pl-3 pt-8 md:pt-4 text-sm leading-5 text-gray-600'>Semester 1</p>
        </div>

     <div class="col-span-4">
     <Text2> Course unit</Text2> 

     <div className="reducesize pl-2 py-2">
   <select > 
    <option selected>22 </option> 
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
    
     <p className='pl-3 pt-8 md:pt-4 text-sm leading-5 text-gray-600'>Semester 2</p>
        </div>

     <div class="col-span-4">
 

     <div className="reducesize pl-2 py-2">
   <select >
    <option selected>24</option> 
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
   
     <p className='pl-3 pt-8 md:pt-4 text-sm leading-5 text-gray-600'>Semester 3</p>
        </div>

     <div class="col-span-4">
     

     <div className=" reducesize pl-2 py-2">
   <select className='' >
    <option selected>22 </option> 
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
   
     <SelectAcademicYearRoot>What is your current CGPA </SelectAcademicYearRoot>  
        </div>
     <div class="col-span-3 bg-gray-100"> 
 
     
        </div>

     <div class="col-span-4">
     

     <Input type="text" placeholder="3.5" />

        </div>
   </div>
  </div>
    </div>



    <div>
    <div class="bg-gray-100 my-4">
   <div class="max-w-7xl mx-auto grid grid-cols-12 bg-gray-100">
     <div class="col-span-5">
   
     <SelectAcademicYearRoot>What is the total number of units you have taken so far in all semesters </SelectAcademicYearRoot>  
        </div>
     <div class="col-span-3 bg-gray-100"> 
 
     
        </div>

     <div class="col-span-4">
     

     <Input type="text" placeholder="89" /> 

        </div>
   </div> 
  </div>
    </div>
    
    <div class='justify'> 
     <RectangleRoot>
      <p className='text-white '>Calculate</p> 
    </RectangleRoot>
     </div>




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


const Input = styled.input`
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

  ::placeholder {
    color: grey;
  }


  @media ${devices.tablet} {
    width: 120px;    
  } 

  @media ${devices.mobileL} {
    width: 60px;    
  } 

 
`;

const Text1 = styled.div`
  mix-blend-mode: normal;
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 21.21px;
  color: #787878;
  margin: 0px 250px 0px 0px;
  margin-left: 8px;
  padding-bottom: 0px;  


  @media ${devices.mobileL} {
    padding-bottom: 20px;    
  } 

  @media ${devices.tablet} {
    padding-bottom: 20px;    
  } 

  
`;

const Text2 = styled.div`
  mix-blend-mode: normal;
  font-size: 18px;
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
  width: 130px;
  height: 50px;
  background-color: #2d0353;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-top: 20px;
  text-align: center;
 
`;





export default CGPAForecasterInputCom; 