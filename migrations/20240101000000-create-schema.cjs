const { schema } = require('./config/config.cjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createSchema(schema);
  },
  down: async (queryInterface) => {
    await queryInterface.dropSchema(schema);
  },
};
