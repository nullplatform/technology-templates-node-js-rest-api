import Server from '@nullplatform/server';
import Config from 'config';
import loggerInstance from './logger.js';

const { disableRequestLogging, routerOptions, openAPI } = Config.get('server');

const server = new Server({
  loggerInstance,
  disableRequestLogging,
  routerOptions: { ...routerOptions },
  openAPI,
});

export default server;
