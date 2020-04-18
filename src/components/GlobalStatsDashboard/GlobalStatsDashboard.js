import React, { Component } from 'react'

// api
import { fetchGlobalData } from '../../api/coronaAPI'

// utils
import numberFormater from '../../utils/numberFomater'

//components
import StatsBox from '../StatsBox'

// style
import './GlobalStatsDashboard.css'

class GlobalStatsDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        fetchGlobalData().then((response) => {
            this.setState({
                data: response,
            })
        })
    }

    render() {
        const { cases, deaths, recovered } = this.state.data

        return (
            <div className="global-stats-dashboard">
                <StatsBox counterName="Total Cases"
                            count={numberFormater(cases)}
                            />
                <StatsBox counterName="Total Deaths"
                            count={numberFormater(deaths)}
                            />
                <StatsBox counterName="Total Recovered"
                            count={numberFormater(recovered)}
                            />
            </div>
        )
    }
}

export default GlobalStatsDashboard