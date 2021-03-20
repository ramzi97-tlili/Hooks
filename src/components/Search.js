
import React from "react";
import StarRating from "../components/StarRating";

const Search = ({ searchRating, searchValue, handleSearch, handleRating }) => {
  return (
    <div>
      <h1 class="title"> Movie App</h1>
      
      <div >
        <input
          value={searchValue}
          onChange={handleSearch}
          type="text"
          placeholder="search Movie"
         />
      </div>
      <StarRating rate={searchRating} handleRating={handleRating} />
    </div>
  );
};

export default Search;