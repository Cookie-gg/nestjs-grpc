import { NestFactory } from '@nestjs/core';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<GrpcOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:50051',
      package: 'sample',
      protoPath: join(process.cwd(), 'proto/sample.proto'),
    },
  });
  await app.listen();
}
bootstrap();
