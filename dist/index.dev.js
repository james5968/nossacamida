"use strict";

var _expo = require("expo");

var _App = _interopRequireDefault(require("./App"));

var _config = require("./src/components/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _expo.registerRootComponent)(_App["default"]);