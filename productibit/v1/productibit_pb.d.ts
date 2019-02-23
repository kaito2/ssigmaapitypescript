// package: ssigmaapi.productibit.v1
// file: ssigmaapi/productibit/v1/productibit.proto

/* tslint:disable */

import * as jspb from "google-protobuf";
import * as ssigmaapi_type_useractivity_pb from "../../../ssigmaapi/type/useractivity_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class SensorMessage extends jspb.Message { 
    getUid(): string;
    setUid(value: string): void;

    clearActivitiesList(): void;
    getActivitiesList(): Array<ssigmaapi_type_useractivity_pb.UserActivity>;
    setActivitiesList(value: Array<ssigmaapi_type_useractivity_pb.UserActivity>): void;
    addActivities(value?: ssigmaapi_type_useractivity_pb.UserActivity, index?: number): ssigmaapi_type_useractivity_pb.UserActivity;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SensorMessage.AsObject;
    static toObject(includeInstance: boolean, msg: SensorMessage): SensorMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SensorMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SensorMessage;
    static deserializeBinaryFromReader(message: SensorMessage, reader: jspb.BinaryReader): SensorMessage;
}

export namespace SensorMessage {
    export type AsObject = {
        uid: string,
        activitiesList: Array<ssigmaapi_type_useractivity_pb.UserActivity.AsObject>,
    }
}
