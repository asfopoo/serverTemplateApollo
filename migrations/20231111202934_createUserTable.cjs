exports.up = async function (knex) {
  const tableExists = await knex.schema.hasTable("your_table_name");

  if (!tableExists) {
    return knex.schema.createTable("your_table_name", function (table) {
      // Define your table columns and constraints here
      table.increments("id").primary();
      table.string("name");
      // ... other columns
    });
  }
};

exports.down = function (knex) {
  // Rollback logic, if needed
  return knex.schema.dropTableIfExists("your_table_name");
};
