// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.use('/messages', {
    async create () {
      return {
        message: 'test'
      };
    },
    async remove () {
      return {
        message: 'test'
      };
    },
  });
};
