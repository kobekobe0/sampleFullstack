const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    const response = await Task.find()
    res.json(response)
}

const createTask = async (req, res) => {
    const task = req.body
    const response = await Task.create(task)
    res.json(response)
}

const updateTask = async (req, res) => {
    const { id } = req.params
    const { newDesc } = req.body
    const response = await Task.findByIdAndUpdate(id, { description: newDesc })

    res.json(response)
}

const deleteTask = async (req, res) => {
    const { id } = req.params
    const response = await Task.deleteOne({ _id: id })
    res.json(response)
}

module.exports = { getAllTasks, createTask, updateTask, deleteTask }
