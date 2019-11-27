const createApplication = require('@feathersjs/feathers')
const socketio = require('@feathersjs/socketio-client')
const io = require('socket.io-client')

const socket = io('http://localhost:3030', {
  transports: ['websocket'],
  reconnectionDelay: 5000
})

const feathers = createApplication()

feathers.configure(socketio(socket))

feathers.service('messages').create({}).then(data => {
  console.log(data)
}).catch(data => {

  console.log(data)
  console.log('Look at the error above, it\'s not usual Feathers error and contains a lot of internal information.')
  process.exit()
})
