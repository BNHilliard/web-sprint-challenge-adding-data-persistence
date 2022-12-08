exports.up = function(knex) {
  return knex.schema
  .createTable('projects', tbl => {
    tbl.increments('project_id');
    tbl.string('project_name', 50).notNullable().unique();
    tbl.string('project_description', 100);
    tbl.boolean('project_completed').notNullable().defaultTo(false);
  })
  .createTable('resources', tbl => {
    tbl.increments('resource_id');
    tbl.string('resource_name', 100).notNullable().unique();
    tbl.string('resource_description', 100);
  })
  .createTable('tasks', tbl => {
    tbl.increments('task_id');
    tbl.string('task_description', 100).notNullable();
    tbl.string('task_notes', 200);
    tbl.boolean('task_completed').notNullable().defaultTo(false);
    tbl.integer('project_id').references('project_id').inTable('projects').notNullable();
  })
  .createTable('project_resources', tbl => {
    tbl.increments('pr_id');
    tbl.integer('project_id').references('project_id').inTable('projects');
    tbl.integer('resource_id').references('resource_id').inTable('resources');
  })
};


exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('project_resources')
  .dropTableIfExists('tasks')
  .dropTableIfExists('resources')
  .dropTableIfExists('projects')
};
