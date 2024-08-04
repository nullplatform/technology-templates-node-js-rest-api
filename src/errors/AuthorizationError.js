import { ServerError } from '@nullplatform/server';

const AuthorizationError = ServerError.createError(
  'FST_ERR_AUTHORIZATION',
  'Authorization error, insufficient permissions to access the requested resource',
  403,
);

export default AuthorizationError;
