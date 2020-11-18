import React from 'react';
import Listagem from './components/listagem/'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Listagem/>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;