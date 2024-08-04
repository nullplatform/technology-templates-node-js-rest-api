import Config from 'config';
import { AuthenticatedHttpClient, HttpClient } from '@nullplatform/http-client';
import Logger from '../logger.js';
import AuthorizationService from './AuthorizationService.js';
import CoreEntitiesService from './CoreEntitiesService.js';

const { logging, apiKey, auth: authOptions } = Config.get('client');
const loggingFunction = logging
  ? (event) => {
      if (event.type === 'REQUEST') {
        const request = event.data;
        Logger.info(`[${request.method.toUpperCase()}] ${request.baseURL}${request.url}`);
      } else if (event.type === 'RESPONSE') {
        const response = event.data;
        Logger.info(
          `[${response.config.method.toUpperCase()}] ${response.config.url} - ${response.status}`,
        );
      }
    }
  : false;

HttpClient.setDefaultOptions({ logging: loggingFunction });

const authClient = new HttpClient({
  ...authOptions,
});

AuthenticatedHttpClient.setApiKey(apiKey);
AuthenticatedHttpClient.setAuthClient(authClient);

const authorizationService = new AuthorizationService({
  httpClient: authClient,
});

const coreEntitiesService = new CoreEntitiesService({
  httpClient: new AuthenticatedHttpClient(Config.get('client.coreEntities')),
});

export { authorizationService, coreEntitiesService };
