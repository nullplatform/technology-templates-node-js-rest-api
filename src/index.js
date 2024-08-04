// eslint-disable-next-line import/no-extraneous-dependencies
import 'dotenv/config';
import Config from 'config';
import server from './server.js';

const { host, port } = Config.get('server');

const start = async () => {
  try {
    server.log.info(`Starting server on port: ${port}`);
    await server.listen({ host, port });
  } catch (error) {
    server.log.error(error);
    process.exit(1);
  }
};

start();
