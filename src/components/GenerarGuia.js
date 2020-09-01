import React from "react";
import { emitIncreaseCount } from "../utils/socket";
import { Typography, Paper, Grid, Button, Container, Card, CardContent } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const API_URL =  'http://localhost:8001/api/generar-guia'

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
          margin: theme.spacing(1),
          width: theme.spacing(16),
          height: theme.spacing(16),
        },
      },
})

class GenerarGuia extends React.Component {

    constructor(props) {
        super(props)

    }

    generarGuiaHandler(e) {
        e.preventDefault()
       
        fetch(API_URL, {
            method: 'POST'
        }).then( (response) => {
            console.log("from React");
            
            emitIncreaseCount()
        })
    }

    render() {
        const { classes } = this.props
        return (
            <Container maxWidth="sm" >
               <Grid item container justify="center" >
               <Card className={classes.root}>
                   <CardContent>
                    <Typography component="h5">Generar tracking de prueba</Typography>
                    <form>
                        <Button variant="contained" color="primary" onClick={this.generarGuiaHandler}>Generar Tracking</Button>
                    </form>
                    </CardContent>
                </Card>
                </Grid>
            </Container>
        )
    }

}

export default withStyles(styles, { withTheme: true })(GenerarGuia)