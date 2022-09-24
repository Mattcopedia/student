import React, { useState, useEffect } from 'react'
import axios from "axios"; 
import "../br.css" 

const SearchFeature = () => {

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
    <div className=' ml-7 flex flex-row mb-3  '> 
        <div className="box bg-gray-100 pl-2 py-2">
   <select>
    <option selected>First Semester 2020-2021(200 level)    </option> 
    <option>First Semester 2020-2021(200 level)</option>
    <option>First Semester 2020-2021(200 level)</option>
    <option>First Semester 2020-2021(200 level)</option>
    <option>First Semester 2020-2021(200 level)</option>
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
    </>
  )
}

export default SearchFeature