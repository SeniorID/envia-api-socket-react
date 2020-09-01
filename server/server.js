const http = require('http')
const express = require('express')
const cors = require('cors')
const socketIO = require('socket.io')
const indexRouter = require('./routes/index')
const apiRouter = require('./routes/api')
const origin = process.env.ORIGIN_ALLOWED

const app = express()

app.use(cors({
    origin: origin
}))

app.use(indexRouter)
app.use('/api/',apiRouter )

const server = http.createServer(app)
const port = process.env.PORT || 8001

const io = socketIO(server, { 
    cookie: false
})


/**
 * IO SOCKET
 * Aqui se definen como va a reaccionar el server a los eventos.
 */
let counter = 0 

io.on('connection', socket => {
    
    socket.on('increaseCount', () => {
        
        io.emit('increaseCount', ++counter)
        
    })

    socket.on('disconnect', () => {
        console.log('Client disconected!')
    })

})


server.listen(port, () => { 
    console.log('Listening on port 8001');
})



