
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('project_resources').del()
  await knex('project_resources').insert([
    {pr_id: 1, project_id: 1, resource_id: 1},
    {pr_id: 2, project_id: 1, resource_id: 2},
    {pr_id: 3, project_id: 2, resource_id: 3},
    {pr_id: 4, project_id: 2, resource_id: 4}
  ]);
};
