import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar2 = () => {
  const [term, setTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [results, setResults] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // axios
    //   .get("https://minpro-blog.purwadhikabootcamp.com/api/blog?search=")
    //   .then((response) => {
    //     setUserData(response.data.result);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

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

  const items = [
    // Your items list
    { id: 1, name: "Item 1", category: "Bisnis" },
    { id: 2, name: "Item 2", category: "Ekonomi" },
    { id: 3, name: "Item 3", category: "Teknologi" },
    { id: 3, name: "Item 4", category: "Olahraga" },
    { id: 3, name: "Item 5", category: "Kuliner" },
    { id: 3, name: "Item 6", category: "Internasional" },
    { id: 3, name: "Item 7", category: "Fiksi" },
    // Add more items as needed
  ];

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
    <div>
      <form>
        <input type="text" placeholder="Search" onChange={handleSearchChange}></input>

        <select value={category} onChange={handleCategoryChange}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </form>

      {/* Display search results */}
      <div>
        {results.map((result) => (
          <div key={result.id}>{result.name}</div>
        ))}
      </div>
    </div>
  );
};
export default SearchBar2;
