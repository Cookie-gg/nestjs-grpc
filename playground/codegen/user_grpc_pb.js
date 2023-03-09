// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_pb = require('./user_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_GetUserRequest(arg) {
  if (!(arg instanceof user_pb.GetUserRequest)) {
    throw new Error('Expected argument of type user.GetUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_GetUserRequest(buffer_arg) {
  return user_pb.GetUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_User(arg) {
  if (!(arg instanceof user_pb.User)) {
    throw new Error('Expected argument of type user.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_User(buffer_arg) {
  return user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_user_Users(arg) {
  if (!(arg instanceof user_pb.Users)) {
    throw new Error('Expected argument of type user.Users');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_Users(buffer_arg) {
  return user_pb.Users.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  get: {
    path: '/user.UserService/Get',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.GetUserRequest,
    responseType: user_pb.User,
    requestSerialize: serialize_user_GetUserRequest,
    requestDeserialize: deserialize_user_GetUserRequest,
    responseSerialize: serialize_user_User,
    responseDeserialize: deserialize_user_User,
  },
  getMany: {
    path: '/user.UserService/GetMany',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: user_pb.Users,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_user_Users,
    responseDeserialize: deserialize_user_Users,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
