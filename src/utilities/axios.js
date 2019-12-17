import Vue from 'vue';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://pollution-api-osyra.herokuapp.com/',
  headers: {
    'content-type': 'application/json'
  }
});

Vue.prototype.$axios = axiosInstance;
