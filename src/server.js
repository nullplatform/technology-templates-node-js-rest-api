import Server from '@nullplatform/server';
import Config from 'config';
import logger from './logger.js';

const { disableRequestLogging, maxParamLength, openAPI } = Config.get('server');

const server = new Server({
  logger,
  disableRequestLogging,
  maxParamLength,
  openAPI,
});

export default server;
