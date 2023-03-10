/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Empty } from "google-protobuf/google/protobuf/empty_pb";
import { Observable } from "rxjs";

export const protobufPackage = "user";

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Users {
  users: User[];
}

export interface GetUserRequest {
  id: number;
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface UpdateUserRequest {
  id: number;
  updates: CreateUserRequest | undefined;
}

export const USER_PACKAGE_NAME = "user";

export interface UserServiceClient {
  get(request: GetUserRequest): Observable<User>;

  getMany(request: Empty): Observable<Users>;

  create(request: CreateUserRequest): Observable<Empty>;

  update(request: UpdateUserRequest): Observable<Empty>;

  delete(request: GetUserRequest): Observable<Empty>;
}

export interface UserServiceController {
  get(request: GetUserRequest): Promise<User> | Observable<User> | User;

  getMany(request: Empty): Promise<Users> | Observable<Users> | Users;

  create(request: CreateUserRequest): void;

  update(request: UpdateUserRequest): void;

  delete(request: GetUserRequest): void;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["get", "getMany", "create", "update", "delete"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UserService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USER_SERVICE_NAME = "UserService";
