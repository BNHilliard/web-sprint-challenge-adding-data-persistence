/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {task_description: "Measure twice!", task_notes: 'be sure to measure from the inside of the metal bracket', project_id: 1},
    {task_description: "Cut Once", task_notes: 'Wear protective gear!', project_id: 1},
    {task_description: "Stack the bricks", task_notes: "alternating the bricks for the best support", project_id: 2},
    {task_description: "Fill the planter", task_notes: "should need 2.5 cubic yards of soil", project_id: 2},
  ]);
};
