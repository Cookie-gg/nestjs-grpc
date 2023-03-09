import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user';
import { PrismaService } from '~/services/prisma';

@Module({
  providers: [PrismaService],
  controllers: [UserController],
})
export class UserModule {}
