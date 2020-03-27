const IP_ADDRESS = "192.168.0.15";
const AUTH_CODE = "darren";

module.exports = {
    getBaseURI: function () {
        return "http://" + IP_ADDRESS + "/sony";
    },
    getAuthCode: function () {
        return AUTH_CODE;
    },
    getHeaders: function () {
        axiosConfig = {
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-PSK': AUTH_CODE
            }
        }
        return axiosConfig;
    }
}