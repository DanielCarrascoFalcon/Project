'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    place: DataTypes.STRING,
    attendant: DataTypes.STRING,
    description: DataTypes.TEXT,
    priority: DataTypes.INTEGER
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
  };
  return Task;
};