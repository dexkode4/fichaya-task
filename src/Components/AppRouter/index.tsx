import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Request from '../../Pages/Request';
import ComingSoon from '../../Pages/ComingSoon';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={() => <Redirect to="/request" />} />
                <Route path="/request" exact component={Request} />
                <Route path="/dashboard" exact component={ComingSoon} />
                <Route path="/customers" exact component={ComingSoon} />
                <Route path="/associates" exact component={ComingSoon} />
                <Route path="/schedules" exact component={ComingSoon} />
                <Route path="/payments" exact component={ComingSoon} />
                <Route path="/settings" exact component={ComingSoon} />
            </Switch>
        </Router>
    )
}

export default AppRouter
