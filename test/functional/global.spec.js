import {
  startDatabase,
  startWiremock,
  stopDatabase,
  stopWiremock,
} from '../containers/testContainers.js';

// eslint-disable-next-line mocha/no-top-level-hooks
before(async () => {
  await Promise.all([startDatabase(), startWiremock()]);
});

// eslint-disable-next-line mocha/no-top-level-hooks
after(async () => {
  await Promise.all([stopDatabase(), stopWiremock()]);
});
