import '../scss/index.scss';
import '../css/index.css';

import Vue from 'vue';
// vue needs to be installed first
import ExampleVue from './example';
// Import module from node_modules to extract a vendor.js
Vue.component('example', ExampleVue);

function boot(...args) {
  console.log("App main file", process.env.NODE_ENV, process.env.DOES_NOT_EXIST);
  console.log("MIX_APP_URL=" + process.env.MIX_APP_URL);
  console.log("MIX_SAMPLE_VAR=" + process.env.MIX_SAMPLE_VAR);
}

boot();
