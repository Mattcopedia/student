

import React, { useRef} from 'react'
import styled from "styled-components";  
import "../br.css" 
import Sidebar from 'components/Sidebar';
 
 
const UploadDoc = () => {
 
    const focusDiv = useRef();

    
    if(focusDiv.current) {
      focusDiv.current.focus(); 
    }
    return  ( 
        <>



        <Sidebar />
     


        <section className=" mb-4 mx-auto body-font overflow-hidden bg-white"> 
        <div className="container ">
          <div className="flex flex-wrap ">       
              <div className="flex mx-auto items-center flex-wrap w-full ">
  
              <RootRoot>
             
            <div>
            <FlexColumn>
              
                           
                <FlexColumn1>
                

                     
             
                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor="OldPassword"> Select Course</Text4>        
                 <div className="amendment  pr-16 md:pr-0 lg:pr-0 ">
                <select>
                    <option selected>CSC 201 </option> 
                    <option>CSC 201 </option>
                    <option>CSC 201 </option>
                    <option>CSC 201 </option>
                    <option>CSC 201 </option> 
                </select> 

                </div> 
  
                 </FlexColumn2> 

                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 

                 <Text4 htmlFor=""> Description</Text4>        
                
                 <Input ref={focusDiv} rows="4" cols="46"  placeholder='Assignment for Stat 209'  />
                 </FlexColumn2>


                 <FlexColumn2 margin={`0px 0px 10px 0px`}> 
                 <Text4 htmlFor="OldPassword"> Upload Document</Text4> 
                 <div className='flex border rounded border-solid border-current  mr-16 lg:mr-0 flex-row gap-0'>
                 <Filetext>File22/assignment</Filetext>
                 <Text5 htmlFor="uploadCSV">
                   Browse 
                 <input className='file' id="uploadCSV" type="file"/>
                 </Text5> 
                 </div>       
                 

                 </FlexColumn2>  
               

                    <div className='newbtn mr-14 md:mr-0 lg:mr-0 '>
                    <button className='purplebtn' >Send</button> 
                    </div>
              
                 
               
                </FlexColumn1> 
                <div>
           
             </div>
            </FlexColumn>

            </div>  
            
           </RootRoot>  


              
              </div> 
            
            </div>
          </div>
    
      </section>

       <div> 
       
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



  const Input = styled.textarea`
  width:360px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  color: #bdbdbd;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
  border-style: solid;
  border-color: #787878;
  background-color: #ffffff;
  border-radius: 6px;

 
  border-width: 0.5px;
  ::placeholder {
    color: #bdbdbd;
    font-size: 14px;
    font-family: Roboto;
    line-height: 21px;
    white-space: nowrap;
    padding-left: 8px; 
  }
  :focus {
    padding-left:10px;
  }

  @media ${devices.tablet} { 
  
    margin-right: 60px;
  }

  @media ${devices.mobileL} { 
    width: 280px;
    
  }
`;








const FlexColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Text4 = styled.label`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: flex-start;

  @media ${devices.mobileL} { 
  
    padding-left: 10px;
  }

`;

const Text5 = styled.label`
width: 78px;
height: 40px;

color: #ffffff;
font-size: 14px;
font-family: Roboto;
line-height: 21px;
white-space: nowrap;
border-radius: 6px;
background-color: #2d0353; 
padding-top: 10px;
text-align:center;
cursor:pointer;

`;
const Filetext = styled.div`
width:287px;
height:40px;
padding: 3.5px 2.5px
background-color: #ffffff;
color: #bdbdbd;
font-size: 14px;
font-family: Roboto;
line-height: 21px;
white-space: nowrap;
padding-left:10px;

@media ${devices.mobileL} { 
  width:187px;
 height:40px;
 margin-left: 10px;
 }  


`

const RootRoot = styled.div`


  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
  background-color: #FAFAFA;
  margin-bottom: 170px; 

  @media ${devices.mobileL} { 
    min-width: 100px; 
    margin: 0px;
    overflow: hidden; 
   }  

`;








const FlexColumn = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  padding-right:60px; 
  padding-left:60px; 


  @media ${devices.tablet} {
    margin-left: 90px;

    padding-left:27px;  
    padding-right:40px; 
    margin-left:10px
  }    


  @media ${devices.mobileL} { 
    
    margin-left: 20px;
    
    padding-left:0px;  
    padding-right:0px; 
   
  }  

`;
const FlexColumn1 = styled.div`
  padding-top: 10px; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 5px 0px;

  @media ${devices.mobileL} { 
    margin: 0px 0px 0px 0px;
    margin-right: 145px; 

  } 
`; 








export default UploadDoc; 



// import Sidebar from 'components/Sidebar';
// import React from 'react'
// import styled from "styled-components"; 

// const UploadDoc = () => {
//   return (
//     <>
//     <Sidebar />
//     <div className='bg-white mx-7 md:mx-7 lg:mx-72   my-6'>
//     <UploadDocumentForAssessmentRoot>
//       Upload document for assessment
//     </UploadDocumentForAssessmentRoot>
//     <div className='bg-gray-100 px-11 pt-3 pb-5 mt-7'>
//         <div className='bg-gray-100'>
            
//         <SelectAcademicYearRoot>
//             Select Course      
//         </SelectAcademicYearRoot>
// {/* //pl-3 py-2 */}
            
//         <div className="upload bg-gray-100 pl-3 py-2 ">
//                 <select style={{width: "400px"}}>
//                     <option selected>CSC 201 </option> 
//                     <option>CSC 102</option>
//                     <option>CSC 102</option>
//                     <option>CSC 102</option>
//                     <option>CSC 102</option> 
//                 </select> 

//                 </div> 
            

//                 <SelectAcademicYearRoot1>
//                  Description     
//             </SelectAcademicYearRoot1> 

//             <div className='desc ' >   
//             <textarea  style={{border: "0.5px solid black"}}  rows="4" cols="46" placeholder='Assignment for STAT 200' id="FirstName"/>  
//             </div>
          
//             <SelectAcademicYearRoot2>
//                Upload Document    
//             </SelectAcademicYearRoot2> 

//             <div className='upload'>
//            <input type="file" id="myfile" name="myfile" />
//             </div>

//             <div className='upload'>
//             <button className='sendbtn' type='submit'>Send</button> 
//             </div>
//         </div>

//     </div>
//     <br />
//     <br />
//     <br />
//     </div> 
//     </>
//   )
// }

// const sizes = {
//   mobileS: "320px",
//   mobileM: "375px",
//   mobileL: "425px",
//   tablet: "768px",
//   laptop: "1024px",
//   laptopL: "1440px",
//   desktop: "2560px",
// };
// export const devices = {
//   mobileS: `(min-width: ${sizes.mobileS})`,
//   mobileM: `(min-width: ${sizes.mobileM})`,
//   mobileL: `(max-width: ${sizes.mobileL})`,
//   tablet: `(max-width: ${sizes.tablet})`,
//   laptop: `(min-width: ${sizes.laptop})`,
//   laptopL: `(min-width: ${sizes.laptopL})`,
//   desktop: `(min-width: ${sizes.desktop})`,
// };


// const UploadDocumentForAssessmentRoot = styled.div`
//   mix-blend-mode: normal;
//   font-size: 18px;
//   font-family: Product Sans Medium;
//   line-height: 17.46px;
//   color: #2d0353;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;

// `;


// const SelectAcademicYearRoot = styled.label`
//   font-size: 16px;
//   font-family: Product Sans Medium;
//   line-height: 15.52px;
//   color: #2d0353;
//   margin-left: 20px;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   padding-right: 320px;

//   @media ${devices.mobileL} {  
   
//     margin-left: 20px;
//   } 
// `;

// const SelectAcademicYearRoot1 = styled.label`
//   font-size: 16px;
//   font-family: Product Sans Medium;
//   line-height: 15.52px;
//   color: #2d0353;
//   margin-left: 20px;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   padding-right: 320px;
//   padding-top: 10px;
//   padding-bottom: 10px;
//   padding-right: 333px;

//   @media ${devices.tablet} {  
   
//     margin-left: 35px;
//   } 

//   @media ${devices.mobileL} {  
//     margin-left: 38px;
   
//   } 

// `;

// const SelectAcademicYearRoot2 = styled.label`
// font-size: 16px;
// font-family: Product Sans Medium;
// line-height: 15.52px;
// color: #2d0353;
// margin-left: 20px;
// display: flex;
// flex-direction: row;
// justify-content: center;
// padding-right: 320px;
// padding-top: 10px;
// padding-bottom: 10px;
// padding-right: 333px;

// @media ${devices.tablet} {  
 
//   margin-left: 35px;
// } 

// @media ${devices.mobileL} {  
//   margin-left: 38px;
 
// } 

// `;


// export default UploadDoc