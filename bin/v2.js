#!/usr/bin/env node
const currentNodeVersion = process.versions.node;
const semver = currentNodeVersion.split('.');
const major = semver[0];

if (major < 8) {
  console.error(
    `You are running Node ${currentNodeVersion}.\n
            We requires Node 8 or higher. \n
            Please update your version of Node.
        `
  );
  process.exit(1);
}

require('./index.js');
