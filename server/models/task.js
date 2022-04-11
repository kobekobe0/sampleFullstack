const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    description: { type: String, required: true },
    completed: { type: Boolean, default: false },
    id: { type: String, default: Date.now() },
})

const model = mongoose.model('Task', TaskSchema)

module.exports = model
