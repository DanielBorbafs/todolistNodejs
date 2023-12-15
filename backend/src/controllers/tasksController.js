const taskModel = require('../models/taskModel')

const getAll = async (_req, res) => {
    const tasks = await taskModel.getAll();
    return res.status(200).json(tasks)
};

const createTask = async (req, res) => {
    //const createdTask = await taskModel.createTask()
    return res.status(201).json(req.body);
}

module.exports = {
    getAll,
    createTask
}