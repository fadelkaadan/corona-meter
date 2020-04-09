import React from 'react'

import DataTableRow from '../DataTableRow'
import Search from '../Search'

import { fetchCountriesData } from '../../api/coronaAPI'
import './DataTable.css';

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
            <div className="stats">
                <h3 className="stats-title">Countries affected by Covid-19</h3>
                <Search />
                <table id="stats-table">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Total Cases</th>
                            <th>New Cases</th>
                            <th>Total Deaths</th>
                            <th>New Deaths</th>
                            <th>Total Recovered</th>
                            <th>Total Tests</th>
                        </tr>
                    </thead>
                <tbody>
                    {this.state.isFetching ?
                        <tr><td>'Fetching data...'</td></tr> :
                        this.addRows()}
                </tbody>
                </table>
            </div>
        )
    }
}

export default DataTable