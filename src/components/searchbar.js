import axios from "axios";
import { Formik } from "formik";
import React, { useState } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";


const initialValues = {
  search:'',
  sort: '',
  cat:'',
}

const SearchBar = ({ setBlogData }) => {
  const [message, setMessage] = useState("");
  const [blogData, setBlogs] = useState([]);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .get(
          `https://minpro-blog.purwadhikabootcamp.com/api/blog?search=${message}`
        )
        .then((response) => {
          setBlogData(response.data.result);
        });
    } catch (err) {
      return;
    }
  };
  const handleSearch = (values) => {
    // e.preventDefault();

    console.log(values.cat);
    console.log(values.sort);
    console.log(values.search);

    try {
      axios(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=${values.cat}&sort=${values.sort}&search=${values.search}`
      ).then((response) => {
        console.log(response.data);
        const blogs3 = response.data;
        console.log(blogs3.result);
        setBlogs(blogs3.result);
      });
    } catch (error) {
      console.error(error);
      return;
    }
  };
  return (
    <>
    <Formik
      initialValues={initialValues}
      onSubmit={handleSearch}
      className=""
      >
      {props => (
        <Form>
          <div className="flex items-center">
            <div className="flex space-x-1">
              
                <input
                    type="text"
                    name="search"
                    className="block w-full px-1 py-1 text-sky-600 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search for article"
                    onChange={props.handleChange}
                    defaultValue={props.values.search}
                    />
                <select className='rounded-full' name="sort" value={props.values.sort} onChange={props.handleChange}> 
                  <option name="ASC" >ASC</option>
                  <option name="DESC">DESC</option>
                </select>
                <select className='rounded-full' name="cat" value={props.values.cat} onChange={props.handleChange}> 
                  <option name="bisnis" >1</option>
                  <option name="ekonomi">2</option>
                  <option name="teknologi" >3</option>
                  <option name="olahraga">4</option>
                  <option name="kuliner" >5</option>
                  <option name="internasional">6</option>
                  <option name="fiksi">7</option>
                </select>
                
                <button className="px-2 text-white bg-sky-600 rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                    </svg>
                </button>
                
            </div>
        </div>
        </Form>
      )}
    </Formik>
      </>
  );
};

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const SearchBar = () => {
//   const [term, setTerm] = useState("");
//   const [category, setCategory] = useState("all");
//   const [results, setResults] = useState([]);
//   const [userData, setUserData] = useState([]);

//   useEffect(() => {
//     axios
//       .get(
//         "https://minpro-blog.purwadhikabootcamp.com/api/blog?search="
//       )
//       .then((response) => {
//         console.log(response.data);
//         setUserData(response.data.result);

//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const categories = [
//     "all",
//     "Bisnis",
//     "Ekonomi",
//     "Teknologi",
//     "Olahraga",
//     "Kuliner",
//     "Internasional",
//     "Fiksi",
//   ]; // Define your categories here

//   const items = [
//     // Your items list
//     { id: 1, name: "Item 1", category: "Bisnis" },
//     { id: 2, name: "Item 2", category: "Ekonomi" },
//     { id: 3, name: "Item 3", category: "Teknologi" },
//     { id: 3, name: "Item 4", category: "Olahraga" },
//     { id: 3, name: "Item 5", category: "Kuliner" },
//     { id: 3, name: "Item 6", category: "Internasional" },
//     { id: 3, name: "Item 7", category: "Fiksi" },
//     // Add more items as needed
//   ];

//   const handleSearchChange = (event) => {
//     setTerm(event.target.value);
//     search(event.target.value, category);
//   };

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//     search(term, event.target.value);
//   };

//   const search = (term, category) => {
//     let resultItems = items;

//     if (term) {
//       resultItems = resultItems.filter((item) =>
//         item.name.toLowerCase().includes(term.toLowerCase())
//       );
//     }

//     if (category !== "all") {
//       resultItems = resultItems.filter((item) => item.category === category);
//     }

//     setResults(resultItems);
//   };

//   return (
//     <div>
//       <form>
//         <input
//           type="text"
//           placeholder="Search"
//           value={term}
//           onChange={handleSearchChange}
//         />

//         <select value={category} onChange={handleCategoryChange}>
//           {categories.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>
//       </form>

//       {/* Display search results */}
//       <div>
//         {results.map((result) => (
//           <div key={result.id}>{result.name}</div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default SearchBar;

// import React, { useState } from "react";
// import SearchIcon from "@mui/icons-material/Search";

// function SearchBar({ placeholder, data }) {
//   const [filteredData, setFilteredData] = useState([]);

//   const handleFilter = (event) => {
//     const searchWord = event.target.value;
//     const newFilter = data.filter((value) => {
//       return value.title.toLowerCase().includes(searchWord.toLowerCase());
//     });

//     if (searchWord === "") {
//       setFilteredData([]);
//     } else {
//       setFilteredData(newFilter);
//     }
//   };

//   return (
//     <div className="search">
//       <div className="searchInputs">
//         <input type="text" placeholder={placeholder} onChange={handleFilter} />
//         <div className="searchIcon"></div>
//       </div>
//       {filteredData.length != 0 && (
//         <div className="dataResult">
//           {filteredData.slice(0, 5).map((value, key) => {
//             return <div>{value.title}</div>;
//           })}
//         </div>
//       )}
//     </div>
//   );
// }

// export default SearchBar;
