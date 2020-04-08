import React, { Component } from 'react'

import GlobalStats from '../../components/GlobalStats'
import DataTable from '../../components/DataTable'


class Home extends Component {
    componentDidMount() {
        document.title = 'Home'
    }

    render() {
        return (
            <div className="home">
                <GlobalStats/>
                <DataTable/>
            </div>
        )
    }
}

export default Home