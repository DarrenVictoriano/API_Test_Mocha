const axios = require('axios');
const assert = require('chai').assert;
const expect = require('chai').expect;
//const envConfig = require('../../config/config');

describe('Sample_Mocha_Test', function () {
    let responseData;

    before('send HTTP request via axios', function () {
        responseData = 'hello';
    });

    context('with string arguments', function () {
        it('should equal hello', function () {

            // return async func here

            expect(responseData).to.equal('hello');
        });
    });
    context('with non string arguments', function () {
        it('should not equal hell', function () {
            expect(1).to.not.equal('hell');
        });
    });
});