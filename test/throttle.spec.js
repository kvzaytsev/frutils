'use strict'
const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
const should = chai.should();
const chaiAsPromised = require("chai-as-promised");

const { throttle } = require('../dist/frutils');

chai.use(spies);
chai.use(chaiAsPromised);

describe('Throttled function', () => {
    let targetFn = () => {};
    

    it('should not be called faster than threshold', (done) => {
        let spy = chai.spy(targetFn);
        let throttledFn = throttle(spy, 50);
        let timer = setInterval(throttledFn, 15);

        setTimeout(() => {
            clearInterval(timer);
            spy.should.have.been.called();
            spy.should.have.been.called.exactly(2);
            done();
        }, 100);
    });

});