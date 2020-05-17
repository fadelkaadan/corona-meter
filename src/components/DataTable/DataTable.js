import React from 'react'

// components
import DataTableRow from './DataTableRow'
import Search from './Search'

// utils
import { fetchCountriesDataBy } from '../../api/coronaAPI'

// styling
import './DataTable.css';

class DataTable extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            filteredData: [],
            isFetching: false,
            searchInputValue: ''
        }

        this.getSortedDataBy = this.getSortedDataBy.bind(this)
        this.addRows = this.addRows.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    componentDidMount() {
        this.setState({ isFetching: true })
        this.getSortedDataBy('cases')
    }

    getSortedDataBy(preference) {
        fetchCountriesDataBy(preference).then((response) => {
            this.setState({
                isFetching: false,
                data: response
            })
        }).then(() => {
            this.setState({ filteredData: this.state.data })
        })
    }

    addRows() {
        // when user types in search bar
        if (this.state.searchInputValue !== '') {
            return this.state.filteredData.map((element, index) => {
                return <tr key={index}><DataTableRow row={element}/></tr>
            })
        }
        // return all data
        return this.state.data.map((element, index) => {
            return <tr key={index}><DataTableRow row={element}/></tr>
        })
    }

    handleInputChange(searchInputValue) {
        this.setState({ searchInputValue })
        this.handleSearch(searchInputValue)
    }

    handleSearch(searchInput) {
        if (this.state.searchInput !== '') {
            const filtered = this.state.data.filter((row) => {
                const lc = row.country.toLowerCase()
                const filter = this.state.searchInputValue.toLowerCase()
                return lc.startsWith(filter);
            })
            this.setState({ filteredData: filtered })
        }
    }

    render() {
        return (
            <div className="stats">
                <h3 className="stats-title">Countries affected by Covid-19</h3>
                <Search handleSearchChange={this.handleInputChange} inputValue={this.state.searchInputValue}/>
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
                        <tr><td>Loading</td></tr> :
                        this.addRows()}
                </tbody>
                </table>
            </div>
        )
    }
}

export default DataTable