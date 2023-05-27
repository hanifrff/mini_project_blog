import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { SvgIcon } from "@mui/material";
import { Button } from "flowbite-react";

const Categories = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=1")
      .then((response) => {
        console.log(response.data);
        setUserData(response.data.result);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilterClick = (id) => {
    axios
      .get(`https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=${id}`)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data.result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="border-b-8 flex flex-col space-x-24  m-8 border-solid border-2 border-sky-500 rounded">
        <div className="flex flex-wrap gap-2">
          <Button.Group className=" mx-32 mt-4" outline={true}>
            <Button
              onClick={() => handleFilterClick(1)}
              gradientMonochrome="info"
            >
              Bisnis
            </Button>
            <Button
              onClick={() => handleFilterClick(2)}
              gradientMonochrome="info"
            >
              Ekonomi
            </Button>
            <Button
              onClick={() => handleFilterClick(3)}
              gradientMonochrome="info"
            >
              Teknologi
            </Button>
            <Button
              onClick={() => handleFilterClick(4)}
              gradientMonochrome="info"
            >
              Olahraga
            </Button>
            <Button
              onClick={() => handleFilterClick(5)}
              gradientMonochrome="info"
            >
              Kuliner
            </Button>
            <Button
              onClick={() => handleFilterClick(6)}
              gradientMonochrome="info"
            >
              Internasional
            </Button>
            <Button
              onClick={() => handleFilterClick(7)}
              gradientMonochrome="info"
            >
              Fiksi
            </Button>
          </Button.Group>
        </div>
        <h1 className="flex flex-col space-x-24 m-1 text-teal-500 text-2xl ... font-bold ...  "></h1>
        {userData.map((userData) => (
          <div>
            <h1 className=" border-b-4">{userData.title}</h1>

            <Link className="link" to={`/${userData.id}`}>
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

export default Categories;
