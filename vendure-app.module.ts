import { Module } from '@nestjs/common';
import { VendureModule } from '@vendure/core';

@Module({
  imports: [
    VendureModule.forRoot({
      apiOptions: {
        port: 3000, 
      },
      authOptions: {
      },
    }),
  ],
})
export class VendureAppModule {}
