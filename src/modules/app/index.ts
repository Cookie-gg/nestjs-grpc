import { UserModule } from '../user';
import { Module } from '@nestjs/common';

@Module({
  imports: [UserModule],
})
export class AppModule {}
