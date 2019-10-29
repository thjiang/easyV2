const axios = require('axios');

const baseUrl = 'https://www.v2ex.com';

const service = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
  timeout: 5000
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    console.log('err' + error);
    return Promise.reject(error);
  }
);

module.exports = service;
