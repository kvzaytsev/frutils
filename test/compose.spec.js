'use strict'
const chai = require('chai');
const expect = chai.expect;

const {compose} = require('../dist/frutils');

describe('Composed funcion', () => {
  let f1, f2, f3;

  before(() => {
    f1 = a => a * a;
    f2 = a => a + a;
    f3 = a => a / 10;
  });
    
  it('call should return the same result as properly called original functions', () => {
    expect(compose(f1, f2, f3)(5)).to.deep.equal(f3(f2(f1(5))));
  });

});