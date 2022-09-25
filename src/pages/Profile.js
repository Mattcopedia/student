import Sidebar from "components/Sidebar";
import React, {useState, useEffect} from 'react'
import styled from "styled-components"; 
import "../components/br.css"  
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "./Calendar.css"; 


export default function Dashboard() {
  const [data, setData] = useState([]);

  

  useEffect(() => {
    const dataname = JSON.parse(localStorage.getItem('data'));
    if (data) {
     setData(dataname);
    }
  }, [data]);
 
  
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

    return (
        <>
          
         <Sidebar /> 
 
         <div>
           
         <div className="mx-7 my-4 ">
                   
                   <div className="container mx-auto mb-4 bg-gray-100 "> 
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                           <div className="flex justify-center text-6xl border-2 -300 bg-gray-100  p-6 ">
                            
                           <NeonCarrotFlexRow>
                    <FlexColumn width={`148px`}>
                        <Text1>Total course taken</Text1>
                        <Text2>40</Text2>
                        </FlexColumn>
                        <Image1 src={`https://file.rendit.io/n/9Vr3KV0eOirqoe47C5Ev.svg`} />
                    </NeonCarrotFlexRow>
                           
                           </div>
                            
                                 
                                
                           <div className="flex justify-center text-6xl border-2  bg-gray-100 p-6 ">
                              
                           <NeonCarrotFlexRow>
                    <FlexColumn width={`148px`}>
                        <Text1>Ongoing course</Text1>
                        <Text2>10</Text2>
                        </FlexColumn>
                        <Image1 src={`https://file.rendit.io/n/9Vr3KV0eOirqoe47C5Ev.svg`} />
                    </NeonCarrotFlexRow>

                         

                           </div>
                         



                           <div className="flex flex-row justify-center text-6xl border-2 bg-gray-100   p-6 ">

                           <NeonCarrotFlexRow>
                    <FlexColumn width={`148px`}>
                        <Text1>Total semester unit</Text1>
                        <Text2>22</Text2>
                        </FlexColumn>
                        <Image1 src={`https://file.rendit.io/n/kYmx87PyQZ8Krv45vTCp.svg`} />
                    </NeonCarrotFlexRow>


                          


                               </div>
       
       
                           <div className="flex justify-center text-6xl border-2 bg-gray-100 p-6 "> 

                           <NeonCarrotFlexRow>
                    <FlexColumn width={`148px`}>
                        <Text1>Total outstanding</Text1>
                        <Text2>2</Text2>
                        </FlexColumn>
                        <Image1 src={`https://file.rendit.io/n/Fwb5YADEIAmUKf5EqQd2.svg`} />
                    </NeonCarrotFlexRow>

                           </div>
                            
                       </div>
                         </div>
                         </div>  

                         <div class="flex flex-wrap">
                <div class="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/3 mb-4   mx-  mt-4">
                <WhiteFlexColumnRootyw>
                    <Ellipseyw src={`https://file.rendit.io/n/tsYpb8jtUOnBDZAMizwM.png`} />
                    <FlexColumnyw>
                      <Text1yw>Department</Text1yw>
                      <Text2yw>{data.programme}</Text2yw>
                    </FlexColumnyw>

                    <FlexColumnyw>
                      <Text1yw>Matric No:</Text1yw>
                      <Text2yw>{data.userId}</Text2yw>
                    </FlexColumnyw>

                    <FlexColumn1yw>
                      <Text3yw></Text3yw>
                      <Text4yw></Text4yw>
                    </FlexColumn1yw>


                    
      <div className="bg-gray-100"> 
      <Link to="/profile-edit">
      <button className="editprofile"> Edit Profile</button> 
      </Link>
      
      </div>
      
    </WhiteFlexColumnRootyw>
    
    </div>

  <div class="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/3 mb-4 ">
  <WhiteFlexRowRootzw>
      <FlexColumnzw>
        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text1zw margin={`0`}>First name</Text1zw>
          <Text2zw alignSelf={`inherit`}>{data.firstName}</Text2zw>
        </FlexColumn1zw>
        <FlexColumn1zw margin={`0`}>
          <Text1zw margin={`0px 0px 0px 1px`}>Last name</Text1zw>
          <Text2zw alignSelf={`inherit`}>{data.lastName}</Text2zw>
        </FlexColumn1zw>
        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text1zw margin={`0`}>Email</Text1zw>
          <Text2zw alignSelf={`inherit`}>{data.email}</Text2zw>
        </FlexColumn1zw>
        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text1zw margin={`0`}>Phone number</Text1zw>
          <Text2zw alignSelf={`inherit`}>{data.phone}</Text2zw>
        </FlexColumn1zw>
        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text9zw>Parent Phone number</Text9zw>
          <Text2zw alignSelf={`flex-start`}>{data.phone}</Text2zw>
        </FlexColumn1zw>

        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text1zw margin={`0`}>Address</Text1zw>
          <Text2zw alignSelf={`inherit`}>{data.address}</Text2zw>
        </FlexColumn1zw>

        <FlexColumn1zw margin={`0px 0px 0px 1px`}>
          <Text1zw margin={`0`}>Religion</Text1zw>
          <Text2zw alignSelf={`inherit`}>Christianity</Text2zw>
        </FlexColumn1zw>
      </FlexColumnzw>
    </WhiteFlexRowRootzw> 
    
    </div>
  <div class="w-full sm:w-1/1 md:w-1/1 lg:w-1/2 xl:w-1/3 mb-4  "> 

  <NewRootRootaw>
  <div>
      <Calendar  onChange={onChange} value={date} />
    </div>
    </NewRootRootaw>

  <NewRootRootaw>
      <WhiteFlexRowaw>
        <FlexColumnaw>
          <Text1aw>Current CGPA</Text1aw>
          <Element3aw>
            <Text2aw>Good standing</Text2aw>
            <Text3aw>Remark</Text3aw>
          </Element3aw>
        </FlexColumnaw>
        <Element4aw>
          <Ellipseaw src={`https://file.rendit.io/n/uYk4IVrP6yzejXqIzE2d.svg`} />
          <Ellipse1aw>
            <Text4aw>4.29</Text4aw>
            <Element2aw>86% </Element2aw>
          </Ellipse1aw>
        </Element4aw>
      </WhiteFlexRowaw> 
    </NewRootRootaw>
    </div>
  
</div>



                         {/* <div class="flex flex-wrap">
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">1</div>
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400">2</div>
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-500">3</div>
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 bg-gray-400">4</div>
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-500">5</div>
  <div class="w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/6 mb-4 bg-gray-400">6</div> 
</div> */}
                        
         </div>
        </>
    ); 
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
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
  };


const FlexColumn = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 13px;
  flex-grow: 1;
  align-items: center;
  width: ${(props) => props.width};
`;
const Text1 = styled.div`
  font-size: 18px;
  font-family: Roboto;
  line-height: 27.09px;
  color: #505050;
`;
const Text2 = styled.div`
  font-size: 36px;
  font-family: Roboto;
  line-height: 54.18px;
  color: #505050;
  align-self: flex-start;
`;

const NeonCarrotFlexRow = styled.div`
  width: 239px;
  background-color: rgba(242, 153, 74, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 31px;
  align-items: flex-start;
  border-radius: 10px;
  padding: 18px 15px 17px 15px;
`;
const Image1 = styled.img`
  width: 50px;
  height: 50px;
`;











const WhiteFlexColumnRootyw = styled.div`
  max-height: 500px;
  background-color: #FAFAFA;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  padding: 41px 43px 30px 44px;
  margin-left: 10px; 
  margin-bottom: 10px; 
  margin-top: 1px;
  
`;
const Ellipseyw = styled.img`
  max-width: 141px;
  height: 141px;
  margin: 0px 0px 25px 0px;
`;
const FlexColumnyw = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 15px 0px;
`;
const Text1yw = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #2d0353;
`;
const Text2yw = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #2d0353;
  align-self: flex-start;
  margin: 0px 0px 0px 2px;
`;
const FlexColumn1yw = styled.div`
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 89px 13px;
`;
const Text3yw = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #2d0353;
  align-self: flex-end;
  margin: 0px 14px 0px 0px;
`;
const Text4yw = styled.div`
  font-size: 18px;
  font-family: Product Sans Medium;
  line-height: 17.46px;
  color: #2d0353;
`;








const FlexColumn1zw = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const Text1zw = styled.div`
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  color: #b3b1b1;
  align-self: flex-start;
  margin: ${(props) => props.margin};
`;
const Text2zw = styled.div`
  font-size: 16px;
  font-family: Roboto;
  line-height: 24px;
  color: #505050;
  align-self: ${(props) => props.alignSelf};
`;





const WhiteFlexRowRootzw = styled.div`
  max-width: 409px;
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  padding: 45px 58px;
  margin-left: 5px;
  margin-right:5px; 
  margin-top: 15px; 
`;



const FlexColumnzw = styled.div`
  width: 348px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: space-between;
  align-items: flex-start;
`;
const Text9zw = styled.div`
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  color: #b3b1b1;
`;



const NewRootRootaw = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-left: 3px;  

  @media ${devices.tablet} {
    margin-left: 10px;   
  }  
`;
const WhiteFlexRowaw = styled.div`
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: flex-end;
  padding: 18px 19.62px 14.62px 25px;
`;
const FlexColumnaw = styled.div`
  align-self: stretch;
  width: 113px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 43px;
  flex-grow: 1;
  align-items: center;
`;
const Text1aw = styled.div`
  width: 113px;
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  color: #2d0353;
`;
const Element3aw = styled.div`
  width: 91px;
  height: 37px;
  align-self: flex-start;
  position: relative;
`;
const Text2aw = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #219653;
  position: absolute;
  top: 16px;
`;
const Text3aw = styled.div`
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  color: #505050;
  position: absolute;
`;
const Element4aw = styled.div`
  width: 134.38px;
  height: 134.38px;
  position: relative;
`;
const Ellipseaw = styled.img`
  width: 98.27px;
  height: 98.71px;
  position: absolute;
  top: 17.83px;
  left: 17.83px;
`;
const Ellipse1aw = styled.div`
  width: 98.72px;
  height: 98.05px;
  background-image: url("https://file.rendit.io/n/LjB8CCPvYHdy8pivKn1i.svg");
  background-size: cover;
  position: absolute;
  top: 18.5px;
  left: 17.83px;
`;
const Text4aw = styled.div`
  width: 47.08px;
  height: 22.02px;
  font-size: 20px;
  font-family: Product Sans Black;
  line-height: 19.4px;
  color: #2d0353;
  position: absolute;
  top: 32.5px;
  left: 27.17px;
`;
const Element2aw = styled.div`
  width: 25.82px;
  height: 20.5px;
  font-size: 13.67px;
  font-family: Roboto;
  line-height: 20.57px;
  color: #219653;
  position: absolute;
  top: 54.52px;
  left: 38.08px;
  white-space: pre-wrap;
`;