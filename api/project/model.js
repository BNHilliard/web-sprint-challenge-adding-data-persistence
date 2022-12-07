// build your `Project` model here
const db = require('../../data/dbConfig');

async function getProjects() {
    const res = []
    const result = await db('projects')
    for (let i of result) {
        console.log(i.project_id)
        res.push({
            project_id: i.project_id, 
            project_name: i.project_name, 
            project_description: i.project_description, 
            project_completed: i.project_completed == 0 ? false : true
        })
    }
    return res
}
 


module.exports = {getProjects} 