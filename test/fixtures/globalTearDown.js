import { stop } from './testContainers.js';

const unitTest = process.env.UNIT_TEST === 'true';

const mochaGlobalTeardown = async () => {
  if (!unitTest) {
    await stop();
  }
};

// eslint-disable-next-line import/prefer-default-export
export { mochaGlobalTeardown };
