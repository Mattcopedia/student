import { useState } from 'react';
import styled from "styled-components";  
import MapsAdminNavbar from "./MapsAdminNavbar" 
import { Link, NavLink } from "react-router-dom";  
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';  
import "./br.css"

 
 
export default function MapSidebar() { 

    const [showSidebar, setShowSidebar] = useState('-left-64');
    return (
        <>
            <MapsAdminNavbar
            />
            <div
                className={` fixed   top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden  transition-all duration-300 bg-white`} >  

                         


                <Element7>
                

                <Line src={`https://file.rendit.io/n/HyUCUJJkXhfGGVECnrB6.svg`} />
                <PlumFlexColumn>

                  <div className='md:hidden ml-20 pl-20'>
                       <Button
                           
                            buttonType="link" 
                            size="lg"
                            iconOnly  
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <Icon name="close" size="2xl" color="black" />
                        </Button> 
                  </div>
                

                  <Text1>RAKONI   </Text1>

                     <div className='focus:blue'>
                     <NavLink to="/" exact  >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px 21px 0px 0px`} />
                  
                    <Image1 src={`https://file.rendit.io/n/wf2zhCB3LkjFgVLkb6SX.svg`} />
                    <Text2  margin={`0px 88px 0px 0px`}  >
                      DASHBOARD</Text2> 
             
                  </FlexRow2> 
                  </NavLink>   
             
                     </div>
                  
                  <NavLink to="/profile" exact >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                  <NeonCarrotRectangle margin={`0px -89px 0px 0px`} />
                    <Image1 src={`https://file.rendit.io/n/q3UmzzNSXmCJfIgJLUPl.svg`} />

                    <Link to="/profile" className='text-xs leading-4 text-white  active:text-red-500 hover:text-red-500'>PROFILE</Link>     
                                 
                  </FlexRow2>   
                  </NavLink>   


                  <NavLink to="/result" >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                  <NeonCarrotRectangle margin={`0px 21px 0px 0px`} /> 
                    {/* need to fix this */}
                    <Link to="/result" className='focus:text-red-500'>
                    <Image2 src={`https://file.rendit.io/n/pYy0gIuZDeYoFckaWV51.svg`} /> 
                    </Link>
                    

                      
                      <Link to="/result" className='text-xs leading-4 pr-20 mr-7 text-white focus:text-red-500 hover:text-red-500'>
                      RESULT
                      </Link> 
                    

                    <Image4 src={`https://file.rendit.io/n/1udbBvAlXi9KxoIN8Mpq.svg`} />
                  </FlexRow2>
                  </NavLink> 

                  <NavLink to="/coursereg" > 
                  <FlexRow2 margin={`0px 0px 34px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px 22px 0px 0px`} />
                    <Image5 src={`https://file.rendit.io/n/9MwYu0OLwQA0B78sL4mz.svg`} />

                    <Text2 margin={`0px 19px 0px 0px`}>COURSE REGISTRATION</Text2>

                    <Image4 src={`https://file.rendit.io/n/1udbBvAlXi9KxoIN8Mpq.svg`} />
                  </FlexRow2>
                  </NavLink>  
                    
                  <NavLink to="/printout" >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px 21px 0px 0px`} />
                    <Image7 src={`https://file.rendit.io/n/TqULhokVjb0XjpEcv3n6.svg`} />
                    <Text2 margin={`0px 88px 0px 0px`}>PRINT OUT</Text2>
                    <Image4 src={`https://file.rendit.io/n/1udbBvAlXi9KxoIN8Mpq.svg`} />
                  </FlexRow2>
                  </NavLink> 

                  <NavLink to="/gpatool" >
                  <FlexRow2 margin={`0px 0px 33px 0px`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px 21px 0px 0px`} />
                    <Image9 src={`https://file.rendit.io/n/klK7eDIJTa4Nj693TeKV.svg`} />
                    <Text2 margin={`0px 90px 0px 0px`}>GPA TOOL</Text2> 
                    <Image4 src={`https://file.rendit.io/n/1udbBvAlXi9KxoIN8Mpq.svg`} />
                   
                  </FlexRow2>
                  </NavLink> 
                  
                  <NavLink to="/document" > 
                  <FlexRow2 margin={`0`} onClick={() => setShowSidebar('-left-64')}>
                    <NeonCarrotRectangle margin={`0px 26px 0px 0px`} /> 
                    <Image11
                      src={`https://file.rendit.io/n/QblqnxWb4Yo45nDXvRGs.svg`} />
                    <Text2 margin={`0px 90px 0px 0px`}>DOCUMENT</Text2>
                    <Image4 src={`https://file.rendit.io/n/1udbBvAlXi9KxoIN8Mpq.svg`} />
                  </FlexRow2>
                  </NavLink> 
            
                </PlumFlexColumn> 
                
              </Element7>
        


            </div>
        </>
    );
}



const NeonCarrotRectangle = styled.div`
  width: 2px;
  height: 22px;
  background-color: #df8909;
  opacity: 0;
  margin: ${(props) => props.margin};
`;
const Text2 = styled.a`
  font-size: 12px;
  font-family: Roboto;
  line-height: 18px;
  color: #ffffff;
  margin: ${(props) => props.margin};
  
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }

`;
const Image2 = styled.img`
  width: 17px;
  height: 17px;
  align-self: flex-end;
  margin: 0px 18px 2px 0px;
`;
const FlexRow2 = styled.div`
  width: 214px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};

  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }


`;

const Image4 = styled.img`
  width: 6px;
  height: 9px;
  align-self: flex-end;
  margin: 0px 0px 6px 0px;
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }
`;


const Element7 = styled.div`
  width: 237px;
  height: 900px;
  position: relative;
  flex-grow: 1; 
`;
const Line = styled.img`
  width: 38px;
  height: 4px;
  position: absolute;
  top: 699px;
  left: 106px;
`;
const PlumFlexColumn = styled.div`
  height: 818px;
  background-color: #250444;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 41px 23px 41px 0px;
`;
const Text1 = styled.div`
  font-size: 36px;
  font-family: Roboto;
  font-weight: 900;
  line-height: 54px;
  color: #ffffff;
  align-self: flex-end;
  margin: 0px 24px 49px 0px;
`;
const Image1 = styled.img`
  width: 16px;
  height: 16px;
  margin: 0px 18px 0px 0px;
  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }
`;
const Image5 = styled.img`
  width: 16px;
  height: 16px;
  margin: 0px 19px 0px 0px;

  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }
`;
const Image7 = styled.img`
  width: 18px;
  height: 16px;
  margin: 0px 19px 0px 0px;

  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }

`;
const Image9 = styled.img`
  width: 17px;
  height: 17px;
  align-self: flex-end;
  margin: 0px 22px 2px 0px;

  &:hover {
    color: #df8909; 
  }

  &:focus {
    color: #df8909; 
  }
`;
const Image11 = styled.img`
  width: 12px;
  height: 16px;
  margin: 0px 22px 0px 0px;

  &:hover {
   color: #df8909; 
  } 

  &:focus {
    background-color: #df8909; 
  }
`;





