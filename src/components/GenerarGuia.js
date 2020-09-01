import React from "react";
import { emitIncreaseCount } from "../utils/socket";

const API_URL =  'http://localhost:8001/api/generar-guia'

export default class GenerarGuia extends React.Component {

    constructor(props) {
        super(props)

    }

    generarGuiaHandler(e) {
        e.preventDefault()
        fetch(API_URL, {
            method: 'POST'
        }).then( (response) => {
            emitIncreaseCount()
        })
    }

    render() {
        return (
            <div>
                Generar tracking de prueba:
                <form onSubmit={this.generarGuiaHandler}>
                    <button>Generar tracking de prueba</button>
                </form>
            </div>
        )
    }

}