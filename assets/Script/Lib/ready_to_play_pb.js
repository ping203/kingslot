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

var map_field_entry_pb = require('./map_field_entry_pb.js');
goog.exportSymbol('proto.BINReadyToPlayRequest', null, global);
goog.exportSymbol('proto.BINReadyToPlayResponse', null, global);

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
proto.BINReadyToPlayRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BINReadyToPlayRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.BINReadyToPlayRequest.displayName = 'proto.BINReadyToPlayRequest';
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
proto.BINReadyToPlayRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.BINReadyToPlayRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BINReadyToPlayRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BINReadyToPlayRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    zoneid: jspb.Message.getField(msg, 1),
    roomindex: jspb.Message.getField(msg, 2),
    tableindex: jspb.Message.getField(msg, 3)
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
 * @return {!proto.BINReadyToPlayRequest}
 */
proto.BINReadyToPlayRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BINReadyToPlayRequest;
  return proto.BINReadyToPlayRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BINReadyToPlayRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BINReadyToPlayRequest}
 */
proto.BINReadyToPlayRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setZoneid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoomindex(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTableindex(value);
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
proto.BINReadyToPlayRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BINReadyToPlayRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BINReadyToPlayRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BINReadyToPlayRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * required int32 zoneId = 1;
 * @return {number}
 */
proto.BINReadyToPlayRequest.prototype.getZoneid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.BINReadyToPlayRequest.prototype.setZoneid = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.BINReadyToPlayRequest.prototype.clearZoneid = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINReadyToPlayRequest.prototype.hasZoneid = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * required int32 roomIndex = 2;
 * @return {number}
 */
proto.BINReadyToPlayRequest.prototype.getRoomindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.BINReadyToPlayRequest.prototype.setRoomindex = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.BINReadyToPlayRequest.prototype.clearRoomindex = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINReadyToPlayRequest.prototype.hasRoomindex = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 tableIndex = 3;
 * @return {number}
 */
proto.BINReadyToPlayRequest.prototype.getTableindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.BINReadyToPlayRequest.prototype.setTableindex = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.BINReadyToPlayRequest.prototype.clearTableindex = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINReadyToPlayRequest.prototype.hasTableindex = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.BINReadyToPlayResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.BINReadyToPlayResponse.repeatedFields_, null);
};
goog.inherits(proto.BINReadyToPlayResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.BINReadyToPlayResponse.displayName = 'proto.BINReadyToPlayResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.BINReadyToPlayResponse.repeatedFields_ = [6];



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
proto.BINReadyToPlayResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.BINReadyToPlayResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BINReadyToPlayResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BINReadyToPlayResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    responsecode: jspb.Message.getField(msg, 1),
    message: jspb.Message.getField(msg, 2),
    readyuserid: jspb.Message.getField(msg, 3),
    tableindex: jspb.Message.getField(msg, 4),
    countdowntimer: jspb.Message.getField(msg, 5),
    argsList: jspb.Message.toObjectList(msg.getArgsList(),
    map_field_entry_pb.BINMapFieldEntry.toObject, includeInstance)
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
 * @return {!proto.BINReadyToPlayResponse}
 */
proto.BINReadyToPlayResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BINReadyToPlayResponse;
  return proto.BINReadyToPlayResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BINReadyToPlayResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BINReadyToPlayResponse}
 */
proto.BINReadyToPlayResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setResponsecode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReadyuserid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTableindex(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCountdowntimer(value);
      break;
    case 6:
      var value = new map_field_entry_pb.BINMapFieldEntry;
      reader.readMessage(value,map_field_entry_pb.BINMapFieldEntry.deserializeBinaryFromReader);
      msg.addArgs(value);
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
proto.BINReadyToPlayResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BINReadyToPlayResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BINReadyToPlayResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BINReadyToPlayResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getArgsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      map_field_entry_pb.BINMapFieldEntry.serializeBinaryToWriter
    );
  }
};


/**
 * required bool responseCode = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.BINReadyToPlayResponse.prototype.getResponsecode = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.BINReadyToPlayResponse.prototype.setResponsecode = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.BINReadyToPlayResponse.prototype.clearResponsecode = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINReadyToPlayResponse.prototype.hasResponsecode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.BINReadyToPlayResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.BINReadyToPlayResponse.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.BINReadyToPlayResponse.prototype.clearMessage = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINReadyToPlayResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 readyUserId = 3;
 * @return {number}
 */
proto.BINReadyToPlayResponse.prototype.getReadyuserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.BINReadyToPlayResponse.prototype.setReadyuserid = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.BINReadyToPlayResponse.prototype.clearReadyuserid = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINReadyToPlayResponse.prototype.hasReadyuserid = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 tableIndex = 4;
 * @return {number}
 */
proto.BINReadyToPlayResponse.prototype.getTableindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.BINReadyToPlayResponse.prototype.setTableindex = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.BINReadyToPlayResponse.prototype.clearTableindex = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINReadyToPlayResponse.prototype.hasTableindex = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 countDownTimer = 5;
 * @return {number}
 */
proto.BINReadyToPlayResponse.prototype.getCountdowntimer = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.BINReadyToPlayResponse.prototype.setCountdowntimer = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.BINReadyToPlayResponse.prototype.clearCountdowntimer = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.BINReadyToPlayResponse.prototype.hasCountdowntimer = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated BINMapFieldEntry args = 6;
 * @return {!Array.<!proto.BINMapFieldEntry>}
 */
proto.BINReadyToPlayResponse.prototype.getArgsList = function() {
  return /** @type{!Array.<!proto.BINMapFieldEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, map_field_entry_pb.BINMapFieldEntry, 6));
};


/** @param {!Array.<!proto.BINMapFieldEntry>} value */
proto.BINReadyToPlayResponse.prototype.setArgsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.BINMapFieldEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.BINMapFieldEntry}
 */
proto.BINReadyToPlayResponse.prototype.addArgs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.BINMapFieldEntry, opt_index);
};


proto.BINReadyToPlayResponse.prototype.clearArgsList = function() {
  this.setArgsList([]);
};


goog.object.extend(exports, proto);
