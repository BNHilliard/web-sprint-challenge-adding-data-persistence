// build your `/api/projects` router here
const router = require('express').Router();
const Project = require('./model');


router.get('/', (req, res, next) => {
    Project.getProjects()
    .then(resp =>{
        res.json(resp)
    }).catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        message: "something went wrong in the project router",
        stack: err.stack
    })
})

module.exports = router