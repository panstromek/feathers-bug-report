// Application hooks that run for every service

module.exports = {
  before: {
    all: [ctx => {
      ctx.params.user = {
        password: 'this should be a secret'
      }
    }],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [ctx => {
      console.log('error should fo through here but it doesn\'t')
    }],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
