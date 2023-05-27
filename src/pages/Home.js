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
  const [category, setCategory] = useState("all");
  const categories = [
    "all",
    "Bisnis",
    "Ekonomi",
    "Teknologi",
    "Olahraga",
    "Kuliner",
    "Internasional",
    "Fiksi",
  ]; // Define your categories here

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
    search(event.target.value, category);
  };

  const handleCategoryChange = (event) => {
    // console.log(event.target.value);
    setCategory(event.target.value);
    // search(term, event.target.value);
  };

  const search = (term, category) => {
    console.log('Term: ' + term)
    // let resultItems = items;
    // if (term) {
    //   resultItems = resultItems.filter((item) =>
    //     item.name.toLowerCase().includes(term.toLowerCase())
    //   );
    // }
    // if (category !== "all") {
    //   resultItems = resultItems.filter((item) => item.category === category);
    // }
    // setResults(resultItems);

    axios
      .get(`https://minpro-blog.purwadhikabootcamp.com/api/blog?search=${term}`)
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
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
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
