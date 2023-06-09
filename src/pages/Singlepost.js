import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { LoginContext } from "../App";

const Single = () => {
  const [userData, setUserData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://minpro-blog.purwadhikabootcamp.com/api/blog/${id}`)
      .then((response) => {
        console.log("WING", response);
        setUserData(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleString("en-US", options);
  };

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
              <p>CreatedAt: {formatDate(post.createdAt)}</p>
            </div>
          </div>

          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Single;
