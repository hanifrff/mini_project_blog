import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import axios from "axios";


const Carousels = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=&sort=DESC&page=1&search="
      )
      .then((response) => {
        console.log(response.data);
        setUserData(response.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="h-56 sm:h-64 xl:h-56 2xl:h-96">
      <Carousel>
        {userData.map((userData) => (
          <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
            <div>
              <div>
                <img src= {`https://minpro-blog.purwadhikabootcamp.com/${userData.imageURL}`} />
                <figcaption className="absolute px-4 text-lg text-white bottom-6">{userData.title} {userData.user}</figcaption>
                <h1 className="text-white"> {userData.user}</h1>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Carousels;
