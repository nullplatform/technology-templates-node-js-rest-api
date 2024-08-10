const { DataTypes } = require('@nullplatform/relational-database');
const { schema } = require('./config/config.cjs');
const uuid = require('./common/uuid.cjs');
const timestamps = require('./common/timestamps.cjs');

const tableName = 'examples';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(
      { schema, tableName },
      {
        ...uuid,
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
        },
        tags: {
          type: DataTypes.ARRAY(DataTypes.STRING),
        },
        data: {
          type: DataTypes.STRING,
        },
        ...timestamps,
      },
    );
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable({ schema, tableName });
  },
};
