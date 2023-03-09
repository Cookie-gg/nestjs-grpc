// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_sample_pb = require('./sample_pb.js');

function serialize_sample_SampleData(arg) {
  if (!(arg instanceof proto_sample_pb.SampleData)) {
    throw new Error('Expected argument of type sample.SampleData');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sample_SampleData(buffer_arg) {
  return proto_sample_pb.SampleData.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_sample_SampleDataById(arg) {
  if (!(arg instanceof proto_sample_pb.SampleDataById)) {
    throw new Error('Expected argument of type sample.SampleDataById');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_sample_SampleDataById(buffer_arg) {
  return proto_sample_pb.SampleDataById.deserializeBinary(new Uint8Array(buffer_arg));
}


var AppServiceService = exports.AppServiceService = {
  findOne: {
    path: '/sample.AppService/FindOne',
    requestStream: false,
    responseStream: false,
    requestType: proto_sample_pb.SampleDataById,
    responseType: proto_sample_pb.SampleData,
    requestSerialize: serialize_sample_SampleDataById,
    requestDeserialize: deserialize_sample_SampleDataById,
    responseSerialize: serialize_sample_SampleData,
    responseDeserialize: deserialize_sample_SampleData,
  },
};

exports.AppServiceClient = grpc.makeGenericClientConstructor(AppServiceService);
