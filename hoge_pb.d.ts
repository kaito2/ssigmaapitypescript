// package: ssigmaapi.type
// file: ssigmaapi/hoge.proto

/* tslint:disable */

import * as jspb from "google-protobuf";

export class Hoge extends jspb.Message { 
    getHuga(): string;
    setHuga(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Hoge.AsObject;
    static toObject(includeInstance: boolean, msg: Hoge): Hoge.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Hoge, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Hoge;
    static deserializeBinaryFromReader(message: Hoge, reader: jspb.BinaryReader): Hoge;
}

export namespace Hoge {
    export type AsObject = {
        huga: string,
    }
}
