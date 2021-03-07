import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Cadastro from './components/pages/cadastro'
import Home from './components/pages/home'
import Listagem from './components/pages/listagem'

export default () => {
    return(
            <Switch>
                <Route exact path="/cadastro" component={Cadastro} />
                <Route exact path="/consultar" component={Listagem} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/" component={Home} />
            </Switch>
    )
}