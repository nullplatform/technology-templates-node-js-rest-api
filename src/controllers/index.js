import { authorizationService } from '../services/index.js';
import RootController from './RootController.js';

const rootController = new RootController({ authorizationService });

// eslint-disable-next-line import/prefer-default-export
export { rootController };
