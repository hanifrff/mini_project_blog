import React, { useEffect, useState } from "react";
import SearchBar from "../components/searchbar";
import { Link } from "react-router-dom";
import axios from "axios";
import Menu from "../components/Categories";
import Carousels from "../components/Carousel";
import Topten from "../components/Topten";
import Categories from "../components/Categories";
import Pagination from "../components/Pagination";
import BlogPreview from "../components/Searchblogprev";
import SearchBar2 from "../components/searchbar2";

const Home = () => {
  // Home
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Search
  const [term, setTerm] = useState("");
  const [category, setCategory] = useState("");

  // Sort
  const [sortValue, setSortValue] = useState("DESC");

  useEffect(() => {
    axios
      .get(
        "https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=&sort=DESC&page=1&search="
      )
      .then((response) => {
        console.log(response.data);
        setUserData(response.data.result);
        setTotalPages(Math.ceil(response.data.rows / 8));
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSortChange = (event) => {
    const newSortValue = event.target.value
    setSortValue(newSortValue);
    search(term, category, newSortValue)
  }

  const handlePage = (page) => {
    setCurrentPage(page);
    axios
      .get(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=&sort=ASC&page=${page}&search=`
      )
      .then((response) => {
        console.log(response.data);
        setUserData(response.data.result);
        setTotalPages(Math.ceil(response.data.rows / 8));
      })
      .catch((err) => console.log(err));
  };

  const handleSearchChange = (event) => {
    setTerm(event.target.value);
    search(event.target.value, category, sortValue);
  };

  const handleCategoryChange = (event) => {
    // console.log(event.target.value);
    setCategory(event.target.value);
    search(term, event.target.value, sortValue);
  };

  const search = (term, category, sortValue) => {
    console.log("Term: " + term);

    axios
      .get(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog?search=${term}&id_cat=${category}&sort=${sortValue}`
      )
      .then((response) => {
        setUserData(response.data.result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="home">
      <Carousels />
      <div className=" pt-3">
        <Topten />
      </div>
      <div className="pt-0">
        <Categories />
      </div>
      <div className="pt-3">
        <form>
          <input
            type="text"
            placeholder="Search"
            onChange={handleSearchChange}
          ></input>

          <select value={category} onChange={handleCategoryChange}>
            <option value={""}>All</option>
            <option value={1}>Bisnis</option>
            <option value={2}>Ekonomi</option>
            <option value={3}>Teknologi</option>
            <option value={4}>Olahraga</option>
            <option value={5}>Kuliner</option>
            <option value={6}>Internasional</option>
            <option value={7}>Fiksi</option>
          </select>

          <select value={sortValue} onChange={handleSortChange}>
            <option value={"ASC"}>ASC</option>
            <option value={"DESC"}>DESC</option>
          </select>
        </form>
      </div>
      <div className="posts">
        {userData.map((userData) => (
          <div className="post" key={userData.id}>
            <div className="img">
              <img
                src={`https://minpro-blog.purwadhikabootcamp.com/${userData.imageURL}`}
                alt=""
              />
            </div>
            <div className="content">
              <h1>{userData.title}</h1>
              <h3>{userData.content}</h3>
              <p>Category: {userData.Category.name}</p>
              <p>by: {userData.User.username}</p>
              <Link className="link" to={`/${userData.id}`}>
                <button>Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePage}
      />
    </div>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// // import SearchBar from "../components/searchbar";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Home = () => {
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=3&sort=ASC&page=1"
//       )
//       .then((response) => {
//         console.log(response.data);
//         setUserData(response.data.result);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="home">
//       <div className="posts">
//         {userData.result.map((userData) => (
//           <div className="post" key={userData.id}>
//             <div className="img">
//               <img src={userData.imageURL} alt="" />
//             </div>
//             <div className="content">
//               <h1>{userData.title}</h1>
//               <p>{userData.content}</p>
//               {/* <Link className="link" to={`/post/${userData.id}`}>
//                 <button>Read More</button>
//               </Link> */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;
