import React, { Component } from 'react'

import { FaSearch } from "react-icons/fa";

import './Search.css'

class Search extends Component {
    constructor(props) {
        super(props)

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(e) {
        this.props.handleSearchChange(e.target.value)
    }

    render() {
        return (
            <div className="search">
                <span className="search-icon">
                    <FaSearch className="search-icon"/>
                </span>
                <input onChange={this.handleInputChange}
                    value={this.props.inputValue}
                    placeholder="Seach by country..."
                    className="search-bar"
                    type="text"
                />
            </div>
        )
    }
}

export default Search