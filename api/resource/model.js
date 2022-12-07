// build your `Resource` model here
const db = require('../../data/dbConfig');

function getResources() {
    return db('resource')
}

module.exports = {getResources}