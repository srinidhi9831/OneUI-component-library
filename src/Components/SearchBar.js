import React, { useState } from "react";
import { useCart } from "../Context/cart-context";
// import "./SearchBar.css"
// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  
  const {setPage}=useCart()
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const clkhandler=(val)=>{
    clearInput()
    setPage(val);

  }
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.Pagename.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
           <i class="fa fa-search" aria-hidden="false"></i>
          ) : (
            <i class="fa fa-window-close" aria-hidden="false" onClick={clearInput}></i>
            
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href="#"  onClick={()=>clkhandler(value.page)}>
                <p>{value.Pagename} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;