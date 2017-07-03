const express      = require('express')
const router       = express.Router()
const Task         = require('../models/Task')
const createRouter = require('./createRouter')

const taskRouter   = createRouter(router, Task, 'task', 'tasks')

module.exports = {taskRouter}