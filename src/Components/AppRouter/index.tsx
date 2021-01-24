import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Request from '../../Pages/Request';
import ComingSoon from '../../Pages/ComingSoon';
import GenerateInvoice from '../../Pages/GenerateInvoice';
import { InvoiceContext } from '../../Context/invoiceContext';
import Invoice from '../../Pages/Invoice';

function AppRouter() {
    const state = useContext(InvoiceContext);
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={() => <Redirect to="/request" />} />
                <Route path="/request" exact component={Request} />
                <Route path="/request/generate-invoice" exact component={GenerateInvoice} />
                <Route path="/request/generate-invoice/:id" exact
                    render={() => state?.isFormFilled ? <Invoice /> : <Redirect to="/request" />

                    }
                />
                <Route path="*" component={ComingSoon} />
            </Switch>
        </Router>
    )
}

export default AppRouter
