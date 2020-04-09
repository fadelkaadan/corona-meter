import React from 'react'

import Routes from './pages/routes'
// import Nav from './pages/nav/nav'

import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className="app">
				{/* <Nav /> */}
				<Routes/>
			</div>
		)
	}
}

export default App