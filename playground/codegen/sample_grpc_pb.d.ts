// package: sample
// file: proto/sample.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as proto_sample_pb from "./sample_pb";

interface IAppServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    findOne: IAppServiceService_IFindOne;
}

interface IAppServiceService_IFindOne extends grpc.MethodDefinition<proto_sample_pb.SampleDataById, proto_sample_pb.SampleData> {
    path: "/sample.AppService/FindOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<proto_sample_pb.SampleDataById>;
    requestDeserialize: grpc.deserialize<proto_sample_pb.SampleDataById>;
    responseSerialize: grpc.serialize<proto_sample_pb.SampleData>;
    responseDeserialize: grpc.deserialize<proto_sample_pb.SampleData>;
}

export const AppServiceService: IAppServiceService;

export interface IAppServiceServer extends grpc.UntypedServiceImplementation {
    findOne: grpc.handleUnaryCall<proto_sample_pb.SampleDataById, proto_sample_pb.SampleData>;
}

export interface IAppServiceClient {
    findOne(request: proto_sample_pb.SampleDataById, callback: (error: grpc.ServiceError | null, response: proto_sample_pb.SampleData) => void): grpc.ClientUnaryCall;
    findOne(request: proto_sample_pb.SampleDataById, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_sample_pb.SampleData) => void): grpc.ClientUnaryCall;
    findOne(request: proto_sample_pb.SampleDataById, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_sample_pb.SampleData) => void): grpc.ClientUnaryCall;
}

export class AppServiceClient extends grpc.Client implements IAppServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public findOne(request: proto_sample_pb.SampleDataById, callback: (error: grpc.ServiceError | null, response: proto_sample_pb.SampleData) => void): grpc.ClientUnaryCall;
    public findOne(request: proto_sample_pb.SampleDataById, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_sample_pb.SampleData) => void): grpc.ClientUnaryCall;
    public findOne(request: proto_sample_pb.SampleDataById, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_sample_pb.SampleData) => void): grpc.ClientUnaryCall;
}
