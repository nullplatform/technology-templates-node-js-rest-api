import { ServerError, AuthenticationError } from '../errors/index.js';

export default class AuthorizationService {
  constructor({ httpClient }) {
    this.httpClient = httpClient;
  }

  async isAuthorized({ token, action, nrn, user }) {
    if (!token) {
      throw new AuthenticationError('Missing token');
    }
    if (!action) {
      throw new AuthenticationError('Missing action');
    }
    if (!nrn) {
      throw new AuthenticationError('Missing NRN (Nullplatform Resource Name)');
    }
    const searchParams = {
      nrn,
      userId: user,
      action,
    };
    try {
      const { granted } = await this.httpClient.get({
        url: 'authz',
        headers: { Authorization: token },
        searchParams,
      });
      return granted;
    } catch (error) {
      const message = ServerError.parseMessage(error, 'message') || error.message;
      throw new AuthenticationError(message, { cause: error });
    }
  }
}
