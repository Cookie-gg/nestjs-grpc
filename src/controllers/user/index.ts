import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreateUserRequest,
  GetUserRequest,
  User,
  Users,
  UserServiceController,
  USER_SERVICE_NAME,
} from 'proto/user';
import { PrismaService } from '~/services/prisma';

@Controller()
export class UserController implements UserServiceController {
  constructor(private readonly prismaService: PrismaService) {}

  @GrpcMethod(USER_SERVICE_NAME)
  async get(data: GetUserRequest): Promise<User> {
    return this.prismaService.user.findUnique({ where: { id: data.id } });
  }

  @GrpcMethod(USER_SERVICE_NAME)
  async getMany(): Promise<Users> {
    const users = await this.prismaService.user.findMany();
    return { users };
  }

  @GrpcMethod(USER_SERVICE_NAME)
  async create(data: CreateUserRequest): Promise<User> {
    return this.prismaService.user.create({ data });
  }

  @GrpcMethod(USER_SERVICE_NAME)
  async update(data: User): Promise<User> {
    return this.prismaService.user.update({ where: { id: data.id }, data });
  }
}
