import React from 'react'
import styled from 'styled-components'


import Maps from './Maps';
import MapSidebar from './MapSidebar';
 
const UniversityMaps = () => {
  return (
    <> 
    <MapSidebar /> 
   

  
    <div className='pl-5 pb-7'>
    <UniversityMapRoot>University Map
      
      </UniversityMapRoot> 
    </div>
    <Maps /> 
     
   

    <div className='pl-5 pt-5 pb-7'>
    <UniversityMapRoot>Key</UniversityMapRoot>
    </div>

    <div className='pb-3 pl-5'>
    <GroupRoot>
      <FlexRow alignSelf={`inherit`}>
        <Image1 src={`https://file.rendit.io/n/hh65caQ0zkz10IE4FHLq.svg`} />
        <Text1 alignSelf={`inherit`}>Lecture hall</Text1>
      </FlexRow>
      <FlexRow alignSelf={`inherit`}>
        <Image2 src={`https://file.rendit.io/n/MkGgYVqmyToQ1Rl7QwVU.svg`} />
        <Text1 alignSelf={`inherit`}>Library</Text1>
      </FlexRow>
      <FlexRow alignSelf={`inherit`}>
        <Image3 src={`https://file.rendit.io/n/TZ7fwWbDJgC1miVAwSAd.svg`} />
        <Text1 alignSelf={`inherit`}>Senate</Text1>
      </FlexRow>
      <FlexRow alignSelf={`inherit`}>
        <Image4 src={`https://file.rendit.io/n/SV4mY0jPxGQRtxJbjXmO.svg`} />
        <Text1 alignSelf={`inherit`}>Hospital </Text1>
      </FlexRow>
      <FlexRow alignSelf={`inherit`}>
        <Image5 src={`https://file.rendit.io/n/yyLFf5KfqzsdWgLrqMe0.svg`} />
        <Text1 alignSelf={`inherit`}>church</Text1>
      </FlexRow>
      <FlexRow alignSelf={`inherit`}>
        <Image6 src={`https://file.rendit.io/n/ymEQQv4LyamTxlaL1LRF.svg`} />
        <Text1 alignSelf={`inherit`}>Mosque</Text1>
      </FlexRow>
    </GroupRoot>
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
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
  };




const UniversityMapRoot = styled.div`
  font-size: 18px;
  font-family: Product Sans Black;
  line-height: 17.46px;
  color: #2d0353;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  justify-content: center;
  align-items: center;
  align-self: ${(props) => props.alignSelf};
`;
const Text1 = styled.div`
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  color: #505050;
  align-self: ${(props) => props.alignSelf};
`;
const GroupRoot = styled.div`
  max-width: 732.43px;
  display: flex;
  flex-direction: row;
  gap: 45px;
  justify-content: space-between;
  align-items: flex-start;

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
  }  
`;
const Image1 = styled.img`
  width: 13px;
  height: 14px;
`;
const Image2 = styled.img`
  width: 12px;
  height: 13px;
  align-self: flex-start;
  margin: 1px 0px 0px 0px;
`;
const Image3 = styled.img`
  width: 16.43px;
  height: 17px;
`;
const Image4 = styled.img`
  width: 12px;
  height: 14px;
`;
const Image5 = styled.img`
  width: 15px;
  height: 16px;
`;
const Image6 = styled.img`
  width: 17px;
  height: 14.17px;
  align-self: flex-start;
`;


export default UniversityMaps