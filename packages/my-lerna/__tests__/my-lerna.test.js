'use strict';

const myLerna = require('..');
const assert = require('assert').strict;

assert.strictEqual(myLerna(), 'Hello from myLerna');
console.info('myLerna tests passed');
