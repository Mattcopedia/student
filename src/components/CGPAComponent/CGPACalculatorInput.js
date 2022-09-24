
import React from 'react'
import Sidebar from 'components/Sidebar';

import styled from "styled-components";
import CGPAlgorithm from './CGPAlgorithm';
import CGPACalculatorinputCom from './CGPACalculatorinputCom';



const CGPACalculatorinput = () => {
  return (
    <>
    <Sidebar />
    <div>
    <div>
        <div className="flex flex-col mx-10 my-4 lg:flex-row bg-red-50 mb-5 "> 
                    <div>  
                    <Text1>CGPA Calculator</Text1>
                <p className=" py-3 px-3 not-italic font-normal text-sm text-gray-900">
  
                    “The function of education is to teach one to think intensively and to
                    think critically. Intelligence plus character – <br></br>
                    that is the goal of
                    true education”
                        
                        <span className="not-italic  ml-2 font-bold text-lg text-purple-900">- Martin Luther King</span> 
                       </p> 
                    </div> 


                    <div className="ml-10 ">

                    <Image1 src={`https://file.rendit.io/n/ZEUVwl4QrVbPA2ZLyjrF.svg`} /> 

                    </div> 
 
           </div>


    </div>

      <SelectAcademicYearRoot>How many courses for the semester do you want to compute? </SelectAcademicYearRoot>  
      <CGPAlgorithm />
      <br/>
     <CGPACalculatorinputCom />
      
    </div>
    </> 
  )
}

const SelectAcademicYearRoot = styled.div`
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  color: #2d0353;
  padding-bottom: 40px; 
  padding-left: 32px;
  padding-top: 20px;
`;

const Image1 = styled.img`
  width: 104px;
  height: 101.35px;
  mix-blend-mode: normal;
`;

const Text1 = styled.div`
  mix-blend-mode: normal;
  font-size: 18px;
  font-family: Product Sans Black;
  line-height: 17.46px;
  color: #2d0353;
  align-self: flex-start;
  padding-left: 16px;
`;




export default CGPACalculatorinput