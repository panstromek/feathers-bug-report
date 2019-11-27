const { Unprocessable } = require('@feathersjs/errors')

module.exports = function (app) {
  if (typeof app.channel !== 'function') {
    // If no real-time functionality has been configured just return
    return
  }

  app.on('connection', connection => {
    // On a new real-time connection, add it to the anonymous channel
    app.channel('anonymous').join(connection)
  })
  // eslint-disable-next-line no-unused-vars
  app.publish((data, hook) => {

    console.log('Publishing an event - now I crash') // eslint-disable-line
    // const test = (undefined).not_here
    throw new Unprocessable()

    return app.channel('authenticated')
  })
}
