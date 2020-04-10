import React from 'react'

import './GlobalStats.css';

// import { FaArrowDown } from "react-icons/fa";

const GlobalStats = (props) => {
    const { counterName ,count, classProp, arrow } = props

    return (
        <div className="global-stats">
            <div className="container">
                <p className="counter-name">{counterName}</p>
                <h3 className="count">{count}</h3>
                <p className={classProp}>
                    {arrow}13%
                </p>
            </div>
            
            <div className="chart">
                
            </div>
        </div>
    )
}

export default GlobalStats