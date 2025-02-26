import { VendureConfig, DefaultJobQueuePlugin, DefaultSearchPlugin } from '@vendure/core';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SQLiteConnectionOptions';

export const config: VendureConfig = {
  apiOptions: {
    port: 3000,
    adminApiPath: 'admin-api',
    shopApiPath: 'shop-api',
    cors: {
        origin: ['http://localhost:5173'], 
        credentials: true,
      },
  },
  authOptions: {
    tokenMethod: 'cookie', 
    cookieOptions: {
      secret: 'your-secret-key', 
    },
    requireVerification: false, // for now
  },
  dbConnectionOptions: {
    type: 'sqlite',
    database: 'vendure.sqlite',
    synchronize: true,
  } as SqliteConnectionOptions,
  paymentOptions: {
    paymentMethodHandlers: [], 
  },
  plugins: [
    DefaultJobQueuePlugin,
    DefaultSearchPlugin,
  ],
};
