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

goog.exportSymbol('proto.ssigmaapi.type.ApplicationWindow', null, global);
goog.exportSymbol('proto.ssigmaapi.type.ApplicationWindow.WindowState', null, global);
goog.exportSymbol('proto.ssigmaapi.type.KeyboardInput', null, global);
goog.exportSymbol('proto.ssigmaapi.type.MouseInput', null, global);
goog.exportSymbol('proto.ssigmaapi.type.Point', null, global);
goog.exportSymbol('proto.ssigmaapi.type.UserActivity', null, global);
goog.exportSymbol('proto.ssigmaapi.type.UserActivity.UserState', null, global);

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
proto.ssigmaapi.type.UserActivity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ssigmaapi.type.UserActivity.repeatedFields_, null);
};
goog.inherits(proto.ssigmaapi.type.UserActivity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ssigmaapi.type.UserActivity.displayName = 'proto.ssigmaapi.type.UserActivity';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ssigmaapi.type.UserActivity.repeatedFields_ = [4];



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
proto.ssigmaapi.type.UserActivity.prototype.toObject = function(opt_includeInstance) {
  return proto.ssigmaapi.type.UserActivity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ssigmaapi.type.UserActivity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssigmaapi.type.UserActivity.toObject = function(includeInstance, msg) {
  var f, obj = {
    startTimestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    endTimestamp: jspb.Message.getFieldWithDefault(msg, 2, 0),
    keyboardInput: (f = msg.getKeyboardInput()) && proto.ssigmaapi.type.KeyboardInput.toObject(includeInstance, f),
    windowListList: jspb.Message.toObjectList(msg.getWindowListList(),
    proto.ssigmaapi.type.ApplicationWindow.toObject, includeInstance),
    userState: jspb.Message.getFieldWithDefault(msg, 5, 0),
    mouseInput: (f = msg.getMouseInput()) && proto.ssigmaapi.type.MouseInput.toObject(includeInstance, f),
    switchApplicationCount: jspb.Message.getFieldWithDefault(msg, 7, 0)
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
 * @return {!proto.ssigmaapi.type.UserActivity}
 */
proto.ssigmaapi.type.UserActivity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ssigmaapi.type.UserActivity;
  return proto.ssigmaapi.type.UserActivity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ssigmaapi.type.UserActivity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ssigmaapi.type.UserActivity}
 */
proto.ssigmaapi.type.UserActivity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStartTimestamp(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setEndTimestamp(value);
      break;
    case 3:
      var value = new proto.ssigmaapi.type.KeyboardInput;
      reader.readMessage(value,proto.ssigmaapi.type.KeyboardInput.deserializeBinaryFromReader);
      msg.setKeyboardInput(value);
      break;
    case 4:
      var value = new proto.ssigmaapi.type.ApplicationWindow;
      reader.readMessage(value,proto.ssigmaapi.type.ApplicationWindow.deserializeBinaryFromReader);
      msg.addWindowList(value);
      break;
    case 5:
      var value = /** @type {!proto.ssigmaapi.type.UserActivity.UserState} */ (reader.readEnum());
      msg.setUserState(value);
      break;
    case 6:
      var value = new proto.ssigmaapi.type.MouseInput;
      reader.readMessage(value,proto.ssigmaapi.type.MouseInput.deserializeBinaryFromReader);
      msg.setMouseInput(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSwitchApplicationCount(value);
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
proto.ssigmaapi.type.UserActivity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ssigmaapi.type.UserActivity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ssigmaapi.type.UserActivity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssigmaapi.type.UserActivity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStartTimestamp();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getEndTimestamp();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getKeyboardInput();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ssigmaapi.type.KeyboardInput.serializeBinaryToWriter
    );
  }
  f = message.getWindowListList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.ssigmaapi.type.ApplicationWindow.serializeBinaryToWriter
    );
  }
  f = message.getUserState();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getMouseInput();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ssigmaapi.type.MouseInput.serializeBinaryToWriter
    );
  }
  f = message.getSwitchApplicationCount();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ssigmaapi.type.UserActivity.UserState = {
  WORKING: 0,
  AWAY: 1
};

/**
 * optional int32 start_timestamp = 1;
 * @return {number}
 */
proto.ssigmaapi.type.UserActivity.prototype.getStartTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.ssigmaapi.type.UserActivity.prototype.setStartTimestamp = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 end_timestamp = 2;
 * @return {number}
 */
proto.ssigmaapi.type.UserActivity.prototype.getEndTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.ssigmaapi.type.UserActivity.prototype.setEndTimestamp = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional KeyboardInput keyboard_input = 3;
 * @return {?proto.ssigmaapi.type.KeyboardInput}
 */
proto.ssigmaapi.type.UserActivity.prototype.getKeyboardInput = function() {
  return /** @type{?proto.ssigmaapi.type.KeyboardInput} */ (
    jspb.Message.getWrapperField(this, proto.ssigmaapi.type.KeyboardInput, 3));
};


/** @param {?proto.ssigmaapi.type.KeyboardInput|undefined} value */
proto.ssigmaapi.type.UserActivity.prototype.setKeyboardInput = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.ssigmaapi.type.UserActivity.prototype.clearKeyboardInput = function() {
  this.setKeyboardInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ssigmaapi.type.UserActivity.prototype.hasKeyboardInput = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated ApplicationWindow window_list = 4;
 * @return {!Array.<!proto.ssigmaapi.type.ApplicationWindow>}
 */
proto.ssigmaapi.type.UserActivity.prototype.getWindowListList = function() {
  return /** @type{!Array.<!proto.ssigmaapi.type.ApplicationWindow>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ssigmaapi.type.ApplicationWindow, 4));
};


/** @param {!Array.<!proto.ssigmaapi.type.ApplicationWindow>} value */
proto.ssigmaapi.type.UserActivity.prototype.setWindowListList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.ssigmaapi.type.ApplicationWindow=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ssigmaapi.type.ApplicationWindow}
 */
proto.ssigmaapi.type.UserActivity.prototype.addWindowList = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.ssigmaapi.type.ApplicationWindow, opt_index);
};


proto.ssigmaapi.type.UserActivity.prototype.clearWindowListList = function() {
  this.setWindowListList([]);
};


/**
 * optional UserState user_state = 5;
 * @return {!proto.ssigmaapi.type.UserActivity.UserState}
 */
proto.ssigmaapi.type.UserActivity.prototype.getUserState = function() {
  return /** @type {!proto.ssigmaapi.type.UserActivity.UserState} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {!proto.ssigmaapi.type.UserActivity.UserState} value */
proto.ssigmaapi.type.UserActivity.prototype.setUserState = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional MouseInput mouse_input = 6;
 * @return {?proto.ssigmaapi.type.MouseInput}
 */
proto.ssigmaapi.type.UserActivity.prototype.getMouseInput = function() {
  return /** @type{?proto.ssigmaapi.type.MouseInput} */ (
    jspb.Message.getWrapperField(this, proto.ssigmaapi.type.MouseInput, 6));
};


/** @param {?proto.ssigmaapi.type.MouseInput|undefined} value */
proto.ssigmaapi.type.UserActivity.prototype.setMouseInput = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.ssigmaapi.type.UserActivity.prototype.clearMouseInput = function() {
  this.setMouseInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ssigmaapi.type.UserActivity.prototype.hasMouseInput = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 switch_application_count = 7;
 * @return {number}
 */
proto.ssigmaapi.type.UserActivity.prototype.getSwitchApplicationCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.ssigmaapi.type.UserActivity.prototype.setSwitchApplicationCount = function(value) {
  jspb.Message.setField(this, 7, value);
};



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
proto.ssigmaapi.type.KeyboardInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ssigmaapi.type.KeyboardInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ssigmaapi.type.KeyboardInput.displayName = 'proto.ssigmaapi.type.KeyboardInput';
}


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
proto.ssigmaapi.type.KeyboardInput.prototype.toObject = function(opt_includeInstance) {
  return proto.ssigmaapi.type.KeyboardInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ssigmaapi.type.KeyboardInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssigmaapi.type.KeyboardInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    strokeCount: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.ssigmaapi.type.KeyboardInput}
 */
proto.ssigmaapi.type.KeyboardInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ssigmaapi.type.KeyboardInput;
  return proto.ssigmaapi.type.KeyboardInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ssigmaapi.type.KeyboardInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ssigmaapi.type.KeyboardInput}
 */
proto.ssigmaapi.type.KeyboardInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStrokeCount(value);
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
proto.ssigmaapi.type.KeyboardInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ssigmaapi.type.KeyboardInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ssigmaapi.type.KeyboardInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssigmaapi.type.KeyboardInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStrokeCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 stroke_count = 1;
 * @return {number}
 */
proto.ssigmaapi.type.KeyboardInput.prototype.getStrokeCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.ssigmaapi.type.KeyboardInput.prototype.setStrokeCount = function(value) {
  jspb.Message.setField(this, 1, value);
};



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
proto.ssigmaapi.type.MouseInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ssigmaapi.type.MouseInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ssigmaapi.type.MouseInput.displayName = 'proto.ssigmaapi.type.MouseInput';
}


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
proto.ssigmaapi.type.MouseInput.prototype.toObject = function(opt_includeInstance) {
  return proto.ssigmaapi.type.MouseInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ssigmaapi.type.MouseInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssigmaapi.type.MouseInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    clickCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    leftClickCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    middleClickCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    rightClickCount: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.ssigmaapi.type.MouseInput}
 */
proto.ssigmaapi.type.MouseInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ssigmaapi.type.MouseInput;
  return proto.ssigmaapi.type.MouseInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ssigmaapi.type.MouseInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ssigmaapi.type.MouseInput}
 */
proto.ssigmaapi.type.MouseInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setClickCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeftClickCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMiddleClickCount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRightClickCount(value);
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
proto.ssigmaapi.type.MouseInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ssigmaapi.type.MouseInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ssigmaapi.type.MouseInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssigmaapi.type.MouseInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClickCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getLeftClickCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMiddleClickCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRightClickCount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 click_count = 1;
 * @return {number}
 */
proto.ssigmaapi.type.MouseInput.prototype.getClickCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.ssigmaapi.type.MouseInput.prototype.setClickCount = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 left_click_count = 2;
 * @return {number}
 */
proto.ssigmaapi.type.MouseInput.prototype.getLeftClickCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.ssigmaapi.type.MouseInput.prototype.setLeftClickCount = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 middle_click_count = 3;
 * @return {number}
 */
proto.ssigmaapi.type.MouseInput.prototype.getMiddleClickCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.ssigmaapi.type.MouseInput.prototype.setMiddleClickCount = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 right_click_count = 4;
 * @return {number}
 */
proto.ssigmaapi.type.MouseInput.prototype.getRightClickCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.ssigmaapi.type.MouseInput.prototype.setRightClickCount = function(value) {
  jspb.Message.setField(this, 4, value);
};



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
proto.ssigmaapi.type.Point = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ssigmaapi.type.Point, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ssigmaapi.type.Point.displayName = 'proto.ssigmaapi.type.Point';
}


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
proto.ssigmaapi.type.Point.prototype.toObject = function(opt_includeInstance) {
  return proto.ssigmaapi.type.Point.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ssigmaapi.type.Point} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssigmaapi.type.Point.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.ssigmaapi.type.Point}
 */
proto.ssigmaapi.type.Point.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ssigmaapi.type.Point;
  return proto.ssigmaapi.type.Point.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ssigmaapi.type.Point} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ssigmaapi.type.Point}
 */
proto.ssigmaapi.type.Point.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
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
proto.ssigmaapi.type.Point.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ssigmaapi.type.Point.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ssigmaapi.type.Point} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssigmaapi.type.Point.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.ssigmaapi.type.Point.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.ssigmaapi.type.Point.prototype.setX = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.ssigmaapi.type.Point.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.ssigmaapi.type.Point.prototype.setY = function(value) {
  jspb.Message.setField(this, 2, value);
};



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
proto.ssigmaapi.type.ApplicationWindow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ssigmaapi.type.ApplicationWindow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.ssigmaapi.type.ApplicationWindow.displayName = 'proto.ssigmaapi.type.ApplicationWindow';
}


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
proto.ssigmaapi.type.ApplicationWindow.prototype.toObject = function(opt_includeInstance) {
  return proto.ssigmaapi.type.ApplicationWindow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ssigmaapi.type.ApplicationWindow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssigmaapi.type.ApplicationWindow.toObject = function(includeInstance, msg) {
  var f, obj = {
    lefttop: (f = msg.getLefttop()) && proto.ssigmaapi.type.Point.toObject(includeInstance, f),
    height: jspb.Message.getFieldWithDefault(msg, 2, 0),
    width: jspb.Message.getFieldWithDefault(msg, 3, 0),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    programName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    company: jspb.Message.getFieldWithDefault(msg, 7, ""),
    isForeground: jspb.Message.getFieldWithDefault(msg, 8, false),
    windowState: jspb.Message.getFieldWithDefault(msg, 9, 0),
    timestamp: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.ssigmaapi.type.ApplicationWindow}
 */
proto.ssigmaapi.type.ApplicationWindow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ssigmaapi.type.ApplicationWindow;
  return proto.ssigmaapi.type.ApplicationWindow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ssigmaapi.type.ApplicationWindow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ssigmaapi.type.ApplicationWindow}
 */
proto.ssigmaapi.type.ApplicationWindow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ssigmaapi.type.Point;
      reader.readMessage(value,proto.ssigmaapi.type.Point.deserializeBinaryFromReader);
      msg.setLefttop(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setProgramName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompany(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForeground(value);
      break;
    case 9:
      var value = /** @type {!proto.ssigmaapi.type.ApplicationWindow.WindowState} */ (reader.readEnum());
      msg.setWindowState(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimestamp(value);
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
proto.ssigmaapi.type.ApplicationWindow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ssigmaapi.type.ApplicationWindow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ssigmaapi.type.ApplicationWindow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ssigmaapi.type.ApplicationWindow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLefttop();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ssigmaapi.type.Point.serializeBinaryToWriter
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProgramName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCompany();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getIsForeground();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getWindowState();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.ssigmaapi.type.ApplicationWindow.WindowState = {
  NORMAL: 0,
  MAXIMIZED: 1,
  MINIMIZED: 2
};

/**
 * optional Point lefttop = 1;
 * @return {?proto.ssigmaapi.type.Point}
 */
proto.ssigmaapi.type.ApplicationWindow.prototype.getLefttop = function() {
  return /** @type{?proto.ssigmaapi.type.Point} */ (
    jspb.Message.getWrapperField(this, proto.ssigmaapi.type.Point, 1));
};


/** @param {?proto.ssigmaapi.type.Point|undefined} value */
proto.ssigmaapi.type.ApplicationWindow.prototype.setLefttop = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.ssigmaapi.type.ApplicationWindow.prototype.clearLefttop = function() {
  this.setLefttop(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.ssigmaapi.type.ApplicationWindow.prototype.hasLefttop = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 height = 2;
 * @return {number}
 */
proto.ssigmaapi.type.ApplicationWindow.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.ssigmaapi.type.ApplicationWindow.prototype.setHeight = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 width = 3;
 * @return {number}
 */
proto.ssigmaapi.type.ApplicationWindow.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.ssigmaapi.type.ApplicationWindow.prototype.setWidth = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.ssigmaapi.type.ApplicationWindow.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.ssigmaapi.type.ApplicationWindow.prototype.setTitle = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional string program_name = 5;
 * @return {string}
 */
proto.ssigmaapi.type.ApplicationWindow.prototype.getProgramName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.ssigmaapi.type.ApplicationWindow.prototype.setProgramName = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.ssigmaapi.type.ApplicationWindow.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.ssigmaapi.type.ApplicationWindow.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional string company = 7;
 * @return {string}
 */
proto.ssigmaapi.type.ApplicationWindow.prototype.getCompany = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.ssigmaapi.type.ApplicationWindow.prototype.setCompany = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional bool is_foreground = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.ssigmaapi.type.ApplicationWindow.prototype.getIsForeground = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.ssigmaapi.type.ApplicationWindow.prototype.setIsForeground = function(value) {
  jspb.Message.setField(this, 8, value);
};


/**
 * optional WindowState window_state = 9;
 * @return {!proto.ssigmaapi.type.ApplicationWindow.WindowState}
 */
proto.ssigmaapi.type.ApplicationWindow.prototype.getWindowState = function() {
  return /** @type {!proto.ssigmaapi.type.ApplicationWindow.WindowState} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {!proto.ssigmaapi.type.ApplicationWindow.WindowState} value */
proto.ssigmaapi.type.ApplicationWindow.prototype.setWindowState = function(value) {
  jspb.Message.setField(this, 9, value);
};


/**
 * optional int32 timestamp = 10;
 * @return {number}
 */
proto.ssigmaapi.type.ApplicationWindow.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/** @param {number} value */
proto.ssigmaapi.type.ApplicationWindow.prototype.setTimestamp = function(value) {
  jspb.Message.setField(this, 10, value);
};


goog.object.extend(exports, proto.ssigmaapi.type);
