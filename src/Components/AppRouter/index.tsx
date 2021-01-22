import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Request from '../../Pages/Request';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={() => <Redirect to="/request" />} />
                <Route path="/request" exact component={Request} />
                <Route path="/request/request-info/" exact component={() => <h1>request info</h1>} />
            </Switch>
        </Router>
    )
}

export default AppRouter
