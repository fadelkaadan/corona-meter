import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Search.css";

const Search = ({ handleSearchChange, inputValue }) => {
    const handleInputChange = (e) => {
        handleSearchChange(e.target.value);
    };

    return (
        <div className="search">
            <span className="search-icon">
                <FaSearch className="search-icon" />
            </span>
            <input
                onChange={handleInputChange}
                value={inputValue}
                placeholder="Seach by country..."
                className="search-bar"
                type="text"
            />
        </div>
    );
};

export default Search;
