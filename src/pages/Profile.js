import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Avatar } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";


const Profile = () => {
  const [dataUser, setDataUser] = useState({});
  const { token, setToken } = useContext(LoginContext);
  const [selectedImage, setSelectedImage] = useState(null);


  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/changepassword")
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  }

  const handleImageUpload = (event, action) => {
    event.preventDefault();
    console.log('1')
    const data = new FormData();
    data.append("file", selectedImage);
    

    axios
      .post(
        "https://minpro-blog.purwadhikabootcamp.com/api/profile/single-uploaded",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {});
  };

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
        <Avatar
          img ={`https://minpro-blog.purwadhikabootcamp.com/${dataUser.imgProfile}`}
          rounded={true}
          
        />
        
        <input type="file" onChange={handleImageChange}></input>
        <button
          type="button"
          onClick={handleImageUpload}
          class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Change Profile Picture
        </button>
      </div>
      <h3>My Profile</h3>
      <p>Username: {dataUser.username}</p>
      <button
        type="button"
        class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Edit
      </button>
      <p>Email: {dataUser.email}</p>
      <button
        type="button"
        class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Edit
      </button>
      <p>Phone: {dataUser.phone}</p>
      <button
        type="button"
        class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Edit
      </button>
      <p>Password</p>
      <button 
        type="button"
        onClick={handleRedirect}
        class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Edit
      </button>

      <div />

      {/* <Menu /> */}
    </div>
  );
};

export default Profile;
