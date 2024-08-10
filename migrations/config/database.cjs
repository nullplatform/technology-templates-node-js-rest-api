const Config = require('config');

const {
  name: database,
  user: username,
  password,
  host,
  port,
  dialect,
  schema,
} = Config.get('database');
module.exports = {
  [process.env.NODE_ENV || 'development']: {
    username,
    password,
    database,
    host,
    port,
    dialect,
    logging: false,
    migrationStorageTableName: 'migrations',
    migrationStorageTableSchema: schema,
  },
};
