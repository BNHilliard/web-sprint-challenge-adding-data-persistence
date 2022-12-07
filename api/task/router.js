const router = require('express').Router();
const Tasks = require('./model');

router.get('/', (req, res, next) => {
    Tasks.getTasks()
    .then(resp =>{
        res.json(resp)
    }).catch(next)
})

module.exports = router