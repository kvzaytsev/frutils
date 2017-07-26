'use strict'
const chai = require('chai');
const expect = chai.expect;

const {curry} = require('../dist/frutils');

describe('Result of call sum(1, 2, 3)', () => {
  let testFn, curried;

  before(() => {
    testFn = (a,b,c) => a + b + c;
    curried = curry(testFn);
  });

  it('should be the same as curried(1)(2)(3)', () => {
    expect(testFn(1, 2, 3)).to.equal(curried(1)(2)(3));
  });

  it('should be the same as curried(1, 2)(3)', () => {
    expect(testFn(1, 2, 3)).to.equal(curried(1, 2)(3));
  });

  it('should be the same as curried(1, 2, 3)', () => {
    expect(testFn(1, 2, 3)).to.equal(curried(1, 2, 3));
  });

});