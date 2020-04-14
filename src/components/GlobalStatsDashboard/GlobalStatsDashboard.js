import React, { Component } from 'react'

import { fetchGlobalData, fetchYesterdayGlobalData } from '../../api/coronaAPI'

// utils
import numberFormater from '../../utils/numberFomater'
import { getSum, calculateGrowthRate } from '../../utils/math'

//components
import GlobalStats from '../StatsBox'

// react icons
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

// style
import './GlobalStatsDashboard.css'

class GlobalStatsDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todaysGlobalData: {},
            yesterdaysGlobalData: {},
            yesterdaysCountriesData: {},
            casesGrowthRate: 0,
            deathsGrowthRate: 0
        }
    }

    componentDidMount() {
        fetchGlobalData().then((response) => {
            this.setState({
                todaysGlobalData: response,
            })
        })
        fetchYesterdayGlobalData().then((response) => {
            this.setState({
                yesterdaysCountriesData: response
            })
        }).then(() => {
            this.setYesterdaysGlobalData()
        }).then(() => {
            this.calculateGrowth()
        })
    }

    calculateGrowth() {
        const { yesterdaysGlobalData, todaysGlobalData } = this.state

        if (yesterdaysGlobalData !== {} && todaysGlobalData !== {}) {
            const casesGrowthRate = calculateGrowthRate(yesterdaysGlobalData.newCases, todaysGlobalData.todayCases)
            const deathsGrowthRate = calculateGrowthRate(yesterdaysGlobalData.newDeaths, todaysGlobalData.todayDeaths)

            this.setState({
                casesGrowthRate: casesGrowthRate.toFixed(2),
                deathsGrowthRate: deathsGrowthRate.toFixed(2)
            })
        }
    }

    setYesterdaysGlobalData() {
        const data = this.state.yesterdaysCountriesData;
        if (data.length > 0) {
            const todayCases = data.map((item) => item.todayCases);
            const todayDeaths = data.map((item) => item.todayDeaths);
            this.setState({
                yesterdaysGlobalData: {
                    newCases: getSum(todayCases),
                    newDeaths: getSum(todayDeaths)
                }
            })
        } 
    }

    render() {
        const { cases, deaths, recovered } = this.state.todaysGlobalData
        
        return (
            <div className="global-stats-dashboard">
                <GlobalStats counterName="Total Cases"
                            count={numberFormater(cases)}
                            growthRate={this.state.casesGrowthRate + '%'}
                            classProp={this.state.casesGrowthRate > 0 ? 'trend trend-up' : 'trend trend-down'}
                            arrow={this.state.casesGrowthRate > 0 ? <FaArrowUp className="tend-icon"/> : <FaArrowDown className="tend-icon"/> }
                            />
                <GlobalStats counterName="Total Deaths"
                            count={numberFormater(deaths)}
                            growthRate={this.state.deathsGrowthRate + '%'}
                            classProp={this.state.deathsGrowthRate > 0 ? 'trend trend-up' : 'trend trend-down'}
                            arrow={this.state.deathsGrowthRate > 0 ? <FaArrowUp className="tend-icon"/> : <FaArrowDown className="tend-icon"/> }
                            />
                <GlobalStats counterName="Total Recovered"
                            count={numberFormater(recovered)}
                            />
            </div>
        )
    }
}

export default GlobalStatsDashboard