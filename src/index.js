import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// componentes
import App from './App';
import Destaques from './destaques/Destaques';
import Sobre from './sobre/Sobre';

import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';


ReactDOM.render(

    <div className="row">
        <div className="col-md-1" />

        <div className="col-md-10">
            <BrowserRouter>
                <Route exact="true" path="/" component={App} />
                <Route path="/destaques" component={Destaques} />
                <Route path="/sobre" component={Sobre} />
            </BrowserRouter>
        </div>

        <div className="col-md-1" />
    </div>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
