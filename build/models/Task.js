'use strict';

module.exports = function (sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    place: DataTypes.STRING,
    attendant: DataTypes.STRING,
    description: DataTypes.TEXT,
    priority: DataTypes.INTEGER
  }, {});

  Task.associate = function (models) {// associations can be defined here
  };

  return Task;
};
//# sourceMappingURL=Task.js.map