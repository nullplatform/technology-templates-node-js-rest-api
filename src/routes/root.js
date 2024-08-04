import { rootController } from '../controllers/index.js';

const { root, health } = rootController;

export default async (server) => {
  server.get('/', root);
  server.get('/health', health);
};
