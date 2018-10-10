import {build} from 'ladda-cache';
import * as skypicker from './skypicker';

const config = {
  skypicker: {
    ttl: 300,
    api: skypicker
  }
};

export default build(config);
