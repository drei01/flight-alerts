import {build} from 'ladda-cache';
import * as skypicker from './skypicker';
import * as airports from './airports';

const config = {
  skypicker: {
    ttl: 300,
    api: skypicker
  },
  airports: {
    ttl: 1000,
    api: airports
  }
};

export default build(config);
