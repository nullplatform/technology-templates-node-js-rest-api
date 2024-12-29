import { exec } from 'child_process';
import { promisify } from 'util';
import Logger from '../../src/logger.js';
import { authorizationService } from '../../src/services/index.js';

const execAsync = promisify(exec);
const command = 'npm run';
const commandOptions = ['migrate', 'migrate:undo', 'migrate:undo:all'];
const options = {
  env: {
    ...process.env,
    ...{
      TMPDIR: '/tmp',
      npm_config_cache: '/tmp/.npm',
      npm_config_tmp: '/tmp/.npm',
    },
  },
  stdio: 'inherit',
  detached: false,
};

const respond = (statusCode, message) => {
  if (statusCode >= 200 && statusCode < 300) {
    Logger.info(message);
  } else {
    Logger.error(message);
  }
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }, null, 2),
  };
};

const handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const token = event.headers?.Authorization || event.headers?.authorization;
  const { MIGRATION_ACTION, MIGRATION_NRN, MIGRATION_USER_ID } = options;

  if (!MIGRATION_ACTION) {
    return respond(500, `Missing 'MIGRATION_ACTION' environment variable`);
  }

  if (!MIGRATION_NRN) {
    return respond(500, `Missing 'MIGRATION_NRN' environment variable`);
  }

  if (!MIGRATION_USER_ID) {
    return respond(500, `Missing 'MIGRATION_USER_ID' environment variable`);
  }

  try {
    const authorized = await authorizationService.isAuthorized({
      token,
      action: MIGRATION_ACTION,
      nrn: MIGRATION_NRN,
      user: MIGRATION_USER_ID,
    });
    if (authorized) {
      const { option } = event.queryStringParameters || {};
      const argument = commandOptions.find((commandOption) => commandOption === option);
      if (option && argument) {
        try {
          const { stdout, stderr } = await execAsync(`${command} ${argument}`, options);
          if (stderr) {
            Logger.error(stderr);
          }
          if (stdout) {
            Logger.info(stdout);
          }
          return respond(200, { stderr, stdout });
        } catch (error) {
          Logger.error(error);
          return respond(500, error.message);
        }
      }
      return respond(
        400,
        `Please specific a valid 'option'. Possible values are ${commandOptions.join(', ')}`,
      );
    }
    return respond(
      403,
      `Authorization error, insufficient permissions to access the requested resource`,
    );
  } catch (error) {
    Logger.error(error);
    return respond(401, `Authentication failed, please check your credentials and try again`);
  }
};

// eslint-disable-next-line import/prefer-default-export
export { handler };
