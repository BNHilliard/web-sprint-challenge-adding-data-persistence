const router = require('express').Router();
const Task = require('./model');

router.get('/', (req, res, next) => {
    Task.getTasks()
    .then(resp =>{
        res.json(resp)
    }).catch(next)
})

module.exports = router