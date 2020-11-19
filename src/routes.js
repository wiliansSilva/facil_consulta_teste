import React from 'react';
import Listagem from './components/listagem/'
import Cadastro from './components/cadastro'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Listagem/>}/>
            <Route exact path="/Cadastro" component={() => <Cadastro/>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;