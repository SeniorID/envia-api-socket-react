import React, { useState, useEffect } from 'react'
import { increaseCountSubscribe, emitIncreaseCount } from '../utils/socket'

export default class Counter extends React.Component {

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
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
               
            </div>
        )
    }

}