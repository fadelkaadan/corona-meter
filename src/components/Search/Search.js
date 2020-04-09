import React, { Component } from 'react'

import './Search.css'

class Search extends Component {
    render() {
        return (
            <div className="search">
                <span className="search-icon"></span>
                <input className="search-bar" type="text" placeholder="Seach by country..."/>
            </div>
        )
    }
}

export default Search