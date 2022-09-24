
import React, { useState, useEffect } from 'react'
import axios from "axios"; 
import "../br.css" 
import styled from "styled-components";

const CourseDocument = () => {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [searchTitle, setSearchTitle] = useState("");
  
    useEffect(() => {
      const loadPosts = async () => {
        setLoading(true); 
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        setLoading(false);
      };
  
      loadPosts();
    }, []);




  return (

    <>


<SelectAcademicYearRoot>Download course document for your courses </SelectAcademicYearRoot>

    <div className=' ml-7 flex flex-row mb-3  '> 
        <div className="box bg-gray-100 pl-2 py-2">
   <select style={{width: "200px"}}>
    <option selected>CSC 102 </option> 
    <option>CSC 102</option>
    <option>CSC 102</option>
    <option>CSC 102</option> 
    <option>CSC 102</option>
  </select> 

</div>
      <div className='pl-3  bg-gray-100 py-2 '>
        <form className='searchbtn' >
        <input
        
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTitle(e.target.value)} 
      />

      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
         // eslint-disable-next-line
          .filter((value) => {
            if (searchTitle === "") {
              return null;
            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          }) 
          .map((item) => <h5 key={item.id}>{item.title}</h5>)
      )}

        </form>
      
      </div>
      

    </div>
    <br />
    







    <div>
    <div className='flex flex-row justify-between '>
    <CourseDocumentRoot>Course document</CourseDocumentRoot>
    <div className='pr-6'>
    <RectangleRoot>
      <FlexRow>
        <Image1 src={`https://file.rendit.io/n/AJ2GGRKHG2juTbFuKoU3.svg`} />
        <Text1>Download all</Text1>
      </FlexRow>
    </RectangleRoot>
    </div>
    </div> 
               <div style={{overflowX: "auto"}} className='bg-white mx-6 my-6 '> 
     <table className='Yourdoc' style={{width:"100%"}} >    
     <tr style={{height:"40px", backgroundColor: "#e5e5e5"}}>
         <th style={{width:"10%"}}></th>
         <th style={{width:"15%"}}>Date</th>
         <th style={{width:"15%"}}>Course Code</th>
         <th style={{width:"35%"}}><span className='text-left'>Document Title</span></th>
         <th></th>
         <th></th>
         <th></th> 
         <th style={{width:"25%"}}></th>  
         
     </tr>    

     <tr style={{height:"70px"}}> 
         <td ><input checked style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2' ><Text3>03/14/21</Text3></td>
         <td  ><Text3>STAT 101</Text3></td>
         <td className='p1-2'><span className='flex flex-row '>  
         <Image2 src={`https://file.rendit.io/n/CLDsKr72wqJP5VHd1FvW.svg`} />
        <Text3>Introduction to statistics and maths</Text3> </span></td>
         <td></td>
         <td></td>
         <td></td>
         <td> <span className='flex flex-row md:pl-28'> <Image3 src={`https://file.rendit.io/n/HJscytCsdJ1r3yLoOhj4.svg`} />
        <Text4>Download</Text4> </span></td> 
     </tr>
      
     <tr style={{height:"70px"}}> 
         <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2' ><Text3>03/14/21</Text3></td>
         <td  ><Text3>STAT 101</Text3></td>
         <td className='p1-2'><span className='flex flex-row '>  
         <Image2 src={`https://file.rendit.io/n/CLDsKr72wqJP5VHd1FvW.svg`} />
        <Text3>Introduction to statistics and maths</Text3> </span></td>
         <td></td>
         <td></td>
         <td></td>
         <td> <span className='flex flex-row md:pl-28'> <Image3 src={`https://file.rendit.io/n/HJscytCsdJ1r3yLoOhj4.svg`} />
        <Text4>Download</Text4> </span></td> 
     </tr>

     <tr style={{height:"70px"}}> 
         <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2' ><Text3>03/14/21</Text3></td>
         <td  ><Text3>STAT 101</Text3></td>
         <td className='p1-2'><span className='flex flex-row '>  
         <Image2 src={`https://file.rendit.io/n/CLDsKr72wqJP5VHd1FvW.svg`} />
        <Text3>Introduction to statistics and maths</Text3> </span></td>
         <td></td>
         <td></td>
         <td></td>
         <td> <span className='flex flex-row md:pl-28'> <Image3 src={`https://file.rendit.io/n/HJscytCsdJ1r3yLoOhj4.svg`} />
        <Text4>Download</Text4> </span></td> 
     </tr>


     <tr style={{height:"70px"}}> 
         <td ><input checked style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2' ><Text3>03/14/21</Text3></td>
         <td  ><Text3>STAT 101</Text3></td>
         <td className='p1-2'><span className='flex flex-row '>  
         <Image2 src={`https://file.rendit.io/n/CLDsKr72wqJP5VHd1FvW.svg`} />
        <Text3>Introduction to statistics and maths</Text3> </span></td>
         <td></td>
         <td></td>
         <td></td>
         <td> <span className='flex flex-row md:pl-28'> <Image3 src={`https://file.rendit.io/n/HJscytCsdJ1r3yLoOhj4.svg`} />
        <Text4>Download</Text4> </span></td> 
     </tr>

     <tr style={{height:"70px"}}> 
         <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2' ><Text3>03/14/21</Text3></td>
         <td  ><Text3>STAT 101</Text3></td>
         <td className='p1-2'><span className='flex flex-row '>  
         <Image2 src={`https://file.rendit.io/n/CLDsKr72wqJP5VHd1FvW.svg`} />
        <Text3>Introduction to statistics and maths</Text3> </span></td>
         <td></td>
         <td></td>
         <td></td>
         <td> <span className='flex flex-row md:pl-28'> <Image3 src={`https://file.rendit.io/n/HJscytCsdJ1r3yLoOhj4.svg`} />
        <Text4>Download</Text4> </span></td> 
     </tr>

     <tr style={{height:"70px"}}> 
         <td ><input  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2' ><Text3>03/14/21</Text3></td>
         <td  ><Text3>STAT 101</Text3></td>
         <td className='p1-2'><span className='flex flex-row '>  
         <Image2 src={`https://file.rendit.io/n/CLDsKr72wqJP5VHd1FvW.svg`} />
        <Text3>Introduction to statistics and maths</Text3> </span></td>
         <td></td>
         <td></td>
         <td></td>
         <td> <span className='flex flex-row md:pl-28'> <Image3 src={`https://file.rendit.io/n/HJscytCsdJ1r3yLoOhj4.svg`} />
        <Text4>Download</Text4> </span></td> 
     </tr>

     <tr style={{height:"70px"}}> 
         <td ><input checked  style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2' ><Text3>03/14/21</Text3></td>
         <td  ><Text3>STAT 101</Text3></td>
         <td className='p1-2'><span className='flex flex-row '>  
         <Image2 src={`https://file.rendit.io/n/CLDsKr72wqJP5VHd1FvW.svg`} />
        <Text3>Introduction to statistics and maths</Text3> </span></td>
         <td></td>
         <td></td>
         <td></td>
         <td> <span className='flex flex-row md:pl-28'> <Image3 src={`https://file.rendit.io/n/HJscytCsdJ1r3yLoOhj4.svg`} />
        <Text4>Download</Text4> </span></td> 
     </tr>

     <tr style={{height:"70px"}}> 
         <td ><input checked style={{marginLeft:"15px"}} type="checkbox" id="table" name="table"/></td>
         <td className='pr-2' ><Text3>03/14/21</Text3></td>
         <td  ><Text3>STAT 101</Text3></td>
         <td className='p1-2'><span className='flex flex-row '>  
         <Image2 src={`https://file.rendit.io/n/CLDsKr72wqJP5VHd1FvW.svg`} />
        <Text3>Introduction to statistics and maths</Text3> </span></td>
         <td></td>
         <td></td>
         <td></td>
         <td> <span className='flex flex-row md:pl-28'> <Image3 src={`https://file.rendit.io/n/HJscytCsdJ1r3yLoOhj4.svg`} />
        <Text4>Download</Text4> </span></td> 
     </tr>

     
     
 </table>

  
 
</div>
  
    </div>

    </>
  )
}


const Image3 = styled.img`
  width: 20px;
  height: 16px;
  mix-blend-mode: normal;
  margin: 0px 10px 2px 0px;
`;
const Text4 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #2d0353;
  margin-right: 10px;
`;

const Image2 = styled.img`
  width: 16px;
  height: 20px;
  mix-blend-mode: normal;
  align-self: flex-start;
  margin: 0px 13px 0px 0px;
`;

const Text3 = styled.div`
  mix-blend-mode: normal;
  font-size: 17px;
  font-family: Roboto;
  line-height: 21px;
  color: #787878;
 
`;

const CourseDocumentRoot = styled.div`
  mix-blend-mode: normal;
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  color: #2d0353;
  padding-top: 20px;
  padding-left: 20px;
`;



const RectangleRoot = styled.div`
  border-style: solid;
  border-color: #2d0353;
  width: 163px;
  mix-blend-mode: normal;
  background-color: #ffffff;
  padding-right: 20px;
  border-radius: 6px;
  padding: 11.5px ; 
  border-width: 0.5px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const Image1 = styled.img`
  width: 24px;
  height: 16px;
  mix-blend-mode: normal;
  align-self: flex-end;
  margin: 0px 0px 2px 0px;
`;
const Text1 = styled.div`
  mix-blend-mode: normal;
  font-size: 14px;
  font-family: Roboto;
  line-height: 21px;
  color: #2d0353;
`;

const SelectAcademicYearRoot = styled.div`
  font-size: 16px;
  font-family: Product Sans Medium;
  line-height: 15.52px;
  color: #2d0353;
  padding-bottom: 40px; 
  padding-left: 18px;
`;


export default CourseDocument