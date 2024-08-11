#!/usr/bin/env node

import { startDatabase, stopDatabase, startWiremock, stopWiremock } from './testContainers.js';

const args = process.argv.slice(2);

if (args.includes('--start')) {
  await Promise.all([startDatabase(), startWiremock()]);
} else if (args.includes('--stop')) {
  await Promise.all([stopDatabase(), stopWiremock()]);
}

process.exit(0);
