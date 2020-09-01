import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom"
import Counter from '../components/Counter'
import GenerarGuia from '../components/GenerarGuia'

import { Grid, Typography } from '@material-ui/core'
import '../styles/style.css'

const HeaderNav = () =>  (
    <Grid container justify="center" spacing={2} className="root">
        <Grid item > 
            <NavLink to="/" activeClassName="selected" exact style={{ textDecoration: 'none' }}>
                <Typography variant="h6" component="h5">Counter</Typography>
            </NavLink> 
        </Grid>
        <Grid item>
            <NavLink to="/generar-guia" activeClassName="selected" style={{ textDecoration: 'none' }}>
                <Typography variant="h6" component="h5">Generar Guia</Typography>
            </NavLink>
        </Grid>
    </Grid>
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