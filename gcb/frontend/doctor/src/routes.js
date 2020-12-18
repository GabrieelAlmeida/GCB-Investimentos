import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import CadDoctor from './pages/cadDoctor';
import ListarDoctor from './pages/listarDoctor';
import notFound from './pages/notFound';
import AlterarDoctor from './pages/alterarDoctor';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={CadDoctor}/>
            <Route path='/listar-doctor' component={ListarDoctor}/>
            <Route path='/alterar-doctor' component={AlterarDoctor}/>
            <Route component={notFound}/>
        </Switch>
    </BrowserRouter>

);

export default Routes;
