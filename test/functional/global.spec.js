import Logger from '../../src/logger.js';

// eslint-disable-next-line mocha/no-top-level-hooks
before(async () => {
  Logger.info('Add your global setup here');
});

// eslint-disable-next-line mocha/no-top-level-hooks
after(async () => {
  Logger.info('Add your global teardown here');
});
