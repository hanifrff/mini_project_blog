import React, { useContext, useEffect, useState } from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Categories";
import axios from "axios";
import { Avatar } from "flowbite-react";

import { LoginContext } from "../App";

const Profile = () => {
  const [dataUser, setDataUser] = useState({});
  const { token, setToken } = useContext(LoginContext);
  // pakai use state untuk mengeSTORE data user yang didapatkan dari API
  useEffect(() => {
    // 1. lo ngambil token dari local storage
    // const token = localStorage.getItem("token");
    // if (!token) return;
    console.log("asdasd", token);
    // 2. menggunakan token yg sudah didapat, lo panggil API profile/keep login
    axios
      .get("https://minpro-blog.purwadhikabootcamp.com/api/auth/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setDataUser(response.data);
      })
      .catch((err) => console.log(err));
  }, [token]);

  return (
    // <div className="single">
    //   <div className="content">
    //     <img
    //       src="https://preview.redd.it/5nw154ip1nk71.jpg?auto=webp&s=52ac8b246d4cabeb04e6750dbf7f7dc6e6809ef7"
    //       alt=""
    //     />
    //     <div className="user">
    //       <img
    //         src="https://www.meme-arsenal.com/memes/df2bdf73de91a6282e36e4dccdb7427c.jpg"
    //         alt=""
    //       />
    //       <div className="info">
    //         <span>{getUserData.username}</span>
    //         <p>Posted 2 days ago</p>
    //       </div>
    //       <div className="edit">
    //         <Link to={`/write?edit=2`}>
    //           <img src={Edit} alt="" />
    //         </Link>
    //         <img src={Delete} alt="" />
    //       </div>
    //     </div>
    <div>
      <div className="flex flex-wrap gap-2">
        <Avatar img={dataUser.imgProfile} rounded={true} />
      </div>
      <h3>My Profile</h3>
      <p>Username: {dataUser.username}</p>
      <p>Email: {dataUser.email}</p>
      <p>Phone: {dataUser.phone}</p>
      
      <div />

      {/* <Menu /> */}
    </div>
  );
};

export default Profile;
