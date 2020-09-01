import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:8001')

export function increaseCountSubscribe(cb) {
    socket.on('increaseCount', (number) => cb(number))   
}

export function emitIncreaseCount() {
    socket.emit('increaseCount')
}

