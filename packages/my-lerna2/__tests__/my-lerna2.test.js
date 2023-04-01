'use strict';

const myLerna2 = require('..');
const assert = require('assert').strict;

assert.strictEqual(myLerna2(), 'Hello from myLerna2');
console.info('myLerna2 tests passed');
