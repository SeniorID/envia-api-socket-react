import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Counter from '../components/Counter'
import GenerarGuia from '../components/GenerarGuia'

const HeaderNav = () =>  (
    <header className="navbar">
        <NavLink to="/" activeClassName="selected" exact >Counter</NavLink>
        <NavLink to="/generar-guia" activeClassName="selected">Generar Guia</NavLink>
    </header>
)

export default class AppRouter extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {
        return (
        
            <BrowserRouter>
                <HeaderNav></HeaderNav>
                <Switch>
                    <Route path="/" exact>
                        <Counter />
                    </Route>
                    <Route path="/generar-guia">
                        <GenerarGuia />
                    </Route>
                    <Route>
                        <div>
                            <h1>Not Found!</h1>
                        </div>
                    </Route>   
                    </Switch>
            </BrowserRouter>
        
        )
    }

}