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
        Projects.getById(resp)
        .then(project => {
            res.status(201).json({project_id: project[0].project_id,
                                  project_name: project[0].project_name,
                                  project_description: project[0].project_description,
                                  project_completed: project[0].project_completed == 0 ? false : true})
        }).catch(next)
    })
}})



router.use((err, req, res, next) => {
    res.status(500).json({
        message: "something went wrong in the project router",
        stack: err.stack
    })
})

module.exports = router