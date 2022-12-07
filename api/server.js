const express = require('express')

const projectRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const server = express();

server.use(express.json())

// 
server.use('/api/projects', projectRouter)
server.use('/api/resouce', resourceRouter)
server.use('/api/task', taskRouter)

server.use('*', (req, res) => {
    res.json({api: "up"})
})

module.exports = server; 

