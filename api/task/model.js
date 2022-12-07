// build your `Task` model here
const db = require('../../data/dbConfig');

async function getTasks() {
    const res = []
    const result = await db('tasks').leftJoin('projects', 'projects.project_id', 'tasks.project_id')
        for (let i of result) {
                res.push({
                project_name: i.project_name,
                project_description: i.project_description,
                task_notes: i.task_notes,  
                task_description: i.task_description, 
                task_completed: i.task_completed == 0 ? false : true
            })
        }
    return res
}
module.exports = {getTasks}