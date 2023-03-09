// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_pb from "./user_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    get: IUserServiceService_IGet;
    getMany: IUserServiceService_IGetMany;
}

interface IUserServiceService_IGet extends grpc.MethodDefinition<user_pb.GetUserRequest, user_pb.User> {
    path: "/user.UserService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.GetUserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.GetUserRequest>;
    responseSerialize: grpc.serialize<user_pb.User>;
    responseDeserialize: grpc.deserialize<user_pb.User>;
}
interface IUserServiceService_IGetMany extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, user_pb.Users> {
    path: "/user.UserService/GetMany";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<user_pb.Users>;
    responseDeserialize: grpc.deserialize<user_pb.Users>;
}

export const UserServiceService: IUserServiceService;

export interface IUserServiceServer extends grpc.UntypedServiceImplementation {
    get: grpc.handleUnaryCall<user_pb.GetUserRequest, user_pb.User>;
    getMany: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, user_pb.Users>;
}

export interface IUserServiceClient {
    get(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    get(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    get(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    getMany(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.Users) => void): grpc.ClientUnaryCall;
    getMany(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.Users) => void): grpc.ClientUnaryCall;
    getMany(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.Users) => void): grpc.ClientUnaryCall;
}

export class UserServiceClient extends grpc.Client implements IUserServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public get(request: user_pb.GetUserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.GetUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public get(request: user_pb.GetUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.User) => void): grpc.ClientUnaryCall;
    public getMany(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.Users) => void): grpc.ClientUnaryCall;
    public getMany(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.Users) => void): grpc.ClientUnaryCall;
    public getMany(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.Users) => void): grpc.ClientUnaryCall;
}
