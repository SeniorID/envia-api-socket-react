const express = require('express')

const router = express.Router()
const api_url = process.env.API_URL
const api_token = process.env.API_TOKEN

router.post('/generar-guia', (req, res) => {

    var axios = require('axios');

    // Datos obtenidos de la documentación
    var data = {
            "origin":{
                "name":"oscar mx",
                "company":"oskys factory",
                "email":"osgosf8@gmail.com",
                "phone":"8116300800",
                "street":"av vasconcelos",
                "number":"1400",
                "district":"mirasierra",
                "city":"Monterrey",
                "state":"NL",
                "country":"MX",
                "postalCode":"66236",
                "reference":""
            },
            "destination":{
                "name":"oscar",
                "company":"empresa",
                "email":"osgosf8@gmail.com",
                "phone":"8116300800",
                "street":"av vasconcelos",
                "number":"1400",
                "district":"palo blanco",
                "city":"monterrey",
                "state":"NL",
                "country":"MX",
                "postalCode":"66240",
                "reference":""},
                "packages":[
                    {
                        "content":"camisetas rojas",
                        "amount":1,
                        "type":"box",
                        "dimensions":{
                            "length":1,"width":1,"height":1
                        },
                        "weight":1,
                        "insurance":0,
                        "declaredValue":20,
                        "weightUnit":"KG",
                        "lengthUnit":"CM"
                    }],
                "shipment":{
                    "carrier":"fedex",
                    "service":"express",
                    "type":1},
                    "settings":{
                        "printFormat":"PDF",
                        "printSize":"STOCK_4X6",
                        "comments":"comentarios de el envío"
                    }
    };

    var config = {
        method: 'post',
        url: `${api_url}/ship/generate/`,
        headers: { 
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${api_token}`
        },
        data : data
    };

    axios(config)
    .then(function (response) {
        //Se genero una guia debemos de aumentar el contador de los clientes.
        res.send(response.data)
    })
    
})

module.exports = router