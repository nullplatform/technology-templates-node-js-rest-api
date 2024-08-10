module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
  },
  down: async () => {
    // The down migration is not needed for this case
    // As dropping the extension is not a standard operation
  },
};
