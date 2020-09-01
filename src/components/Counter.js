import React, { useState, useEffect } from 'react'
import { increaseCountSubscribe, emitIncreaseCount } from '../utils/socket'
import { Paper, Grid, Typography, Card, CardContent, Container } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

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

class Counter extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0 
        }

        increaseCountSubscribe( (number) => { 
            
            this.setState( () => ({ count: number})   
        )} 
        )
    }


    render() {
        const { classes } = this.props;
        return (
            <Container maxWidth="sm" >
                <Grid item container justify="center" >
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h4" component="h3">Counter</Typography>
                            <Typography variant="h1" component="h2">{this.state.count} </Typography>
                        </CardContent> 
                    </Card>
                </Grid>
            </Container>
        )
    }

}

export default withStyles(styles, { withTheme: true })(Counter)