const router = require('express').Router();
const Projects = require('./model');


router.get('/', (req, res, next) => {
    Projects.getProjects()
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