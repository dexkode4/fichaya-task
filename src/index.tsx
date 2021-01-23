import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { InvoiceContextProvider } from './Context/invoiceContext';

ReactDOM.render(
  <React.StrictMode>
    <InvoiceContextProvider>
      <App />
    </InvoiceContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

