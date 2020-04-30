"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _tasks = _interopRequireDefault(require("./routes/tasks"));

// Importing routes
// initialization
var app = (0, _express["default"])(); // Middlewares

app.use((0, _express.json)()); // Routes

app.use("/api/tasks", _tasks["default"]);
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map