import React from 'react'

import { fetchGlobalData } from '../api/coronaAPI'
import numberFormater from '../util/numberFomater'
import '../style/GlobalStats.css';

class GlobalStats extends React.Component {
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
        const { cases, deaths, recovered } = this.state

        return (
            <section className="main">
                <h1>Corona-meter</h1>
                <div className="global-stats">
                    <h3 id="totalCases">Cases: {cases}</h3>
                    <h3 id="totalDeaths">Deaths: {deaths}</h3>
                    <h3 id="totalRecovered">Recovered: {recovered}</h3>
                </div>
            </section>   
        )
    }
}

export default GlobalStats