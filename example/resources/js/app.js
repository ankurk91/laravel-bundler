import '../scss/index.scss';
import '../css/index.css';

import ExampleVue from './example.vue';

// Import module from node_modules to extract a vendor.js
import qs from 'qs';

function example() {
  console.log("App main file");
  console.log("MIX_APP_URL=" + process.env.MIX_APP_URL);
  console.log("MIX_SAMPLE_VAR=" + process.env.MIX_SAMPLE_VAR);
}

example();
