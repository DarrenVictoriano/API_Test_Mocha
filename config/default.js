require('dotenv').config();

module.exports = {
    getBaseURI: () => {
        return "http://" + process.env.IP_ADDRESS + "/sony";
    },
    getHeaders: () => {
        axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-PSK': process.env.PSK_CODE
            }
        }
        return axiosConfig;
    },
    getBasicAuth: () => {
        axiosAuth = {
            auth: {
                'username': process.env.USER,
                'password': process.env.PASS
            }
        }
    }
}