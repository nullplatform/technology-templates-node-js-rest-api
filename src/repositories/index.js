import Config from 'config';
import { SequelizeModel, SequelizeRepositoryProvider } from '@nullplatform/relational-database';
import Logger from '../logger.js';
import ExampleRepository from './ExampleRepository.js';

const { schema, logging, ...config } = Config.get('database');
SequelizeRepositoryProvider.configure({ ...config, logging: logging ? Logger : null });

const sequelize = await SequelizeRepositoryProvider.instance();

await SequelizeModel.initialize(sequelize, { schema });
await SequelizeModel.associate(sequelize);

const { example } = sequelize.models;

const exampleRepository = new ExampleRepository(example);

// eslint-disable-next-line import/prefer-default-export
export { exampleRepository };
