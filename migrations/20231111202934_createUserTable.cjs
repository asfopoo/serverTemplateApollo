const tableName = 'user';

exports.up = async function (knex) {
  const tableExists = await knex.schema.hasTable(tableName);

  if (!tableExists) {
    return knex.schema.createTable(tableName, function (table) {
     // Primary key
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));

    // Other columns
    table.string('email').notNullable().unique();
    table.string('first_name');
    table.string('last_name');

    // Timestamps automatically adds created_at and updated_at columns
    table.timestamps(true, true);
    });
  }
};

exports.down = async function (knex) {
  const tableExists = await knex.schema.hasTable(tableName);
  if (tableExists) return knex.schema.dropTableIfExists(tableName);
};
