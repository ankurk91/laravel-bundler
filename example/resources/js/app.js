import '../scss/index.scss';
import '../css/index.css';

// vue needs to be installed first
//import ExampleVue from './example';

// Import module from node_modules to extract a vendor.js
import qs from 'qs';

function example(...args) {
  console.log("App main file");
  console.log("MIX_APP_URL=" + process.env.MIX_APP_URL);
  console.log("MIX_SAMPLE_VAR=" + process.env.MIX_SAMPLE_VAR);
}

example();
