import React, { Component } from 'react'

import { fetchGlobalData } from '../../api/coronaAPI'

// utils
import numberFormater from '../../utils/numberFomater'

//components
import GlobalStats from '../StatsBox'

// style
import './GlobalStatsDashboard.css'

class GlobalStatsDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todaysGlobalData: {}
        }
    }

    componentDidMount() {
        fetchGlobalData().then((response) => {
            this.setState({
                todaysGlobalData: response,
            })
        })
    }

    render() {
        const { cases, deaths, recovered } = this.state.todaysGlobalData
        
        return (
            <div className="global-stats-dashboard">
                <GlobalStats counterName="Total Cases"
                            count={numberFormater(cases)}
                            />
                <GlobalStats counterName="Total Deaths"
                            count={numberFormater(deaths)}
                            />
                <GlobalStats counterName="Total Recovered"
                            count={numberFormater(recovered)}
                            />
            </div>
        )
    }
}

export default GlobalStatsDashboard