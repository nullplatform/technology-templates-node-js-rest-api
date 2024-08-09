// eslint-disable-next-line import/no-extraneous-dependencies
import 'dotenv/config';
import Cluster from '@nullplatform/cluster';
import Config from 'config';
import server from './server.js';
import logger from './logger.js';

const { host, port, cluster } = Config.get('server');

const start = async () => {
  try {
    server.log.info(`Starting server on port: ${port}`);
    await server.listen({ host, port });
  } catch (error) {
    server.log.error(error);
    throw error;
  }
};

Cluster.start(start, { logger, ...cluster });
