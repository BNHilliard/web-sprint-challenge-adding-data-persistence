
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').del()
  await knex('projects').insert([
    {project_name: 'Build a house',
     project_description: 'We need a place to live!'},
    {project_name: 'Plant a garden',
     project_description: 'Our homestead needs food!'},
  ]);
};
