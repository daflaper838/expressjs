const EventEmitter = require('events')
const i = 9

const customEmitter = new EventEmitter()

customEmitter.on('response',(name, id)=>{
    console.log(`data recieved ${name} ${id}`)
})

if (i < 10){
customEmitter.emit('response','bane',85)

}