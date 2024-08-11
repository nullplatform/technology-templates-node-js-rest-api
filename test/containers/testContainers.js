import { Database, Wiremock } from '@nullplatform/test-container';
import { execSync } from 'child_process';
import Config from 'config';
import Logger from '../../src/logger.js';

const startDatabase = async () => {
  Logger.info('Initializing test database...');
  const { name, user, password, port } = Config.get('database');
  await Database.start({ name, user, password, port });
  Logger.info('Test database initialized successfully');
  Logger.info('Running database migrations...');
  await execSync('npm run migrate');
  Logger.info('Database migrations completed successfully');
};

const stopDatabase = async () => {
  Logger.info('Stopping test database...');
  await Database.stop();
  Logger.info('Test database stopped successfully');
};

const startWiremock = async () => {
  Logger.info('Initializing mock server...');
  await Wiremock.start();
  Logger.info('Mock server initialized successfully');
};

const stopWiremock = async () => {
  Logger.info('Stopping mock server...');
  await Wiremock.stop();
  Logger.info('Mock server stopped successfully');
};

export { startDatabase, stopDatabase, startWiremock, stopWiremock };
