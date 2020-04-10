import React from 'react'

import './StatsBox.css';

const StatsBox = (props) => {
    const { counterName ,count, classProp, arrow } = props

    return (
        <div className="stats-box">
            <div className="container">
                <p className="counter-name">{counterName}</p>
                <h3 className="count">{count}</h3>
                <p className={classProp}>
                    {arrow}{props.growthRate}
                </p>
            </div>
            
            <div className="chart">
                
            </div>
        </div>
    )
}

export default StatsBox