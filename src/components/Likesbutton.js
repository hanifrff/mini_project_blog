import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LoginContext } from "../App";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

const Likesbutton = ({ blogID, totalLikes, onClickLike }) => {
  const { token, setToken } = useContext(LoginContext);
  const [dataUser, setDataUser] = useState({});
  const [dataLikes, setDataLikes] = useState("");
  const [dataFav, setDataFav] = useState([]);
  const navigate = useNavigate();

  //   useEffect(() => {
  //       axios
  //       .get("https://minpro-blog.purwadhikabootcamp.com/api/auth/", {
  //           headers: {
  //               Authorization: `Bearer ${token}`,
  //             },
  //         })
  //         .then((response) => {
  //             console.log(response);
  //             setDataUser(response.data);
  //         })
  //         .catch((err) => console.log(err));
  //     }, [token]);

  // useEffect(() => {
  //     axios("https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav")
  //     .then((response) => {
  //         const blogs2 = response.data.result;
  //         setDataFav(blogs2);
  //     })
  //     .catch((err) => console.log(err));
  // }, [dataLikes]);

  const handleClick = (tesblogId) => {
    axios
      .post(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog/like",
        { BlogId: tesblogId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        onClickLike();
      })

      .catch((err) => console.log(err));

    navigate("/login");
  };

  return (
    <div>
      <button onClick={() => handleClick(blogID)}>
        <FavoriteIcon /> {totalLikes} likes{" "}
      </button>
    </div>
  );
};

export default Likesbutton;
