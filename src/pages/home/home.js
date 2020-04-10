import React, { Component } from 'react'

import Header from '../../components/Header'
import GlobalStatsDashboard from '../../components/GlobalStatsDashboard'
import DataTable from '../../components/DataTable'

import './Home.css'


class Home extends Component {
    componentDidMount() {
        document.title = 'Home'
    }

    render() {
        return (
            <div className="home">
                <Header/>
                <GlobalStatsDashboard/>
                <DataTable/>
            </div>
        )
    }
}

export default Home