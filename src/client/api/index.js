import {build} from 'ladda-cache';
import * as skypicker from './skypicker';
import * as geolocation from './geolocation';

const config = {
  skypicker: {
    ttl: 300,
    api: skypicker
  },
  geolocation: {
    ttl: 1000,
    api: geolocation
  }
};

export default build(config);
