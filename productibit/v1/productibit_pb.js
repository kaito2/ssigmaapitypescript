/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var ssigmaapi_type_useractivity_pb = require('../../../ssigmaapi/type/useractivity_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.exportSymbol('proto.ssigmaapi.productibit.v1.SensorMessage', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ssigmaapi.productibit.v1.SensorMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ssigmaapi.productibit.v1.SensorMessage.repeatedFields_, null);
};
goog.inherits(proto.ssigmaapi.productibit.v1.SensorMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ssigmaapi.productibit.v1.SensorMessage.displayName = 'proto.ssigmaapi.productibit.v1.SensorMessage';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ssigmaapi.productibit.v1.SensorMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ssigmaapi.productibit.v1.SensorMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ssigmaapi.productibit.v1.SensorMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ssigmaapi.productibit.v1.SensorMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssigmaapi.productibit.v1.SensorMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    uid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    activitiesList: jspb.Message.toObjectList(msg.getActivitiesList(),
    ssigmaapi_type_useractivity_pb.UserActivity.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ssigmaapi.productibit.v1.SensorMessage}
 */
proto.ssigmaapi.productibit.v1.SensorMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ssigmaapi.productibit.v1.SensorMessage;
  return proto.ssigmaapi.productibit.v1.SensorMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ssigmaapi.productibit.v1.SensorMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ssigmaapi.productibit.v1.SensorMessage}
 */
proto.ssigmaapi.productibit.v1.SensorMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUid(value);
      break;
    case 2:
      var value = new ssigmaapi_type_useractivity_pb.UserActivity;
      reader.readMessage(value,ssigmaapi_type_useractivity_pb.UserActivity.deserializeBinaryFromReader);
      msg.addActivities(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ssigmaapi.productibit.v1.SensorMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ssigmaapi.productibit.v1.SensorMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ssigmaapi.productibit.v1.SensorMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssigmaapi.productibit.v1.SensorMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getActivitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      ssigmaapi_type_useractivity_pb.UserActivity.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uid = 1;
 * @return {string}
 */
proto.ssigmaapi.productibit.v1.SensorMessage.prototype.getUid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.ssigmaapi.productibit.v1.SensorMessage.prototype.setUid = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * repeated ssigmaapi.type.UserActivity activities = 2;
 * @return {!Array.<!proto.ssigmaapi.type.UserActivity>}
 */
proto.ssigmaapi.productibit.v1.SensorMessage.prototype.getActivitiesList = function() {
  return /** @type{!Array.<!proto.ssigmaapi.type.UserActivity>} */ (
    jspb.Message.getRepeatedWrapperField(this, ssigmaapi_type_useractivity_pb.UserActivity, 2));
};


/** @param {!Array.<!proto.ssigmaapi.type.UserActivity>} value */
proto.ssigmaapi.productibit.v1.SensorMessage.prototype.setActivitiesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.ssigmaapi.type.UserActivity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ssigmaapi.type.UserActivity}
 */
proto.ssigmaapi.productibit.v1.SensorMessage.prototype.addActivities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.ssigmaapi.type.UserActivity, opt_index);
};


proto.ssigmaapi.productibit.v1.SensorMessage.prototype.clearActivitiesList = function() {
  this.setActivitiesList([]);
};


goog.object.extend(exports, proto.ssigmaapi.productibit.v1);