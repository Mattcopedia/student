import React from 'react'
import styled from "styled-components"; 

const CGPACalculatorinputCom = () => {
  return (

    <>
      <div className='bg-gray-100'>

    <div>
    <div class="bg-gray-100 my-4">
   <div class="max-w-7xl mx-auto grid grid-cols-12 bg-gray-100">
     <div class="col-span-4">
     <Text1>Course code</Text1>
     <WhiteText>STA 202</WhiteText>
        </div>
     <div class="col-span-4 bg-gray-100"> 
     <Text1>Course unit</Text1>
     <div className=" reducesize  pl-2 py-2">
   <select className='' >
    <option selected>4 </option>  
    <option>3</option>
    <option>2</option> 
    <option>1</option>
    <option>5</option>
   </select> 

    </div> 
        </div>

     <div class="col-span-4">
     <Text1> Projected grade</Text1>

     <div className=" reducesize pl-2 py-2">
   <select className='' >
    <option selected>A </option> 
    <option>B</option>
    <option>C</option>
    <option>D</option>
    <option>E</option> 
   </select> 

    </div> 

        </div>
   </div> 
  </div>
    </div>

    <div>
    <div class="bg-gray-100">
   <div class="max-w-7xl mx-auto grid grid-cols-12 bg-gray-100">
     <div class="col-span-4">
     <Text1>Course code</Text1>
     <WhiteText>STA 202</WhiteText>
        </div>
     <div class="col-span-4 bg-gray-100"> 
     <Text1>Course unit</Text1>
     <div className=" reducesize  pl-2 py-2">
   <select className='' >
    <option selected>4 </option> 
    <option>3</option>
    <option>2</option> 
    <option>1</option>
    <option>5</option>
   </select> 

    </div> 
        </div>

     <div class="col-span-4">
     <Text1> Projected grade</Text1>

     <div className=" reducesize pl-2 py-2">
   <select className='' >
    <option selected>A </option> 
    <option>B</option>
    <option>C</option>
    <option>D</option>
    <option>E</option> 
   </select> 

    </div> 

        </div>
   </div>
  </div>
    </div>

    <div>
    <div class="bg-gray-100 first:my-4">
   <div class="max-w-7xl mx-auto grid grid-cols-12 bg-gray-100">
     <div class="col-span-4">
     <Text1>Course code</Text1>
     <WhiteText>STA 202</WhiteText>
        </div>
     <div class="col-span-4 bg-gray-100"> 
     <Text1>Course unit</Text1>
     <div className=" reducesize  pl-2 py-2">
   <select className='' >
    <option selected>4 </option> 
    <option>3</option>
    <option>2</option> 
    <option>1</option>
    <option>5</option>
   </select> 

    </div> 
        </div>

     <div class="col-span-4">
     <Text1> Projected grade</Text1>

     <div className=" reducesize pl-2 py-2">
   <select className='' >
    <option selected>A </option> 
    <option>B</option>
    <option>C</option>
    <option>D</option>
    <option>E</option> 
   </select> 

    </div> 

        </div>
   </div>
  </div>
    </div>

    <div>
    <div class="bg-gray-100">
   <div class="max-w-7xl mx-auto grid grid-cols-12 bg-gray-100">
     <div class="col-span-4">
     <Text1>Course code</Text1>
     <WhiteText>STA 202</WhiteText>
        </div>
     <div class="col-span-4 bg-gray-100"> 
     <Text1>Course unit</Text1>
     <div className=" reducesize pl-2 py-2"> 
   <select className='' >
    <option selected>4 </option> 
    <option>3</option>
    <option>2</option> 
    <option>1</option>
    <option>5</option>
   </select> 

    </div> 
        </div>

     <div class="col-span-4">
     <Text1> Projected grade</Text1>

     <div className=" reducesize pl-2 py-2">
   <select className='' >
    <option selected>A </option> 
    <option>B</option>
    <option>C</option>
    <option>D</option>
    <option>E</option> 
   </select> 

    </div> 

        </div>
   </div> 
  </div> 
    </div>
 
    
    <div class='justify'> 
     <RectangleRoot>
      <p className='text-white pl-8  '>Calculate CGPA</p> 
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
 
`;



export default CGPACalculatorinputCom