import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Request from '../../Pages/Request';
import ComingSoon from '../../Pages/ComingSoon';
import GenerateInvoice from '../../Pages/GenerateInvoice';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={() => <Redirect to="/request" />} />
                <Route path="/request" exact component={Request} />
                <Route path="/request/generate-invoice" exact component={GenerateInvoice} />
                <Route path="*" component={ComingSoon} />
            </Switch>
        </Router>
    )
}

export default AppRouter
