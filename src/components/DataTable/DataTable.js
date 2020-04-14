import React from 'react'

// components
import DataTableRow from '../DataTableRow'
import Search from '../Search'

// utils
import { fetchCountriesData } from '../../api/coronaAPI'

// styling
import './DataTable.css';

class DataTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isFetching: false,
            data: []
        }

        this.getSortedDataBy = this.getSortedDataBy.bind(this)
        this.addRows = this.addRows.bind(this)
    }

    componentDidMount() {
        this.setState({ isFetching: true })
        this.getSortedDataBy('cases')
    }
    getSortedDataBy(sortedBy) {
        fetchCountriesData(sortedBy).then((response) => {
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
                <table className="stats-table sortable">
                    <thead>
                        <tr>
                            <th onClick={() => {
                                this.getSortedDataBy(null)
                            }}>Country</th>
                            <th onClick={() =>
                                this.getSortedDataBy('cases')
                            }>Total Cases</th>
                            <th onClick={() =>
                                this.getSortedDataBy('todayCases')
                            }>New Cases</th>
                            <th onClick={() =>
                                this.getSortedDataBy('deaths')
                            }>Total Deaths</th>
                            <th onClick={() =>
                                this.getSortedDataBy('todayDeaths')
                            }>New Deaths</th>
                            <th onClick={() => {
                                this.getSortedDataBy('recovered')
                            }}>Total Recovered</th>
                            <th onClick={() => {
                                this.getSortedDataBy('tests')
                            }}>Total Tests</th>
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