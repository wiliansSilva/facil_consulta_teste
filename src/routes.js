import React from 'react';
import Listagem from './components/listagem/'
import Cadastro from './components/cadastro'
import Atualizar from './components/atualizar'
import Config_Horario from './components/configura_horarios'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <Listagem/>}/>
            <Route exact path="/Cadastro" component={() => <Cadastro/>}/>
            <Route exact path="/Editar" component={() => <Atualizar/>}/>
            <Route exact path="/Configurar_Horario" component={() => <Config_Horario/>}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;