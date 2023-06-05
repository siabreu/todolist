const database = require('../../db');
const Task = require('../models/task');

const getAll = async () => {
  await database.sync();
  return await Task.findAll();
};

const createTask = async (task) => {
  await Task.create({
    title: task.title,
    status: 'pendente'
  });
};

const updateTask = async (id, task) => {
  const updatedTask = await Task.findByPk(id);
  console.log('find by id: ', updatedTask);
  updatedTask.set({
    title: task.title,
    status: task.status
  });

  await updatedTask.save();
  return updatedTask;
};

const deleteTask = async (id) => {
  const removedTask = await Task.findByPk(id);
  await removedTask.destroy();
  return removedTask;
};

module.exports = {
  getAll,
  createTask,
  deleteTask,
  updateTask
};