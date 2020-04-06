import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
	Link
  } from "react-router-dom";

import Home from './Home'
import About from './About'
import News from './News'
import NotFound from './NotFound'

import '../style/Nav.css';

class Nav extends Component {

    render() {
        return (
            <Router>
				<div>
				<nav>
					<ul>
						<li><Link to="/corona-meter">Home</Link></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/news">News</Link></li>
					</ul>
				</nav>

				<Switch>
					<Route exact path="/corona-meter">
						<Home/>
					</Route>
					<Route path="/about">
						<About/>
					</Route>
					<Route path="/news">
						<News/>
					</Route>
					
					<Route path="*">
						<NotFound/>
					</Route>
				</Switch>
				</div>
			</Router>
        )
    }
}

export default Nav