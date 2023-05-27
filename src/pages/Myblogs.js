import React, { useContext, useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Categories";
import axios from "axios";
import { useParams } from "react-router-dom";
import { LoginContext } from "../App";
 



const Myblogs = () => {
  const { token, setToken } = useContext(LoginContext);
  const [userData, setUserData] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    axios
      .get(`https://minpro-blog.purwadhikabootcamp.com/api/blog/${id}`,
      
      )
      .then((response) => {
        console.log("WING", response);
        setUserData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="single">
      {userData.map((post) => (
        <div>
          <div className="content">
            <img
              src={`https://minpro-blog.purwadhikabootcamp.com/${post.imageURL}`}
              alt=""
            />

            <div className="info">
              <h1>{post.title}</h1>
              <h3>by: {post.User.username}</h3>
              <p>{post.createdAt}</p>
            </div>
          </div>

          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Myblogs;
