import React, { useContext, useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Categories";
import axios from "axios";
import { useParams } from "react-router-dom";
import { LoginContext } from "../App";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const Myblogs = () => {
  const token = localStorage.getItem("token");
  const [userData, setUserData] = useState([]);
  const [likeData, setLikeData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    } else {
      console.log(token);
      // Get my blog
      axios
        .get(`https://minpro-blog.purwadhikabootcamp.com/api/blog/pagUser`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("WING", response.data);
          setUserData(response.data.result);
        })
        .catch((err) => console.log(err));

      // Get liked blog
      axios
        .get("https://minpro-blog.purwadhikabootcamp.com/api/blog/pagLike", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("WONG", response.data);
          setLikeData(response.data.result);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const handleClick = (blogId) => {
    axios
      .patch(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog/remove/${blogId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        navigate("/myblogs");
      });
  };

  return (
    <>
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
            <button
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() => handleClick(post.id)}
            >
              DELETE
            </button>
          </div>
        ))}
      </div>
      <div className="border-b-8 flex flex-col space-x-24  m-8 border-solid border-2 border-sky-500 rounded">
        <h1 className="flex flex-col space-x-24 m-1 text-teal-500 text-2xl ... font-bold ...  ">
          LIKED POST
        </h1>
        {likeData.map((likeData) => (
          <div>
            <h1 className=" border-b-4">
              {likeData.Blog.title}
              {/* <Likesbutton
                blogID={userData.id}
                totalLikes={userData.total_fav}
                onClickLike={fetchData}
              /> */}
            </h1>

            <Link className="link" to={`/${likeData.Blog.id}`}>
              <button class="transition ease-in-out delay-150 bg- text-teal-500 hover:-translate-y-1 hover:scale-110 hover: bg-slate-200 duration-300 ...">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Myblogs;
