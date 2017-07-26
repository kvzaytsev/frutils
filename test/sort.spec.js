'use strict'
const chai = require('chai');
const expect = chai.expect;

const { sorts } = require('../dist/frutils');

describe('Array sorting by means of', () => {
  let inputArray, expectedArray;

  before(() => {
    inputArray = [4, 1, 6, 2, 7, 0, 9, 3];
    expectedArray = [].concat(inputArray).sort();
  });

  describe('Select sort', () => {
    
    it('should sort the same way as native .sort()', () => {
      expect(sorts.select(inputArray)).to.deep.equal(expectedArray);
    });

  });

  describe('Insert sort', () => {

    it('should sort the same way as native .sort()', () => {
      expect(sorts.insert(inputArray)).to.deep.equal(expectedArray);
    });

  });

});

