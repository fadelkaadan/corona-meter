import React from 'react'
import {
	BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import Home from './home'
import About from './about'
import News from './news'
import NotFound from './notFound'

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/corona-meter" component={Home} />
				<Route exact path="/news" component={News}/>
				<Route exact path="/health-organizations">
					{/* <HealthOrgs/> */}
				</Route>
				<Route path="/info">
					{/* <Info/> */}
				</Route>
				<Route path="/about" component={About}/>

				{/* PAGE NOT FOUND 404 */}
				<Route path="*" component={NotFound}/>
			</Switch>
		</Router>
	)
}

export default Routes