const axios = require('axios');
const envConfig = require('./config/default.js');

body = {
    "method": "getCurrentTime",
    "id": 51,
    "params": [],
    "version": "1.0"
}

axios.post(envConfig.getBaseURI() + "/system", body, envConfig.getHeaders(), envConfig.getBasicAuth())
    .then(res => {
        console.log(res.data);
    });
