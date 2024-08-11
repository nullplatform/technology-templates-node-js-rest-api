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

const startWiremock = async () => {
  Logger.info('Initializing mock server...');
  await Wiremock.start();
  Logger.info('Mock server initialized successfully');
};

// eslint-disable-next-line mocha/no-top-level-hooks
before(async () => {
  await Promise.all([startDatabase(), startWiremock()]);
});

// eslint-disable-next-line mocha/no-top-level-hooks
after(async () => {
  await Promise.all([Database.stop(), Wiremock.stop()]);
});
