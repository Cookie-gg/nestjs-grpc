import { promisify } from 'util';
import { credentials } from '@grpc/grpc-js';
import { UserServiceClient } from './codegen/user_grpc_pb';
import {
  CreateUserRequest,
  GetUserRequest,
  UpdateUserRequest,
  User,
  Users,
} from './codegen/user_pb';

const userClient = new UserServiceClient(
  process.env.NEXT_PUBLIC_BACKEND_URL || 'localhost:50051',
  credentials.createInsecure(),
);

export const backend = {
  user: {
    get: async (id: number) =>
      (
        await promisify<GetUserRequest, User>(userClient.get).bind(userClient)(
          new GetUserRequest().setId(id),
        )
      ).toObject(),

    getMany: async () =>
      (
        await promisify<any, Users>(userClient.getMany).bind(userClient)({})
      ).toObject(),

    create: async (user: CreateUserRequest.AsObject) =>
      (
        await promisify<CreateUserRequest, any>(userClient.create).bind(
          userClient,
        )(new CreateUserRequest().setEmail(user.email).setName(user.name))
      ).toObject(),

    update: async (id: number, user: CreateUserRequest.AsObject) =>
      await promisify<UpdateUserRequest, any>(userClient.update).bind(
        userClient,
      )(
        new UpdateUserRequest()
          .setId(id)
          .setUpdates(
            new CreateUserRequest().setEmail(user.email).setName(user.name),
          ),
      ),

    delete: async (id: number) =>
      await promisify<GetUserRequest, any>(userClient.delete).bind(userClient)(
        new GetUserRequest().setId(id),
      ),
  },
};
