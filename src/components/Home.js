import React, { Component } from 'react'

import GlobalStats from './GlobalStats'
import DataTable from './DataTable'

import '../style/Home.css'

class Home extends Component {
    componentDidMount() {
        document.title = 'Home'
    }

    render() {
        return (
            <div>
                <GlobalStats/>
                <DataTable/>
            </div>
        )
    }
}

export default Home