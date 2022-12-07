// build your `Task` model here
const db = require('../../data/dbConfig');

function getTasks() {
    return db('task')
}



module.exports = {getTasks}