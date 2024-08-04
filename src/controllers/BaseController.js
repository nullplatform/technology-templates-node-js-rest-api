import { AuthorizationError } from '../errors/index.js';

export default class BaseController {
  constructor({ authorizationService }) {
    this.authorizationService = authorizationService;
  }

  async authorize(request, action, nrn) {
    // eslint-disable-next-line no-unused-vars
    const { value: token = null, organization = null, user = null } = request.token || {};
    const authorized = await this.authorizationService.isAuthorized({ token, user, nrn, action });
    if (!authorized) {
      throw new AuthorizationError('Insufficient permissions to access the requested resource', {
        cause: `Authorization error, NRN: ${nrn}, action: ${action}`,
      });
    }
  }
}
