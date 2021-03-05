import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Cadastro from './components/pages/cadastro'
import Home from './components/pages/home'

export default () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/cadastro" component={Cadastro} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/" component={Home} />
            </Switch>
        </HashRouter>
    )
}