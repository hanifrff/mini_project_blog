import React, { useState } from "react";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const [category, setCategory] = useState("all");
  const [results, setResults] = useState([]);

  const categories = ["all", "category1", "category2", "category3"]; // Define your categories here

  const items = [
    // Your items list
    { id: 1, name: "Item 1", category: "category1" },
    { id: 2, name: "Item 2", category: "category2" },
    { id: 3, name: "Item 3", category: "category3" },
    // Add more items as needed
  ];

  const handleSearchChange = (event) => {
    setTerm(event.target.value);
    search(event.target.value, category);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    search(term, event.target.value);
  };

  const search = (term, category) => {
    let resultItems = items;

    if (term) {
      resultItems = resultItems.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    if (category !== "all") {
      resultItems = resultItems.filter((item) => item.category === category);
    }

    setResults(resultItems);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={term}
          onChange={handleSearchChange}
        />

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
