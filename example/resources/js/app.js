import '../scss/index.scss';
import '../css/index.css';

import {createApp} from 'vue'

import ExampleVue from './example';

const app = createApp({});
app.component('example', ExampleVue);

function boot(...args) {
  console.info("App main file", process.env.NODE_ENV, process.env.DOES_NOT_EXIST);
  console.log("MIX_APP_URL=" + process.env.MIX_APP_URL);
  console.log("MIX_SAMPLE_VAR=" + process.env.MIX_SAMPLE_VAR);
}

debugger;
boot();
