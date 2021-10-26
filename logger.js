const EventEmitter = require('events')

const emitter = new EventEmitter()

emitter.on('run', (message) => { 
    console.log(message)
})

function run(message){  //deixando dinâmico
    emitter.emit('run', message)
}

 