import {build} from 'ladda-cache';
import * as skypicker from './skypicker';
import * as airports from './airports';
import * as geolocation from './geolocation';

const config = {
  skypicker: {
    ttl: 300,
    api: skypicker
  },
  airports: {
    ttl: 1000,
    api: airports
  },
  geolocation: {
    ttl: 1000,
    api: geolocation
  }
};

export default build(config);
