const { DataTypes, Sequelize } = require('@nullplatform/relational-database');

module.exports = {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.literal('uuid_generate_v4()'),
    primaryKey: true,
    allowNull: false,
  },
};
