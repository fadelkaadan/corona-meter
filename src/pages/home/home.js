import React, { Component } from 'react'

import Header from '../../components/Header'
import GlobalStats from '../../components/GlobalStats'
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
                <GlobalStats/>
                <DataTable/>
            </div>
        )
    }
}

export default Home