/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/*eslint-disable */

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('snet_style_transfer.Image', null, global);
goog.exportSymbol('snet_style_transfer.TransferImageStyleRequest', null, global);

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
snet_style_transfer.TransferImageStyleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(snet_style_transfer.TransferImageStyleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_style_transfer.TransferImageStyleRequest.displayName = 'snet_style_transfer.TransferImageStyleRequest';
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
snet_style_transfer.TransferImageStyleRequest.prototype.toObject = function(opt_includeInstance) {
  return snet_style_transfer.TransferImageStyleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_style_transfer.TransferImageStyleRequest} msg The msg instance to transform.
 * @return {!Object}
 */
snet_style_transfer.TransferImageStyleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    content: msg.getContent(),
    style: msg.getStyle(),
    contentsize: msg.getContentsize(),
    stylesize: msg.getStylesize(),
    preservecolor: msg.getPreservecolor(),
    alpha: msg.getAlpha(),
    crop: msg.getCrop(),
    saveext: msg.getSaveext()
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
 * @return {!snet_style_transfer.TransferImageStyleRequest}
 */
snet_style_transfer.TransferImageStyleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_style_transfer.TransferImageStyleRequest;
  return snet_style_transfer.TransferImageStyleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_style_transfer.TransferImageStyleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_style_transfer.TransferImageStyleRequest}
 */
snet_style_transfer.TransferImageStyleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStyle(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setContentsize(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStylesize(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPreservecolor(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAlpha(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCrop(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSaveext(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_style_transfer.TransferImageStyleRequest} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_style_transfer.TransferImageStyleRequest.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_style_transfer.TransferImageStyleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_style_transfer.TransferImageStyleRequest.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getContent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = this.getStyle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = this.getContentsize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = this.getStylesize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = this.getPreservecolor();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = this.getAlpha();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = this.getCrop();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = this.getSaveext();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!snet_style_transfer.TransferImageStyleRequest} The clone.
 */
snet_style_transfer.TransferImageStyleRequest.prototype.cloneMessage = function() {
  return /** @type {!snet_style_transfer.TransferImageStyleRequest} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string content = 1;
 * @return {string}
 */
snet_style_transfer.TransferImageStyleRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
snet_style_transfer.TransferImageStyleRequest.prototype.setContent = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string style = 2;
 * @return {string}
 */
snet_style_transfer.TransferImageStyleRequest.prototype.getStyle = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
snet_style_transfer.TransferImageStyleRequest.prototype.setStyle = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional int32 contentSize = 3;
 * @return {number}
 */
snet_style_transfer.TransferImageStyleRequest.prototype.getContentsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 3, 0));
};


/** @param {number} value  */
snet_style_transfer.TransferImageStyleRequest.prototype.setContentsize = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional int32 styleSize = 4;
 * @return {number}
 */
snet_style_transfer.TransferImageStyleRequest.prototype.getStylesize = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 4, 0));
};


/** @param {number} value  */
snet_style_transfer.TransferImageStyleRequest.prototype.setStylesize = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional bool preserveColor = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
snet_style_transfer.TransferImageStyleRequest.prototype.getPreservecolor = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 5, false));
};


/** @param {boolean} value  */
snet_style_transfer.TransferImageStyleRequest.prototype.setPreservecolor = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional float alpha = 6;
 * @return {number}
 */
snet_style_transfer.TransferImageStyleRequest.prototype.getAlpha = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 6, 0));
};


/** @param {number} value  */
snet_style_transfer.TransferImageStyleRequest.prototype.setAlpha = function(value) {
  jspb.Message.setField(this, 6, value);
};


/**
 * optional bool crop = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
snet_style_transfer.TransferImageStyleRequest.prototype.getCrop = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 7, false));
};


/** @param {boolean} value  */
snet_style_transfer.TransferImageStyleRequest.prototype.setCrop = function(value) {
  jspb.Message.setField(this, 7, value);
};


/**
 * optional string saveExt = 8;
 * @return {string}
 */
snet_style_transfer.TransferImageStyleRequest.prototype.getSaveext = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 8, ""));
};


/** @param {string} value  */
snet_style_transfer.TransferImageStyleRequest.prototype.setSaveext = function(value) {
  jspb.Message.setField(this, 8, value);
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
snet_style_transfer.Image = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(snet_style_transfer.Image, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  snet_style_transfer.Image.displayName = 'snet_style_transfer.Image';
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
snet_style_transfer.Image.prototype.toObject = function(opt_includeInstance) {
  return snet_style_transfer.Image.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!snet_style_transfer.Image} msg The msg instance to transform.
 * @return {!Object}
 */
snet_style_transfer.Image.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: msg.getData()
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
 * @return {!snet_style_transfer.Image}
 */
snet_style_transfer.Image.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new snet_style_transfer.Image;
  return snet_style_transfer.Image.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!snet_style_transfer.Image} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!snet_style_transfer.Image}
 */
snet_style_transfer.Image.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Class method variant: serializes the given message to binary data
 * (in protobuf wire format), writing to the given BinaryWriter.
 * @param {!snet_style_transfer.Image} message
 * @param {!jspb.BinaryWriter} writer
 */
snet_style_transfer.Image.serializeBinaryToWriter = function(message, writer) {
  message.serializeBinaryToWriter(writer);
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
snet_style_transfer.Image.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  this.serializeBinaryToWriter(writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the message to binary data (in protobuf wire format),
 * writing to the given BinaryWriter.
 * @param {!jspb.BinaryWriter} writer
 */
snet_style_transfer.Image.prototype.serializeBinaryToWriter = function (writer) {
  var f = undefined;
  f = this.getData();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!snet_style_transfer.Image} The clone.
 */
snet_style_transfer.Image.prototype.cloneMessage = function() {
  return /** @type {!snet_style_transfer.Image} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional string data = 1;
 * @return {string}
 */
snet_style_transfer.Image.prototype.getData = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 1, ""));
};


/** @param {string} value  */
snet_style_transfer.Image.prototype.setData = function(value) {
  jspb.Message.setField(this, 1, value);
};


goog.object.extend(exports, snet_style_transfer);
