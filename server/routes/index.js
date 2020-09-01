const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).send({ response: 'Envia.com' })
})



module.exports = router