/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { Empty } from "../google/protobuf/empty";

export const protobufPackage = "user";

export interface GetUserRequest {
  id: number;
}

export interface CreateUserRequest {
  name: string;
  email: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Users {
  users: User[];
}

export const USER_PACKAGE_NAME = "user";

export interface UserServiceClient {
  get(request: GetUserRequest): Observable<User>;

  getMany(request: Empty): Observable<Users>;

  create(request: CreateUserRequest): Observable<User>;

  update(request: User): Observable<User>;
}

export interface UserServiceController {
  get(request: GetUserRequest): Promise<User> | Observable<User> | User;

  getMany(request: Empty): Promise<Users> | Observable<Users> | Users;

  create(request: CreateUserRequest): Promise<User> | Observable<User> | User;

  update(request: User): Promise<User> | Observable<User> | User;
}

export function UserServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["get", "getMany", "create", "update"];
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
