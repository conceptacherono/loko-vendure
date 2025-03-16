import { bootstrap } from '@vendure/core';
import { config } from './vendure-config';

bootstrap(config)
  .then((app) => console.log('Vendure started on http://localhost:3000'))
  .catch((err) => console.error(err));
