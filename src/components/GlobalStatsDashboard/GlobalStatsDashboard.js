import React, { Component } from 'react'

import { fetchGlobalData } from '../../api/coronaAPI'
import numberFormater from '../../utils/numberFomater'

import GlobalStats from '../GlobalStats'

import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

import './GlobalStatsDashboard.css'

class GlobalStatsDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cases: '',
            deaths: '',
            recovered: ''
        }
    }

    componentDidMount() {
        fetchGlobalData().then((response) => {
            this.setState({
                cases: numberFormater(response.cases),
                deaths: numberFormater(response.deaths),
                recovered: numberFormater(response.recovered)
            })
        })
    }

    render() {
        return (
            <div className="global-stats-dashboard">
                <GlobalStats counterName="Total Cases" count={this.state.cases} classProp="trend" arrow={<FaArrowDown className="tend-icon"/>} />
                <GlobalStats counterName="Total Deaths" count={this.state.deaths} classProp="trend trend-up" arrow={<FaArrowUp className="tend-icon" />}/>
                <GlobalStats counterName="Total Recovered" count={this.state.recovered} classProp="trend" arrow={<FaArrowDown className="tend-icon"/>} />
            </div>
        )
    }
}

export default GlobalStatsDashboard