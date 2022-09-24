
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';   
import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components"; 

import { useHistory } from 'react-router-dom';
import { useToken } from '../auth/useToken'; 

 //npm install firebase@9.1.3 

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
      // eslint-disable-next-line 
  const [token, setToken] = useToken();
  const history = useHistory();
   
  const logOut = () => { 
    localStorage.removeItem('customtoken'); 
    history.push('/login');  
}

    return (
      <> 
        <nav className=" md:ml-64 py-6 px-3  bg-white"> 
            <div className="container  max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10  bg-white">   
                <div className="md:hidden">
                    <Button
                        color="transparent"
                        buttonType="link"  
                        size="lg"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <Icon name="menu" size="2xl" color="black" /> 
                    </Button>
                    
                    <div
                        className={`absolute sm:left-7 top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`} 
                    >
                      
                    </div>

                    
                </div>
                
                <WhiteFlexRow>
             <Element8>
             <Image13
              src={`https://file.rendit.io/n/v3VySeVRiUR9y4f0SrO7.svg`}
            />
            <Element9>
              <Ellipse
                src={`https://file.rendit.io/n/1yJrdvX0bLdopIwSdpKc.svg`}
              />
              <Text9>4</Text9>
            </Element9>
          </Element8>
          <FlexRow7 gap={`9px`}>
          
            <Image14
              src={`https://file.rendit.io/n/uEEmqxF9L70TUSggeNY6.svg`}
            />
            <Link to="/help">
            <Text10 color={`#2d0353`}>Help</Text10>
            </Link>
          </FlexRow7>
          <FlexRow7 gap={`10px`}>
            <Image15
              src={`https://file.rendit.io/n/9H9ckLV3IMzBA6LkmH5S.svg`}
            />
            <Text10 className="cursor-pointer" onClick={logOut} color={`#505050`}>Logout</Text10>
          </FlexRow7>
        </WhiteFlexRow>
      
              
            </div>
        </nav>
        <div className='flex  justify-center '>

        <Paragraph>UNIGIG</Paragraph> 
     

        </div>

<br />
<br />

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
  mobileL: `(max-width: ${sizes.mobileL})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};




const Paragraph = styled.div`
font-size: 36px;
font-family: Product Sans Medium;
line-height: 34.92px;
color: #2d0353;
text-align: center;
padding-top:10px;; 
font-weight: bold;

@media ${devices.tablet} { 

 
} 


@media ${devices.mobileL} { 
  
  padding-left: 25px;
  font-size: 26px; 
} 
`; 



const WhiteFlexRow = styled.div`
  // box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.05);
  
  width: 1079px;
  background-color: #ffffff;
  display: flex;
  align-self: center;
  flex-direction: row;
  justify-content: flex-end;
  gap: 26px;
  align-items: flex-end;
  padding: 14px 62px 12px 62px;
  margin: 0px 0px 45px 0px;
 
 

`;
const Element8 = styled.div`
  width: 24px;
  height: 24px;
  align-self: center;
  position: relative;
`;
const Image13 = styled.img`
  width: 20px;
  height: 24px;
  position: absolute;
`;
const Element9 = styled.div`
  width: 14px;
  height: 15px;
  position: absolute;
  top: 1px;
  left: 10px;
`;
const Ellipse = styled.img`
  width: 14px;
  height: 14px;
  position: absolute;
  top: 1px;
`;
const Text9 = styled.div`
  font-size: 10px;
  font-family: Roboto;
  line-height: 15px;
  color: #ffffff;
  position: absolute;
  left: 4px;
`;
const Image14 = styled.img`
  width: 15px;
  height: 15px;
`;
const Image15 = styled.img`
  width: 12px;
  height: 12px;
  align-self: flex-end;
  margin: 0px 0px 4px 0px;
`;
const FlexRow7 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px 0px 1px 0px;
  gap: ${(props) => props.gap};
`;

const Text10 = styled.div`
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: ${(props) => props.color};
`;

