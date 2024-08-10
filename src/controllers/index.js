import { authorizationService, exampleService } from '../services/index.js';
import RootController from './RootController.js';
import ExampleController from './ExampleController.js';

const rootController = new RootController({ authorizationService });
const exampleController = new ExampleController({ authorizationService, exampleService });

export { rootController, exampleController };
