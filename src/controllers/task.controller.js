//import Task from "../models/Task";
var Task = require("../models").Task;

export async function createTask(req, res) {
  const { place, attendant, description, priority } = req.body;
  try {
    let newTask = await Task.create(
      {
        place,
        attendant,
        description,
        priority,
      },
      {
        fields: ["place", "attendant", "description", "priority"],
      }
    );
    if (newTask) {
      res.json({
        message: "Tarea creada correctamente",
        data: newTask,
      });
    }
  } catch (e) {
    console.log(e);
    res.json({
      message: "Algo salio mal con la creación de la tarea",
      data: {},
    });
  }
}

export async function getTasks(req, res) {
  const tasks = await Task.findAll();
  res.json({
    data: tasks,
  });
}

export async function getOneTask(req, res) {
  const { id } = req.params;
  const task = await Task.findOne({
    where: {
      id,
    },
  });
  res.json(task);
}

export async function deleteOneTask(req, res) {
  const { id } = req.params;
  const deleteRowCount = await Task.destroy({
    where: {
      id,
    },
  });
  res.json({
    message: "Tarea borrada exitosamente",
    count: deleteRowCount,
  });
}

export async function updateTask(req, res) {
  const { id } = req.params;
  const { place, attendant, description, priority } = req.body;
  const task = await Task.findOne({
    where: {
      id,
    },
  });
  const taskupdated = await task.update({
    place,
    attendant,
    description,
    priority,
  });
  res.json({
    message: "Tarea actualizada exitosamente",
    data: taskupdated,
  });
}
