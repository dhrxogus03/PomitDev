define("DS/CSICommandBinder/CSIParameters",["DS/ExperienceKernel/EKBinaryHelpers","DS/CSICommandBinder/CSIParametersIterator","DS/CSICommandBinder/CSIValueType","DS/CSICommandBinder/CSIValueTypeAPI","DS/CSICommandBinder/CSIErrorReport"],function(r,e,t,i,n){"use strict";var a=function(r){this.propertyMap_={},this.inputStreamSize_=0,this.typeName_="Parameters",r instanceof a?o.copyParameters(r,this):r instanceof ArrayBuffer&&this.fromBinary(r)};a.prototype.__stringifyWithBigIntSupport=function(r,e){return e&&e.stringify64BitsValues_?JSON.stringify(r,(r,e)=>"bigint"==typeof e?e.toString():e):JSON.stringify(r,(r,e)=>"bigint"==typeof e?Number(e):e)},a.prototype.serializeMap_={},a.prototype.unserializeMap_={},a.prototype.typeDefinitions_={},//!< map of <typename, CSIDeclarativeTypeDefinition>, for instance Parameters.prototype.typeDefinition_s['CATMathPoint'] === {...}
a.prototype.checkForIncomplete_=!1,a.prototype.getObjectType=function(){return this.typeName_},a.prototype.exists=function(r){if(void 0!==this.propertyMap_[r])return i.readValueTypeAsString(this.propertyMap_[r])},a.prototype.existsWithType=function(r,e){var t=this.propertyMap_[r];return!!t&&i.readValueTypeAsString(t)===e};var o={copyParameters:function(r,e){if(!(r instanceof a&&e instanceof a))return!1;for(var t in e.typeName_=r.typeName_,e.inputStreamSize_=r.inputStreamSize_,r.propertyMap_)if(r.propertyMap_.hasOwnProperty(t)){var i=r.propertyMap_[t];i instanceof ArrayBuffer?e.propertyMap_[t]=i.slice(0):i instanceof DataView&&(e.propertyMap_[t]=i.buffer.slice(i.byteOffset,i.byteOffset+i.byteLength))}return!0},getArrayNumberPropertyBinarySize:function(r,e){return 8+e*r.readUint64()}};a.prototype.declareType=function(r){return void 0===a.prototype.serializeMap_[r.type]&&(a.prototype.serializeMap_[r.type]=r.serialize,a.prototype.unserializeMap_[r.type]=r.unserialize,!0)},a.prototype.toBinary=function(){return m(this,this.typeName_)},a.prototype.getStreamSize=function(){return p(this.propertyMap_,this.typeName_)};var p=function(r,e){var t=8+e.length+4;for(var i in r)r.hasOwnProperty(i)&&(t+=4+i.length+r[i].byteLength);return t};function y(e,t,i,n){var a=e.propertyMap_[t];if(a instanceof ArrayBuffer||a instanceof DataView){var o=new r.BinaryReader(a);if(o.readUint8()===i)return o[n]()}}function s(e,t,i,n){var a=e.propertyMap_[t];if(a instanceof ArrayBuffer||a instanceof DataView){var o=new r.BinaryReader(a);if(o.readUint8()===i){var p=o.readUint64();return o[n](p)}}}function u(r){if(r.readUint8()===t.binaryType){var e=r.readUint64();if(r.readUint32()===t.CSIBufferGuid)return r.readArrayBuffer(e-4)}}function f(e,t,i,n){var a=new r.BinaryWriter(1+n);return a.writeUint8(t),a[i](e),a.createArrayBuffer()}function c(e){var i=13+e.byteLength,n=new r.BinaryWriter(i);return n.writeUint8(t.binaryType),n.writeUint64(e.byteLength+4),n.writeUint32(t.CSIBufferGuid),n.writeArrayBuffer(e),n.createArrayBuffer()}function l(e,t,i,n){var a=new r.BinaryWriter(9+n);return a.writeUint8(t),a.writeUint64(e.length),a[i](e),a.createArrayBuffer()}function h(r){return r instanceof ArrayBuffer?r.byteLength%4==0?4:r.byteLength%2==0?2:1:r instanceof DataView?r.byteLength%4==0&&r.byteOffset%4==0?4:r.byteLength%2==0&&r.byteOffset%2==0?2:1:0}function d(r,e){if(r instanceof ArrayBuffer){if(4===e)return new Uint32Array(r);if(2===e)return new Uint16Array(r);if(1===e)return new Uint8Array(r)}else if(r instanceof DataView){if(4===e)return new Uint32Array(r.buffer,r.byteOffset,r.byteLength/e);if(2===e)return new Uint16Array(r.buffer,r.byteOffset,r.byteLength/e);if(1===e)return new Uint8Array(r.buffer,r.byteOffset,r.byteLength/e)}}a.prototype.getInputStreamSize=function(){return this.inputStreamSize_},a.prototype.fromBinary=function(e){this.propertyMap_={},this.inputStreamSize_=e.byteLength;var i=new r.BinaryReader(e),n=i.readUint32();if(n!==t.CSIParametersGuid&&(i.seek(0),i.readUint8()===t.binaryType)){var a=i.readUint64();void 0!==a&&0!==a&&(n=i.readUint32())}var o=i.readString();if(void 0===o||n!==t.CSIParametersGuid)return!1;for(this.typeName_=o,i.readUint16(),i.readUint16();i.tell()<e.byteLength;)if(!this.readPropertyFromBinary(i))return!1;return!0},a.prototype.readPropertyFromBinary=function(r){var e=r.readString();if(void 0!==e){var i=r.tell(),n=r.readUint8();if(void 0!==n){var a,p=1;switch(n){case t.booleanType:case t.int8Type:case t.uint8Type:p+=1;break;case t.int16Type:case t.uint16Type:p+=2;break;case t.int32Type:case t.uint32Type:p+=4;break;case t.int64Type:case t.uint64Type:p+=8;break;case t.floatType:p+=4;break;case t.doubleType:p+=8;break;case t.stringType:void 0!==(a=r.readUint32())&&(p+=4+a);break;case t.stringsType:var y=r.readUint64();if(void 0!==y){p+=8;for(var s=0;s<y;++s)void 0!==(a=r.readUint32())&&(p+=4+a,r.seek(r.tell()+a))}break;case t.booleanArrayType:case t.int8ArrayType:case t.uint8ArrayType:p+=o.getArrayNumberPropertyBinarySize(r,1);break;case t.int16ArrayType:case t.uint16ArrayType:p+=o.getArrayNumberPropertyBinarySize(r,2);break;case t.int32ArrayType:case t.uint32ArrayType:p+=o.getArrayNumberPropertyBinarySize(r,4);break;case t.int64ArrayType:case t.uint64ArrayType:p+=o.getArrayNumberPropertyBinarySize(r,8);break;case t.floatArrayType:p+=o.getArrayNumberPropertyBinarySize(r,4);break;case t.doubleArrayType:p+=o.getArrayNumberPropertyBinarySize(r,8);break;case t.bufferArrayType:p+=8+r.readUint64();break;case t.binaryType:var u=r.readUint64();if(void 0!==u&&0!==u){var f=r.readUint32();f!==t.CSIBufferGuid&&f!==t.CSIParametersGuid&&f!==t.CSIParametersArrayGuid&&f!==t.CSIParametersReferenceGuid||(p+=8+u)}}if(p>1){r.seek(i);var c=r.readDataView(p);if(void 0!==c)return this.propertyMap_[e]=c,!0}}}return!1},a.prototype.readString=function(e){var i=this.propertyMap_[e];if(i instanceof ArrayBuffer||i instanceof DataView){var n=new r.BinaryReader(i);if(n.readUint8()===t.stringType)return n.readString()}},a.prototype.readBool=function(r){return y(this,r,t.booleanType,"readBool")},a.prototype.readInt8=function(r){return y(this,r,t.int8Type,"readInt8")},a.prototype.readUint8=function(r){return y(this,r,t.uint8Type,"readUint8")},a.prototype.readInt16=function(r){return y(this,r,t.int16Type,"readInt16")},a.prototype.readUint16=function(r){return y(this,r,t.uint16Type,"readUint16")},a.prototype.readInt32=function(r){return y(this,r,t.int32Type,"readInt32")},a.prototype.readUint32=function(r){return y(this,r,t.uint32Type,"readUint32")},a.prototype.readInt64=function(r){return y(this,r,t.int64Type,"readInt64")},a.prototype.readUint64=function(r){return y(this,r,t.uint64Type,"readUint64")},a.prototype.readInt64AsBigInt=function(r){return y(this,r,t.int64Type,"readInt64AsBigInt")},a.prototype.readUint64AsBigInt=function(r){return y(this,r,t.uint64Type,"readUint64AsBigInt")},a.prototype.readFloat=function(r){return y(this,r,t.floatType,"readFloat")},a.prototype.readDouble=function(r){return y(this,r,t.doubleType,"readDouble")},a.prototype.readStringArray=function(r){return s(this,r,t.stringsType,"readStrings")},a.prototype.readBoolArray=function(r){var e=s(this,r,t.booleanArrayType,"readBoolArray");if(e instanceof Uint8Array){for(var i=new Array(e.length),n=0;n<e.byteLength;++n)i[n]=Boolean(e[n]);return i}},a.prototype.readInt8Array=function(r){return s(this,r,t.int8ArrayType,"readInt8Array")},a.prototype.readUint8Array=function(r){return s(this,r,t.uint8ArrayType,"readUint8Array")},a.prototype.readInt16Array=function(r){return s(this,r,t.int16ArrayType,"readInt16Array")},a.prototype.readUint16Array=function(r){return s(this,r,t.uint16ArrayType,"readUint16Array")},a.prototype.readInt32Array=function(r){return s(this,r,t.int32ArrayType,"readInt32Array")},a.prototype.readUint32Array=function(r){return s(this,r,t.uint32ArrayType,"readUint32Array")},a.prototype.readInt64Array=function(r){return s(this,r,t.int64ArrayType,"readInt64Array")},a.prototype.readUint64Array=function(r){return s(this,r,t.uint64ArrayType,"readUint64Array")},a.prototype.readFloatArray=function(r){return s(this,r,t.floatArrayType,"readFloatArray")},a.prototype.readDoubleArray=function(r){return s(this,r,t.doubleArrayType,"readDoubleArray")},a.prototype.readBuffer=function(e){var t=this.propertyMap_[e];if(t instanceof ArrayBuffer||t instanceof DataView)return u(new r.BinaryReader(t))},a.prototype.readBufferArray=function(e){var i=this.propertyMap_[e];if(void 0!==i){var n=new r.BinaryReader(i),a=[];if(n.readUint8()===t.bufferArrayType){n.readUint64();for(var o=0;n.tell()<n.getSize();)a[o++]=u(n);return a}}},a.prototype.readObject=function(r,e){if(void 0===a.prototype.unserializeMap_[e])return n.errorU("CSIParameters.readObject(), no unserialization function available for type "+e);var t=this.readParameters(r,e);return t?a.prototype.unserializeMap_[e](t):void 0},a.prototype.readParameters=function(r,e){var t=this.propertyMap_[r];if(t instanceof ArrayBuffer||t instanceof DataView){var i=new a;if(i.fromBinary(t))return"Parameters"===e||i.typeName_===e?i:n.errorU("CSIParameters.readParameters(), property <"+r+"> is of type <"+i.typeName_+">, not <"+e+">")}},a.prototype.readParametersArray=function(r,e){var t=this.propertyMap_[r];if(t instanceof ArrayBuffer||t instanceof DataView){var o=i.readParametersArrayBinaries(t);if("string"==typeof o)return"Parameters"===e||e===o?[]:n.errorU("CSIParameters.readParametersArray(), property <"+r+"> is an empty array of type <"+o+">, not <"+e+">");if(void 0!==o&&void 0!==o.length){for(var p=[],y=0;y<o.length;++y){var s=new a;if(s.fromBinary(o[y])){if("Parameters"!==e&&e!==s.typeName_)return n.errorU("CSIParameters.readParametersArray(), property <"+r+"> is an array of type <"+s.typeName_+">, not <"+e+">");p.push(s)}}return p}}},a.prototype.readObjectArray=function(r,e){if(void 0===a.prototype.unserializeMap_[e])return n.errorU("CSIParameters.readObjectArray(), unserialization function not available for type "+e);var t=this.readParametersArray(r,e);if(void 0!==t&&void 0!==t.length){for(var i=[],o=0;o<t.length;++o){var p=t[o],y=a.prototype.unserializeMap_[e](p);if(void 0===y)return n.errorU("CSIParameters.readObjectArray(), Unserialize function returns undefined for property <"+r+"> type <"+e+">");i.push(y)}return i}},a.prototype.writeString=function(r,e){return void 0===e&&n.deprecated("Call CSIParameters.writeString() with an undefined value. Name and value input parameters must be defined"),e+="",this.propertyMap_[r]=f(e,t.stringType,"writeString",4+4*e.length),!0},a.prototype.writeBool=function(r,e){return void 0!==e&&(this.propertyMap_[r]=f(e,t.booleanType,"writeBool",1),!0)},a.prototype.writeInt8=function(r,e){return void 0!==e&&(this.propertyMap_[r]=f(e,t.int8Type,"writeInt8",1),!0)},a.prototype.writeUint8=function(r,e){return void 0!==e&&(this.propertyMap_[r]=f(e,t.uint8Type,"writeUint8",1),!0)},a.prototype.writeInt16=function(r,e){return void 0!==e&&(this.propertyMap_[r]=f(e,t.int16Type,"writeInt16",2),!0)},a.prototype.writeUint16=function(r,e){return void 0!==e&&(this.propertyMap_[r]=f(e,t.uint16Type,"writeUint16",2),!0)},a.prototype.writeInt32=function(r,e){return void 0===e&&(n.deprecated("Call CSIParameters.writeInt32() with an undefined value. Name and value input parameters must be defined"),e=0),this.propertyMap_[r]=f(e,t.int32Type,"writeInt32",4),!0},a.prototype.writeUint32=function(r,e){return void 0!==e&&(this.propertyMap_[r]=f(e,t.uint32Type,"writeUint32",4),!0)},a.prototype.writeInt64=function(r,e){return void 0!==e&&(this.propertyMap_[r]=f(e,t.int64Type,"writeInt64",8),!0)},a.prototype.writeUint64=function(r,e){return void 0!==e&&(this.propertyMap_[r]=f(e,t.uint64Type,"writeUint64",8),!0)},a.prototype.writeFloat=function(r,e){return void 0!==e&&(this.propertyMap_[r]=f(e,t.floatType,"writeFloat",8),!0)},a.prototype.writeDouble=function(r,e){return void 0!==e&&(this.propertyMap_[r]=f(e,t.doubleType,"writeDouble",8),!0)},a.prototype.writeBuffer=function(r,e){return void 0!==e&&(this.propertyMap_[r]=c(e),!0)},a.prototype.writeBufferArray=function(e,i){if(void 0===i)return!1;for(var n,a=0,o=[],p=0;p<i.length;++p)a+=(n=c(i[p])).byteLength,o[p]=n;for(var y=new r.BinaryWriter(a),s=0;s<o.length;++s)y.writeArrayBuffer(o[s]);var u=9+a,f=new r.BinaryWriter(u);return f.writeUint8(t.bufferArrayType),f.writeUint64(a),f.writeArrayBuffer(y.createArrayBuffer()),this.propertyMap_[e]=f.createArrayBuffer(),!0},a.prototype.writeObject=function(r,e,t){if(null==t)return n.error("Unexpected call to CSIParameters.writeObject() with undefined value");if(void 0===a.prototype.serializeMap_[e])return a.prototype.checkForIncomplete_?this.pushIncompleteOperation([e,a.prototype.writeObject,this,Array.prototype.slice.call(arguments)]):n.error("Call to CSIParameters.writeObject() with type <"+e+"> but no serialization function exists");var i=new a;return!1!==a.prototype.serializeMap_[e](i,t)&&i.declareAsObject(e)?this.writeParameters(r,e,i):n.error("Call to CSIParameters.writeObject() but serialization function failed for type "+e+" with object "+JSON.stringify(t))},a.prototype.writeParameters=function(e,i,o){if(null==o)return n.error("Unexpected call to CSIParameters.writeParameters() with undefined value");if(!A(i,o))return!1;if(o.isIncomplete())return!!a.prototype.checkForIncomplete_&&(this.pushIncompleteParameters(o),this.pushIncompleteOperation([i,a.prototype.writeParameters,this,Array.prototype.slice.call(arguments)]));var p=m(o,"Parameters"===i?o.typeName_:i),y=new r.BinaryWriter;return y.writeUint8(t.binaryType),y.writeUint64(p.byteLength),y.writeArrayBuffer(p),this.propertyMap_[e]=y.createArrayBuffer(),!0},a.prototype.writeJSONInternal=function(e,i){if(null==i)return n.error("Unexpected call to CSIParameters.writeJSONInternal() with undefined value");var a=JSON.stringify(i),o=unescape(encodeURIComponent(a)),p=new r.BinaryWriter(13+o.length);return p.writeUint8(t.binaryType),p.writeUint64(4+o.length),p.writeUint32(t.CSIJsonGuid),p.writeStringInternal(o),this.propertyMap_[e]=p.createArrayBuffer(),!0},a.prototype.writeStringArray=function(r,e){if(!e)return!1;for(var i=0,n=0;n<e.length;++n)i+=4+4*e[n].length;return this.propertyMap_[r]=l(e,t.stringsType,"writeStrings",i),!0},a.prototype.writeBoolArray=function(r,e){return!!e&&(this.propertyMap_[r]=l(e,t.booleanArrayType,"writeBoolArray",e.length),!0)},a.prototype.writeInt8Array=function(r,e){return!!e&&(this.propertyMap_[r]=l(e,t.int8ArrayType,"writeInt8Array",e.length),!0)},a.prototype.writeUint8Array=function(r,e){return!!e&&(this.propertyMap_[r]=l(e,t.uint8ArrayType,"writeUint8Array",e.length),!0)},a.prototype.writeInt16Array=function(r,e){return!!e&&(this.propertyMap_[r]=l(e,t.int16ArrayType,"writeInt16Array",e.length),!0)},a.prototype.writeUint16Array=function(r,e){return!!e&&(this.propertyMap_[r]=l(e,t.uint16ArrayType,"writeUint16Array",e.length),!0)},a.prototype.writeInt32Array=function(r,e){return!!e&&(this.propertyMap_[r]=l(e,t.int32ArrayType,"writeInt32Array",e.length),!0)},a.prototype.writeUint32Array=function(r,e){return!!e&&(this.propertyMap_[r]=l(e,t.uint32ArrayType,"writeUint32Array",e.length),!0)},a.prototype.writeInt64Array=function(r,e){return!!e&&(this.propertyMap_[r]=l(e,t.int64ArrayType,"writeInt64Array",e.length),!0)},a.prototype.writeUint64Array=function(r,e){return!!e&&(this.propertyMap_[r]=l(e,t.uint64ArrayType,"writeUint64Array",e.length),!0)},a.prototype.writeFloatArray=function(r,e){return!!e&&(this.propertyMap_[r]=l(e,t.floatArrayType,"writeFloatArray",e.length),!0)},a.prototype.writeDoubleArray=function(r,e){return!!e&&(this.propertyMap_[r]=l(e,t.doubleArrayType,"writeDoubleArray",e.length),!0)},a.prototype.writeParametersArray=function(e,i,o){if(!(o instanceof Array))return n.error("Unexpected call to CSIParameters.writeParametersArray() with undefined parameters array");for(var p=0;p<o.length;++p)if(!A(i,o[p]))return!1;for(var y,s=!1,u=0;u<o.length;++u)if((y=o[u]).isIncomplete()){if(!a.prototype.checkForIncomplete_)return!1;s=this.pushIncompleteParameters(y)}if(s)return this.pushIncompleteOperation([i,a.prototype.writeParametersArray,this,Array.prototype.slice.call(arguments)]);for(var f=0,c=[],l=0;l<o.length;++l){y=o[l];var h=m(y,"Parameters"===i?y.typeName_:i);c.push(h),f+=h.byteLength}var d,w=c.length;if(0===w){var b=new r.BinaryWriter;b.writeString(i),d=b.createArrayBuffer()}f+=12+(d?d.byteLength:0),f+=8*w;var _=new r.BinaryWriter(9+f);if(_.writeUint8(t.binaryType),_.writeUint64(f),_.writeUint32(t.CSIParametersArrayGuid),_.writeUint64(w),0===w)_.writeArrayBuffer(d);else for(var v=0;v<w;++v)_.writeUint64(c[v].byteLength),_.writeArrayBuffer(c[v]);return this.propertyMap_[e]=_.createArrayBuffer(),!0},a.prototype.writeObjectArray=function(r,e,t){if(null==t)return n.error("Unexpected call to CSIParameters.writeObjectArray() with undefined value");if(void 0===a.prototype.serializeMap_[e])return a.prototype.checkForIncomplete_?this.pushIncompleteOperation([e,a.prototype.writeObjectArray,this,Array.prototype.slice.call(arguments)]):n.error("CSIParameters.writeObjectArray(), no serialization function available for type "+e);for(var i=[],o=0;o<t.length;o++){var p=new a;if(!1===a.prototype.serializeMap_[e](p,t[o])||!p.declareAsObject(e))return n.error("Call to CSIParameters.writeObjectArray() but serialization function failed for type "+e+" with object "+JSON.stringify(t));i.push(p)}return this.writeParametersArray(r,e,i)},a.prototype.begin=function(){return new e(this,!1)},a.prototype.end=function(){return new e(this,!0)},a.prototype.toJSON=function(){return this.__stringifyWithBigIntSupport(this.toTypedObject())},a.prototype.toTypedObject=function(r){for(var e={},t=this.begin(),i=this.end();!t.equal(i);){var n=t.getName();e[n]={type:t.getType()},e[n].value=t.getTypedValue(r),t.next()}return e},a.prototype.toJSObject=function(){for(var r={},e=this.begin(),t=this.end();!e.equal(t);){var i=e.getName(),n=e.getJSValue();if(e.isObject())r[i]=n;else if(e.isObjectArray()){r[i]=[];for(var a=n,o=0;o<a.length;o++)r[i].push(a[o])}else r[i]=n;e.next()}return r},a.prototype.fromObject=function(r,e){if(null==r)return n.error("Unexpected call to CSIParameters.fromObject() with undefined value");if(void 0===a.prototype.serializeMap_[e]){var t=a.prototype.typeDefinitions_[e];return void 0===t?!!a.prototype.checkForIncomplete_&&this.pushIncompleteOperation([e,a.prototype.fromObject,this,Array.prototype.slice.call(arguments)]):!!this.fromPropertyDefinitions(r,t.definition)&&(this.typeName_=e,!0)}return!(!1===a.prototype.serializeMap_[e](this,r)||!this.declareAsObject(e))||n.error("Call to CSIParameters.fromObject() but serialization function failed for type "+e+" with object "+JSON.stringify(r))},a.prototype.fromJSON=function(r,e){return this.fromObject(JSON.parse(r),e)},a.prototype.fromPropertyDefinitions=function(r,e){return e instanceof Array&&e.every(function(e){var t,i,o,p;if(e.file)return n.error("CSIParameters.fromPropertyDefinitions() file property type is not supported");if(e.basic)this[p="write"+(p=e.basic).charAt(0).toUpperCase()+p.slice(1)](e.label,r[e.label]);else if(e.basicArray)this[p="write"+(p=e.basicArray+"Array").charAt(0).toUpperCase()+p.slice(1)](e.label,r[e.label]);else if(e.type){if(!(i=new a).fromObject(r[e.label],e.type))return!1;if(!this.writeParameters(e.label,e.type,i))return!1}else if(e.typeArray){if(!(r[e.label]instanceof Array))return!1;for(o=[],t=0;t<r[e.label].length;++t){if(!(i=new a).fromObject(r[e.label][t],e.typeArray))return!1;o.push(i)}if(!this.writeParametersArray(e.label,e.typeArray,o))return!1}else if(e.parameters){if(!(i=new a).fromPropertyDefinitions(r[e.label],e.parameters))return!1;if(!this.writeParameters(e.label,"Parameters",i))return!1}else if(e.parametersArray){if(!(r[e.label]instanceof Array))return!1;for(o=[],t=0;t<r[e.label].length;++t){if(!(i=new a).fromPropertyDefinitions(r[e.label][t],e.parametersArray))return!1;o.push(i)}if(!this.writeParametersArray(e.label,"Parameters",o))return!1}return!0},this)},a.prototype.isEmpty=function(){return!this.isIncomplete()&&0===Object.keys(this.propertyMap_).length},a.prototype.removeProperty=function(r){return!!this.propertyMap_.hasOwnProperty(r)&&(delete this.propertyMap_[r],!0)},a.prototype.declareAsObject=function(r){return!!A(r,this)&&(this.typeName_=r,!0)},a.prototype.overrideWith=function(r){if(r.typeName_!==this.typeName_)return n.error("CSIParameters.overrideWith() cannot override Parameters with different typename, this.typename = "+this.typeName_+" other.typename = "+r.typeName_);var e=!1;for(var t in r.propertyMap_)r.propertyMap_.hasOwnProperty(t)&&(this.propertyMap_[t]=r.propertyMap_[t],e=!0);return e},a.prototype.isEqualTo=function(r){const e=Object.keys(this.propertyMap_).sort(),t=Object.keys(r.propertyMap_).sort();return!!e.every((r,e)=>r===t[e])&&e.every(e=>{return function(r,e){if(r.byteLength!==e.byteLength)return!1;if(0===r.byteLength)return!0;const t=h(r),i=h(e);if(0===t||0===i)return!1;const n=Math.min(t,i),a=d(r,n),o=d(e,n);return a.every((r,e)=>r===o[e])}(this.propertyMap_[e],r.propertyMap_[e])})};var m=function(e,i){var n=new r.BinaryWriter(e.getStreamSize(i));for(var a in n.writeUint32(t.CSIParametersGuid),n.writeString(i),n.writeUint16(16980),n.writeUint16(1),e.propertyMap_)e.propertyMap_.hasOwnProperty(a)&&(n.writeString(a),n.writeArrayBuffer(e.propertyMap_[a]));return n.createArrayBuffer()},A=function(r,e){return e instanceof a&&(void 0===r||"Parameters"===r||"string"==typeof r)};return a.prototype.exportToString=function(){if(this.isEmpty()&&"Parameters"===this.typeName_)return"{}";const r={content:"",type:this.typeName_,version:3},e={stringify64BitsValues_:!0};return r.content=this.toTypedObject(e),this.__stringifyWithBigIntSupport(r,e)},a.prototype.importFromString=function(r){let e=void 0;return"{}"===r?(this.typeName_="Parameters",this.propertyMap_={},!0):(r instanceof Object?e=r:"string"==typeof r&&(e=JSON.parse(r)),!("number"!=typeof e.version||e.version<1||e.version>4)&&(this.propertyMap_={},this.typeName_="Parameters",i.importParametersFromTypedObject(this,e.content,e.version)?(this.typeName_=e.type,!0):(this.propertyMap_={},!1)))},a.prototype.isIncomplete=function(){return this.incompleteParameters_ instanceof Array&&this.incompleteParameters_.length>0||this.incompleteOperations_ instanceof Array&&this.incompleteOperations_.length>0},a.prototype.pushIncompleteParameters=function(r){return void 0===this.incompleteParameters_&&(this.incompleteParameters_=[]),this.incompleteParameters_.push(r),!0},a.prototype.pushIncompleteOperation=function(r){return void 0===this.incompleteOperations_&&(this.incompleteOperations_=[]),this.incompleteOperations_.push(r),!0},a.prototype.complete=function(r){var e;if(this.incompleteParameters_ instanceof Array){for(e=0;e<this.incompleteParameters_.length;++e){var t=this.incompleteParameters_[e];if(t instanceof a){if(!t.complete(r))return!1;this.incompleteParameters_[e]=void 0}}delete this.incompleteParameters_}if(this.incompleteOperations_ instanceof Array){for(e=0;e<this.incompleteOperations_.length;++e)if(this.incompleteOperations_[e]instanceof Array){if(void 0!==r&&r instanceof Array){var i=this.incompleteOperations_[e][0];"Parameters"!==i&&-1===r.indexOf(i)&&r.push(i)}var n=this.incompleteOperations_[e][1],o=this.incompleteOperations_[e][2],p=this.incompleteOperations_[e][3];if(!n.apply(o,p))return!1;this.incompleteOperations_[e]=void 0}delete this.incompleteOperations_}return!0},a.prototype.getIncompleteRequiredTypes=function(r){var e,t=!1;if(void 0===r&&(r=[],t=!0),this.incompleteParameters_ instanceof Array)for(e=0;e<this.incompleteParameters_.length;++e){this.incompleteParameters_[e]instanceof a&&this.incompleteParameters_[e].getIncompleteRequiredTypes(r)}if(this.incompleteOperations_ instanceof Array)for(e=0;e<this.incompleteOperations_.length;++e)if(this.incompleteOperations_[e]instanceof Array){var i=this.incompleteOperations_[e][0];"Parameters"!==i&&r.push(i)}if(t)return r},a.prototype.declareType({type:"Parameters",serialize:function(r,e){return o.copyParameters(e,r)},unserialize:function(r){var e=new a;return o.copyParameters(r,e),e}}),a});