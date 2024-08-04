import BaseController from './BaseController.js';

export default class RootController extends BaseController {
  async root() {
    return {};
  }

  async health() {
    return { status: 'ok' };
  }
}
