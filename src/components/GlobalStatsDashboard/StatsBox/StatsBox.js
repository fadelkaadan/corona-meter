import React from 'react'

import './StatsBox.css';

const StatsBox = (props) => {
    const { counterName ,count } = props
    return (
        <div className="stats-box">
            <div className="container">
                <p className="counter-name">{counterName}</p>
                <h3 className="count">{count.length <= 0 ? 0 : count}</h3>
            </div>
        </div>
    )
}

export default StatsBox