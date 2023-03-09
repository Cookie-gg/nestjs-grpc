// package: sample
// file: proto/sample.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SampleDataById extends jspb.Message { 
    getId(): number;
    setId(value: number): SampleDataById;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SampleDataById.AsObject;
    static toObject(includeInstance: boolean, msg: SampleDataById): SampleDataById.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SampleDataById, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SampleDataById;
    static deserializeBinaryFromReader(message: SampleDataById, reader: jspb.BinaryReader): SampleDataById;
}

export namespace SampleDataById {
    export type AsObject = {
        id: number,
    }
}

export class SampleData extends jspb.Message { 
    getId(): number;
    setId(value: number): SampleData;
    getName(): string;
    setName(value: string): SampleData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SampleData.AsObject;
    static toObject(includeInstance: boolean, msg: SampleData): SampleData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SampleData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SampleData;
    static deserializeBinaryFromReader(message: SampleData, reader: jspb.BinaryReader): SampleData;
}

export namespace SampleData {
    export type AsObject = {
        id: number,
        name: string,
    }
}
