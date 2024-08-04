import { ServerError } from '@nullplatform/server';

const AuthenticationError = ServerError.createError(
  'FST_ERR_AUTHENTICATION',
  'Authentication failed, please check your credentials and try again',
  401,
);

export default AuthenticationError;
