import { Module } from '@nestjs/common';
import { VendurePlugin, VendureConfig, VendureModule, DefaultJobQueuePlugin } from '@vendure/core';
import { config } from './vendure-config';

@Module({
  imports: [
    VendureModule.forRoot(config),
  ],
})
export class VendureAppModule {}
