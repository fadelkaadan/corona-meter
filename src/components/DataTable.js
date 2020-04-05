import React from 'react'

import DataTableRow from './DataTableRow'

import { fetchCountriesData } from '../api/coronaAPI'
import '../style/DataTable.css';

class DataTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isFetching: false,
            data: []
        }

        this.addRows = this.addRows.bind(this)
    }

    componentDidMount() {
        this.setState({ isFetching: true })

        fetchCountriesData().then((response) => {
            this.setState({
                data: response,
                isFetching: false
            })
        })
    }

    addRows = () => {    
        return this.state.data.map((element, index) => {
            return <tr key={index}><DataTableRow row={element}/></tr>
        })
    }

    render() {
        return (
            <section className="stats">
                <table id="stats-table">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Total Cases</th>
                            <th>New Cases</th>
                            <th>Total Deaths</th>
                            <th>New Deaths</th>
                            <th>Total Recovered</th>
                            <th>Active Cases</th>
                            <th>Critical</th>
                            <th>Tot Cases/1M pop</th>
                            <th>Tot Deaths/1M pop</th>
                        </tr>
                    </thead>
                <tbody>
                    {this.state.isFetching ?
                        <tr><td>'Fetching data...'</td></tr> :
                        this.addRows()}
                </tbody>
                </table>
            </section>
        )
    }
}

export default DataTable