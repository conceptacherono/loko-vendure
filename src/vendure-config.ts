import path from 'path';
import {VendureConfig,DefaultJobQueuePlugin,DefaultSearchPlugin,} from '@vendure/core';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import { AssetServerPlugin } from '@vendure/asset-server-plugin';

export const config: VendureConfig = {
  apiOptions: {
    port: 3000,
    adminApiPath: 'admin-api',
    shopApiPath: 'shop-api',
    cors: {
      origin: ['http://localhost:5173'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true,
    },
  },
  authOptions: {
    tokenMethod: 'cookie',
    cookieOptions: {
      secret: 'your-secret-key',
    },
    requireVerification: false,
  },
  dbConnectionOptions: {
    type: 'sqlite',
    database: 'vendure.sqlite',
    synchronize: true,
  },
  paymentOptions: {
    paymentMethodHandlers: [],
  },
  plugins: [
    AssetServerPlugin.init({
      route: 'assets',
      assetUploadDir: path.join(__dirname, '../static/assets'),
    }),
    DefaultJobQueuePlugin,
    DefaultSearchPlugin,
    AdminUiPlugin.init({
      route: 'admin',
      port: 3001,
    }),
  ],
};