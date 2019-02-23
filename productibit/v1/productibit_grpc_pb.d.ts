// package: ssigmaapi.productibit.v1
// file: ssigmaapi/productibit/v1/productibit.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as ssigmaapi_productibit_v1_productibit_pb from "../../../ssigmaapi/productibit/v1/productibit_pb";
import * as ssigmaapi_type_useractivity_pb from "../../../ssigmaapi/type/useractivity_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IProductibitServiceV1Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    uploadSensor: IProductibitServiceV1Service_IUploadSensor;
}

interface IProductibitServiceV1Service_IUploadSensor extends grpc.MethodDefinition<ssigmaapi_productibit_v1_productibit_pb.SensorMessage, google_protobuf_empty_pb.Empty> {
    path: string; // "/ssigmaapi.productibit.v1.ProductibitServiceV1/UploadSensor"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<ssigmaapi_productibit_v1_productibit_pb.SensorMessage>;
    requestDeserialize: grpc.deserialize<ssigmaapi_productibit_v1_productibit_pb.SensorMessage>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const ProductibitServiceV1Service: IProductibitServiceV1Service;

export interface IProductibitServiceV1Server {
    uploadSensor: grpc.handleUnaryCall<ssigmaapi_productibit_v1_productibit_pb.SensorMessage, google_protobuf_empty_pb.Empty>;
}

export interface IProductibitServiceV1Client {
    uploadSensor(request: ssigmaapi_productibit_v1_productibit_pb.SensorMessage, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    uploadSensor(request: ssigmaapi_productibit_v1_productibit_pb.SensorMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    uploadSensor(request: ssigmaapi_productibit_v1_productibit_pb.SensorMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class ProductibitServiceV1Client extends grpc.Client implements IProductibitServiceV1Client {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public uploadSensor(request: ssigmaapi_productibit_v1_productibit_pb.SensorMessage, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public uploadSensor(request: ssigmaapi_productibit_v1_productibit_pb.SensorMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public uploadSensor(request: ssigmaapi_productibit_v1_productibit_pb.SensorMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
