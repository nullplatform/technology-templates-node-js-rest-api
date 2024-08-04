import Server from '@nullplatform/server';
import Config from 'config';
import logger from './logger.js';

const { disableRequestLogging } = Config.get('server');

const server = new Server({
  logger,
  disableRequestLogging,
});

export default server;
