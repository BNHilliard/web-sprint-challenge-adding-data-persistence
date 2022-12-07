const router = require('express').Router();
const Projects = require('./model');


router.get('/', (req, res, next) => {
    Projects.getProjects()
    .then(resp =>{
        res.json(resp)
    }).catch(next)
})

router.post('/', (req, res, next) => {
    if (!req.body.project_name) {
        res.status(400).json({message: "missing project name"})
    } else {
    Projects.createProject(req.body)
    .then(resp => {
        res.json(resp) // responds with project-id of newly created project
    }).catch(next)
    }
})

router.use((err, req, res, next) => {
    res.status(500).json({
        message: "something went wrong in the project router",
        stack: err.stack
    })
})

module.exports = router