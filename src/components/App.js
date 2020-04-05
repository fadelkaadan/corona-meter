import React from 'react'

import GlobalStats from './GlobalStats'
import DataTable from './DataTable'

import '../style/App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <GlobalStats/>
                <DataTable/>
            </div>
        )
    }
}

export default App