

import React from 'react'
import img1 from "../assets/img/image 1.PNG";
import img2 from "../assets/img/image2.PNG";  
import styled from "styled-components"; 
import './br.css';
import Sidebar from './Sidebar';

const StudentUnionAffairs = () => {
  return (
    
   
    <> 
     <Sidebar />  

     <section class=" mb-4 body-font overflow-hidden"> 
  <div class="container ">
    <div class="flex flex-wrap ">
      <div class=" md:w-1/2 flex flex-col pb-2 -m-5 items-start">
        <div class="flex items-center flex-wrap  w-full">

         <img width={700} height={700} src={img1} alt="Student Affairs" />

         {/* -m-7 */}

        </div>
      </div>

      <div class="md:w-1/2 flex flex-col items-start ">
        <div class="flex items-center flex-wrap w-full">
         
         <img width={1000} height={1000} src={img2} alt="Student Affairs" />
        
        </div>
      
      </div>
    </div>
  </div>
</section>
 
     <div>

     <div className='mb-5 mt-5 '>
     <GroupRoot>
      <Text1>Mission</Text1> 
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
        ullamcorper <br className="responsive"></br> arcu quis risus tristique. Lectus tristique proin sem felis.
        Duis pulvinar purus <br className="responsive"></br> mauris consectetur mauris enim. Sodales curabitur
        elit aliquam pellentesque <br className="responsive"></br> nunc turpis platea. Gravida ultrices in porta.
        sed. Mauris a, tellus, eu volutpat <br className="responsive"></br> vestibulum egestas gravida lorem
        quisque. Et at viverra velit augue felis 
        <br />
      </Paragraph>
    </GroupRoot>
    </div>

    <div className='my-10 mt-20 mb-20'>
    <GroupRoot>
      <Text1>Vision</Text1> 
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
        ullamcorper <br className="responsive"></br> arcu quis risus tristique. Lectus tristique proin sem felis.
        Duis pulvinar purus <br className="responsive"></br> mauris consectetur mauris enim. Sodales curabitur
        elit aliquam pellentesque <br className="responsive"></br> nunc turpis platea. Gravida ultrices in porta.
        sed. Mauris a, tellus, eu volutpat <br className="responsive"></br> vestibulum egestas gravida lorem
        quisque. Et at viverra velit augue felis enim 
        <br />
      </Paragraph>
    </GroupRoot>
    </div>
     </div>

     <div className="mx-7 my-4 ">
            <div className="container  mx-auto mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="flex justify-center text-6xl border-2    p-6 bg-gray-100   ">  

                    <GroupRoot2>
                        <Image2 src={`https://file.rendit.io/n/314h1yV8rOR3RueMrmmu.png`} />
                        <WhiteFlexColumn>
                            <Text2>John Collins</Text2>
                            <Text3>Student president</Text3>
                            <Text4>Studentpresident@university.com</Text4>
                        </WhiteFlexColumn>
                        </GroupRoot2>
                  
                    </div> 



                    <div className="flex justify-center text-6xl border-2 bg-gray-100  p-6 ">
                    <GroupRoot2>
                    <Image2 src={`https://file.rendit.io/n/314h1yV8rOR3RueMrmmu.png`} />
                        <WhiteFlexColumn>
                            <Text2>John Collins</Text2>
                            <Text3>Student president</Text3>
                            <Text4>Studentpresident@university.com</Text4>
                        </WhiteFlexColumn>
                        </GroupRoot2>
                    </div> 

                    <div className="flex  justify-center text-6xl border-2 bg-gray-100 p-6 ">
                        
                        
                    <GroupRoot2>
                    <Image2 src={`https://file.rendit.io/n/314h1yV8rOR3RueMrmmu.png`} />
                        <WhiteFlexColumn>
                            <Text2>John Collins</Text2>
                            <Text3>Student president</Text3>
                            <Text4>Studentpresident@university.com</Text4>
                        </WhiteFlexColumn>
                        </GroupRoot2>    
                        
       
                        </div>
                            

                    <div className="flex justify-center text-6xl border-2 bg-gray-100   p-6 ">

                    <GroupRoot2>
                    <Image2 src={`https://file.rendit.io/n/314h1yV8rOR3RueMrmmu.png`} />
                        <WhiteFlexColumn>
                            <Text2>John Collins</Text2>
                            <Text3>Student president</Text3>
                            <Text4>Studentpresident@university.com</Text4>
                        </WhiteFlexColumn>
                        </GroupRoot2>  

                    </div> 

                </div>
                  </div> 
                   
                   <div className="container mx-auto mb-4"> 
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                           <div className="flex justify-center text-6xl border-2 -300 bg-gray-100  p-6 ">
                            
                           <GroupRoot2>
                           <Image2 src={`https://file.rendit.io/n/314h1yV8rOR3RueMrmmu.png`} />
                        <WhiteFlexColumn>
                            <Text2>John Collins</Text2>
                            <Text3>Student president</Text3>
                            <Text4>Studentpresident@university.com</Text4>
                        </WhiteFlexColumn>
                        </GroupRoot2>
                           
                           </div>
                            
                                 
                                
                           <div className="flex justify-center text-6xl border-2  bg-gray-100 p-6 ">
                           <GroupRoot2>
                           <Image2 src={`https://file.rendit.io/n/314h1yV8rOR3RueMrmmu.png`} />
                        <WhiteFlexColumn>
                            <Text2>John Collins</Text2>
                            <Text3>Student president</Text3>
                            <Text4>Studentpresident@university.com</Text4>
                        </WhiteFlexColumn>
                            </GroupRoot2>
                           </div>
                         



                           <div className="flex flex-row justify-center text-6xl border-2 bg-gray-100   p-6 ">

                           <GroupRoot2>
                           <Image2 src={`https://file.rendit.io/n/314h1yV8rOR3RueMrmmu.png`} />
                        <WhiteFlexColumn>
                            <Text2>John Collins</Text2>
                            <Text3>Student president</Text3>
                            <Text4>Studentpresident@university.com</Text4>
                        </WhiteFlexColumn>
                        </GroupRoot2>

                               </div>
       
       
                           <div className="flex justify-center text-6xl border-2 bg-gray-100 p-6 "> 
                           <GroupRoot2>
                           <Image2 src={`https://file.rendit.io/n/314h1yV8rOR3RueMrmmu.png`} />
                        <WhiteFlexColumn>
                            <Text2>John Collins</Text2>
                            <Text3>Student president</Text3>
                            <Text4>Studentpresident@university.com</Text4>
                        </WhiteFlexColumn> 

                        </GroupRoot2>
                           </div>
                            
                       </div>
                         </div>
                         </div>  
              
                        <div className='mx-'> 
                          <RootRoot>
                    <Text5>For more information Contact </Text5>
                    <Text6>+2345893746377</Text6>
                    <Text7>studentunionhelp@university.com</Text7>
                    </RootRoot> 
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


const GroupRoot = styled.div`
  margin-bottom: 10px; 

  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: center;

  @media ${devices.mobileL} { 
    margin-bottom: 180px;  
    margin-left: 20px; 
  }  

`;
const Text1 = styled.div`
  font-size: 18px;
  font-family: Product Sans Black;
  line-height: 17.46px;
  color: #2d0353;
  align-self: flex-start;
  margin: 0px 0px 0px 1px;
`;
const Paragraph = styled.div`

  height: 81px;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
`;



const GroupRoot2 = styled.div`
  width: 243px;
  height: 320px;
  margin-bottom: 50px; 
  
`;
const Image2 = styled.img`
  width: 243px;
  height: 291px;

`;
const WhiteFlexColumn = styled.div`
  background-color: #f0f0f0;
  display: flex;
  top: 224px; 
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;
  padding: 16px 31px 23px 32px;

  @media ${devices.mobileL} { 
    padding: 8px 15px 12px 16px;
  }  

`;
const Text2 = styled.div`
  font-size: 18px;
  font-family: Product Sans Black;
  line-height: 17.46px;
  color: #2d0353;
`;
const Text3 = styled.div`
  width: 95px;
  height: 14px;
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  color: #df8909;
`;
const Text4 = styled.div`
  width: 180px;
  height: 14px;
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  color: #505050;
  align-self: center;
`;

const RootRoot = styled.div`
  width: 275px;
  height: 71px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  justify-items: center;  
  margin: auto;
`;
const Text5 = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #2d0353;
  margin: 0px 0px 12px 0px;
  white-space: pre-wrap;
`;
const Text6 = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
  margin: 0px 64px 0px 0px;
`;
const Text7 = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;

`;

export default StudentUnionAffairs