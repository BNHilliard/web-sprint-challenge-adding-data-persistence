const router = require('express').Router();
const Resources = require('./model');

router.get('/', (req, res, next) => {
    Resources.getResources()
    .then(resp =>{
        res.json(resp)
    }).catch(next)
})

router.use((err, req, res, next) => {
    res.status(500).json({
        message: "something went wrong in the resource router",
        stack: err.stack
    })
})


module.exports = router