import Server from '@nullplatform/server';
import Config from 'config';
import loggerInstance from './logger.js';

const { disableRequestLogging, maxParamLength, openAPI } = Config.get('server');

const server = new Server({
  loggerInstance,
  disableRequestLogging,
  maxParamLength,
  openAPI,
});

export default server;
