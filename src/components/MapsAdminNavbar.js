import React from "react";
import { Link} from 'react-router-dom';
import styled from "styled-components";  

 //npm install firebase@9.1.3 

export default function MapsAdminNavbar() { 


    return (
        <nav className=" md:ml-64 py-6 px-3  bg-white"> 

            <div className="container  max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10  bg-white">  
            <RectangleRoot> 
      <FlexRow>
        <Image1 src={`https://file.rendit.io/n/R8vAzpYWat3uOy1wubN2.svg`} />
        <Link to="/">
        <Text1>Dashboard</Text1>
        </Link> 
      </FlexRow>
      <FlexRow1>
        <Element2>
          <Image2 src={`https://file.rendit.io/n/81mMghThw3vw762WJw7q.svg`} />
          <Element3>
            <Ellipse
              src={`https://file.rendit.io/n/iVO3R1QrEAVix3CxV9kj.svg`}
            />
            <Text2>4</Text2>
          </Element3>
        </Element2>
        <FlexRow2>
          <Image3 src={`https://file.rendit.io/n/41o6Ib9oVd52TMdAMA9F.svg`} />
          <Link to="/help">
          <Text3>Help</Text3>
          </Link>
        </FlexRow2>
        <FlexRow3>
          <Image4 src={`https://file.rendit.io/n/U9lp82q3iNR4FgjDusu6.svg`} />
          <Text4>Logout</Text4>
        </FlexRow3>
      </FlexRow1>
    </RectangleRoot>
      
              
            </div>
        </nav>
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
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
  };

const RectangleRoot = styled.div`
  width: 1083px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #ffffff;
 
`;
const FlexRow = styled.div`
  height: 16px;
  gap: 8.59px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: flex-start;
  align-items: flex-start;
  margin: 3px 0px 0px 0px;
  @media ${devices.laptop} {
    visibility:hidden;
  }  
 
`;
const Image1 = styled.img`
  width: 7.41px;
  height: 12px;
  align-self: flex-end;
`;
const Text1 = styled.div`
  width: 78px;
  height: 15px;
  color: #505050;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
 
`;
const FlexRow1 = styled.div`
  width: 195px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
const Element2 = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  align-self: center;
`;
const Image2 = styled.img`
  width: 20px;
  height: 24px;
  position: absolute;
`;
const Element3 = styled.div`
  width: 14px;
  height: 15px;
  left: 10px;
  top: 1px;
  position: absolute;
`;
const Ellipse = styled.img`
  width: 14px;
  height: 14px;
  top: 1px;
  position: absolute;
`;
const Text2 = styled.div`
  left: 4px;
  position: absolute;
  color: #ffffff;
  font-size: 10px;
  font-family: Roboto;
  line-height: 15px;
  white-space: nowrap;
`;
const FlexRow2 = styled.div`
  gap: 9px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 1px 0px;
`;
const Image3 = styled.img`
  width: 15px;
  height: 15px;
`;
const Text3 = styled.div`
  color: #2d0353;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
`;
const FlexRow3 = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 1px 0px;
`;
const Image4 = styled.img`
  width: 12px;
  height: 12px;
  align-self: flex-end;
  margin: 0px 0px 4px 0px;
`;
const Text4 = styled.div`
  color: #505050;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  white-space: nowrap;
`;


