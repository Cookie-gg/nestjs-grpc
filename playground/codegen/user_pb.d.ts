// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class GetUserRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        id: number,
    }
}

export class User extends jspb.Message { 
    getId(): number;
    setId(value: number): User;
    getName(): string;
    setName(value: string): User;
    getEmail(): string;
    setEmail(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        id: number,
        name: string,
        email: string,
    }
}

export class Users extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<User>;
    setUsersList(value: Array<User>): Users;
    addUsers(value?: User, index?: number): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Users.AsObject;
    static toObject(includeInstance: boolean, msg: Users): Users.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Users, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Users;
    static deserializeBinaryFromReader(message: Users, reader: jspb.BinaryReader): Users;
}

export namespace Users {
    export type AsObject = {
        usersList: Array<User.AsObject>,
    }
}
