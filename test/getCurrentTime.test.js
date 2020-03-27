const envConfig = require('./config/config');
const axios = require('axios');
const expect = require('chai').expect;

describe('getCurrentTime', function () {
    context('correct parameters', function () {
        it('should return current time', function () {

            body = {
                "method": "getCurrentTime",
                "id": 51,
                "params": [],
                "version": "1.0"
            }

            return axios.post(envConfig.getBaseURI() + "/system", body, envConfig.getHeaders())
                .then(res => {
                    //console.log(res.data);

                    actualResponse = res.data;
                    expect(actualResponse.error).to.be.undefined;
                    expect(actualResponse.result).to.not.be.null;
                });
        });
    });
    context('incorrect parameters', function () {
        it('should still return the current time', function () {

            body = {
                "method": "getCurrentTime",
                "id": 51,
                "params": [11],
                "version": "1.0"
            }

            return axios.post(envConfig.getBaseURI() + "/system", body, envConfig.getHeaders())
                .then(res => {
                    //console.log(res.data);

                    actualResponse = res.data;
                    expect(actualResponse.result).to.not.be.null;
                    expect(actualResponse.error).to.be.undefined;
                });
        });
    });
});