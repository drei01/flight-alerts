import {build} from 'ladda-cache';
import * as skypicker from './skypicker';
import * as airlines from './airlines';

const config = {
  skypicker: {
    ttl: 300,
    api: skypicker
  },
  airlines: {
    ttl: 300,
    api: airlines
  }
};

export default build(config);
