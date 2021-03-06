import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./home";
import NotFound from "./notFound";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/corona-meter" component={Home} />

                {/* PAGE NOT FOUND 404 */}
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
};

export default Routes;
