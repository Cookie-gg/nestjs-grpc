import { NestFactory } from '@nestjs/core';
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { packages } from '~/libs/proto';
import { AppModule } from '~/modules/app';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<GrpcOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      url: 'localhost:50051',
      package: packages,
      protoPath: packages.map((name) =>
        join(process.cwd(), `proto/${name}.proto`),
      ),
    },
  });
  await app.listen();
}
bootstrap();
