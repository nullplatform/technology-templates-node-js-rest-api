import { start } from './testContainers.js';

const unitTest = process.env.UNIT_TEST === 'true';

const mochaGlobalSetup = async () => {
  if (!unitTest) {
    await start();
  }
};

// eslint-disable-next-line import/prefer-default-export
export { mochaGlobalSetup };
