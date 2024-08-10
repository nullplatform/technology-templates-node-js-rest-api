import RelationalDatabase from '@nullplatform/relational-database';

const { Sequelize, Model, DataTypes } = RelationalDatabase;

class Example extends Model {}

const initialize = (options) => {
  Example.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        comment: 'Unique identifier for the example',
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: 'Name of the example',
      },
      description: {
        type: DataTypes.STRING,
        comment: 'Description of the example',
      },
      tags: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        comment: 'Tags associated with the example',
      },
      data: {
        type: DataTypes.STRING,
        comment: 'Data associated with the example',
      },
    },
    {
      ...options,
      ...{
        modelName: 'example',
        tableName: 'examples',
      },
    },
  );

  // eslint-disable-next-line no-unused-vars, lodash/prefer-noop
  Example.associate = ({ models }) => {
    // Define associations here
  };

  return Example;
};

export default Example;
export { initialize };
