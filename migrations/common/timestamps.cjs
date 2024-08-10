const { DataTypes, Sequelize } = require('@nullplatform/relational-database');

module.exports = {
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  },
  deleted_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
};
