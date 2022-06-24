/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('posts', table => {
    table.increments('id'); // creates an auto-incrementing column 'id that is the same as SERIAL in SQL
    table.string('title'); //'title' column with VARCHAR(255)
    table.text('content'); // TEXT - larger VARCHAR
    table.integer('view_count'); // view_count of type integer
    table.timestamp('created_at').defaultTo(knex.fn.now()); // created_at timestamp defaulted to the time of now, now being when the function is triggered e.g. new post created
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('posts')
};

// The up function is what is run when we migrate:latest
// The down function is what is run when we migrate:rollback
