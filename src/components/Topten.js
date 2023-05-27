import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { SvgIcon } from "@mui/material";
import Likesbutton from "./Likesbutton";

const Topten = ({totalLikes}) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav")
      .then((response) => {
        console.log(response.data);
        setUserData(response.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchData = () => {
    axios
      .get("https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav")
      .then((response) => {
        console.log(response.data);
        setUserData(response.data.result);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="border-b-8 flex flex-col space-x-24  m-8 border-solid border-2 border-sky-500 rounded">
      <h1 className="flex flex-col space-x-24 m-1 text-teal-500 text-2xl ... font-bold ...  ">
        TOP TRENDING
      </h1>
      {userData.map((userData) => (
        <div>
          <h1 className=" border-b-4">
            {userData.title}
            <Likesbutton blogID={userData.id} totalLikes = {userData.total_fav} onClickLike={fetchData} />
          </h1>

          <Link className="link" to={`/${userData.id}`}>
            <button class="transition ease-in-out delay-150 bg- text-teal-500 hover:-translate-y-1 hover:scale-110 hover: bg-slate-200 duration-300 ...">
              Read More
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Topten;

{
  <FavoriteIcon fontSize="small" />;
}
// Likesbutton
