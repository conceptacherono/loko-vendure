import { NestFactory } from '@nestjs/core';
import { VendureAppModule } from './vendure-app.module';
import { VendureServer } from '@vendure/core';

async function bootstrap() {
  const app = await NestFactory.create(VendureAppModule);

  
  app.enableCors({
    origin: 'http://localhost:5173', 
    credentials: true,  
  });

  const server = new VendureServer({
    app,
    port: 3000, 
  });

  await server.listen();
  console.log('Vendure server is running on http://localhost:3000');
}

bootstrap();
