const router = require('express').Router();
const Tasks = require('./model');
const Project = require('../project/model')

router.get('/', (req, res, next) => {
    Tasks.getTasks()
    .then(resp =>{
        res.json(resp)
    }).catch(next)
})


router.post('/', (req, res, next) => {
    if (!req.body.task_description || !req.body.project_id) {
        res.status(500).json({message: "task description and project ID required"})
        } else {
    Project.getById(req.body.project_id)
    .then(resp => {
        if (!resp.length) {
            res.status(500).json({message: "project ID is invalid"})
        } else {
            Tasks.createTask(req.body)
            .then(newTaskId => {
                Tasks.getById(newTaskId)
                .then(result => {
                    res.status(201).json({
                                    task_id: result[0].task_id, 
                                    task_description: result[0].task_description, 
                                    task_notes: result[0].task_notes,
                                    task_completed: result[0].task_completed == 0 ? false : true, 
                                    project_id: result[0].project_id})
                }).catch(err => {
                    res.json(err)
                })
            }).catch(err => {
                res.json(err)
            })
        }
    }).catch(err => {
            res.json(err)
    }).catch(err => {
        res.json(err)
    })
    }
})

router.use((err, req, res, next) => {
    res.status(500).json({
        message: "something went wrong in the task router",
        stack: err.stack
    })
})
module.exports = router