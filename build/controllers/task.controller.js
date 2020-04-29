"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTask = createTask;
exports.getTasks = getTasks;
exports.getOneTask = getOneTask;
exports.deleteOneTask = deleteOneTask;
exports.updateTask = updateTask;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

//import Task from "../models/Task";
var Task = require("../models").Task;

function createTask(_x, _x2) {
  return _createTask.apply(this, arguments);
}

function _createTask() {
  _createTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, place, attendant, description, priority, newTask;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, place = _req$body.place, attendant = _req$body.attendant, description = _req$body.description, priority = _req$body.priority;
            _context.prev = 1;
            _context.next = 4;
            return Task.create({
              place: place,
              attendant: attendant,
              description: description,
              priority: priority
            }, {
              fields: ["place", "attendant", "description", "priority"]
            });

          case 4:
            newTask = _context.sent;

            if (newTask) {
              res.json({
                message: "Tarea creada correctamente",
                data: newTask
              });
            }

            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.json({
              message: "Algo salio mal con la creación de la tarea",
              data: {}
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _createTask.apply(this, arguments);
}

function getTasks(_x3, _x4) {
  return _getTasks.apply(this, arguments);
}

function _getTasks() {
  _getTasks = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Task.findAll();

          case 2:
            tasks = _context2.sent;
            res.json(tasks);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getTasks.apply(this, arguments);
}

function getOneTask(_x5, _x6) {
  return _getOneTask.apply(this, arguments);
}

function _getOneTask() {
  _getOneTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, task;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.next = 3;
            return Task.findOne({
              where: {
                id: id
              }
            });

          case 3:
            task = _context3.sent;
            res.json(task);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getOneTask.apply(this, arguments);
}

function deleteOneTask(_x7, _x8) {
  return _deleteOneTask.apply(this, arguments);
}

function _deleteOneTask() {
  _deleteOneTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, deleteRowCount;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _context4.next = 3;
            return Task.destroy({
              where: {
                id: id
              }
            });

          case 3:
            deleteRowCount = _context4.sent;
            res.json({
              message: "Tarea borrada exitosamente",
              count: deleteRowCount
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deleteOneTask.apply(this, arguments);
}

function updateTask(_x9, _x10) {
  return _updateTask.apply(this, arguments);
}

function _updateTask() {
  _updateTask = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, place, attendant, description, priority, task, taskupdated;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, place = _req$body2.place, attendant = _req$body2.attendant, description = _req$body2.description, priority = _req$body2.priority;
            _context5.next = 4;
            return Task.findOne({
              where: {
                id: id
              }
            });

          case 4:
            task = _context5.sent;
            _context5.next = 7;
            return task.update({
              place: place,
              attendant: attendant,
              description: description,
              priority: priority
            });

          case 7:
            taskupdated = _context5.sent;
            res.json({
              message: "Tarea actualizada exitosamente",
              data: taskupdated
            });

          case 9:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _updateTask.apply(this, arguments);
}
//# sourceMappingURL=task.controller.js.map