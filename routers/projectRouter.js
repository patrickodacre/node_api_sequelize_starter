const express       = require('express')
const router        = express.Router()
const Project       = require('../models/Project')
const createRouter  = require('./createRouter')

const projectRouter = createRouter(router, Project, 'project', 'projects')


module.exports = {projectRouter}