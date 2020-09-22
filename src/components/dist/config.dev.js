"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fireApp = void 0;

var firebase = _interopRequireWildcard(require("firebase"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var firebaseConfig = {
  apiKey: 'AIzaSyA6Fnrz0y0dC-xkOgPN-tc8LUYu2VljB5Y',
  authDomain: 'minacasa-b5391.firebaseapp.com',
  databaseURL: 'https://minacasa-b5391.firebaseio.com',
  projectId: 'minacasa-b5391',
  storageBucket: 'minacasa-b5391.appspot.com',
  messagingSenderId: '1072087462812',
  appId: '1:1072087462812:web:61ced4ce5969cb77b64e59'
};
var fireApp = firebase.initializeApp(firebaseConfig);
exports.fireApp = fireApp;