const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
} = require('./controllers/task')
const PORT = 3000
app.use(express.json(), cors())
mongoose.connect('mongodb://localhost/fistmongo')

app.get('/api', getAllTasks).post('/api', createTask)

app.put('/api/:id', updateTask).delete('/api/:id', deleteTask)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
