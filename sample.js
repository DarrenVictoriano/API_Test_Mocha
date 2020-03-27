const axios = require('axios');
const envConfig = require('./test/config/config.js');

body = {
    "method": "getCurrentTim",
    "id": 51,
    "params": [],
    "version": "1.0"
}

axios.post(envConfig.getBaseURI() + "/system", body, envConfig.getHeaders())
    .then(res => {
        console.log(res.data);
    });
