// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var ssigmaapi_productibit_v1_productibit_pb = require('../../../ssigmaapi/productibit/v1/productibit_pb.js');
var ssigmaapi_type_useractivity_pb = require('../../../ssigmaapi/type/useractivity_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ssigmaapi_productibit_v1_SensorMessage(arg) {
  if (!(arg instanceof ssigmaapi_productibit_v1_productibit_pb.SensorMessage)) {
    throw new Error('Expected argument of type ssigmaapi.productibit.v1.SensorMessage');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_ssigmaapi_productibit_v1_SensorMessage(buffer_arg) {
  return ssigmaapi_productibit_v1_productibit_pb.SensorMessage.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductibitServiceV1Service = exports.ProductibitServiceV1Service = {
  uploadSensor: {
    path: '/ssigmaapi.productibit.v1.ProductibitServiceV1/UploadSensor',
    requestStream: false,
    responseStream: false,
    requestType: ssigmaapi_productibit_v1_productibit_pb.SensorMessage,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_ssigmaapi_productibit_v1_SensorMessage,
    requestDeserialize: deserialize_ssigmaapi_productibit_v1_SensorMessage,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.ProductibitServiceV1Client = grpc.makeGenericClientConstructor(ProductibitServiceV1Service);
