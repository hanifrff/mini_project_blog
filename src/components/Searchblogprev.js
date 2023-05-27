import axios from "axios";
import { useEffect, useState } from "react";
import SearchBar from "./searchbar";
import { Link } from "react-router-dom";



const BlogPreview = () => {
  const [blogData, setBlogData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=&sort=ASC"
      )
      .then((response) => {
        setBlogData(response.data.result);
      });
  }, []);
  return (
    
    <div>
      <SearchBar setBlogData={setBlogData}></SearchBar>
      {blogData.map((data) => {
        return (
            <div></div>
        //     <div className="post" key={data.id}>
        //     <div className="img">
        //       <img
        //         src={`https://minpro-blog.purwadhikabootcamp.com/${data.imageURL}`}
        //         alt=""
        //       />
        //     </div>
        //     <div className="content">
        //       <h1>{data.title}</h1>
        //       <h3 >{data.content}</h3>
        //       <p>{data.User.username}</p>
        //       <Link className="link" to={`/${data.id}`}>
        //         <button>Read More</button>
        //       </Link>
        //     </div>
        //   </div>
          
        //   <div key={data.id}>
        //     <h4>{data.title}</h4>
        //     <p>{data.User.username}</p>
        //     <h6>{data.content}</h6>
        //     <p>{data.createdAt}</p>
        //     <hr />
        //   </div>
        );
      })}
    </div>
  );
};
export default BlogPreview;
