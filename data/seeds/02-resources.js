exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').del()
  await knex('resources').insert([
    {resource_name: "Lumber", resource_description: 'For the frame!'},
    {resource_name: "Hammer and nails", resource_description: 'Also for the frame!'},
    {resource_name: "Bricks", resource_description: 'to build a raised planter!'},
    {resource_name: "Soil", resource_description: 'to fill the planter!'}
  ]);
};
