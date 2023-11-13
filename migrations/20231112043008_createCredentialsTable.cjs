const tableName = "credentials";

exports.up = async function(knex) {
    const tableExists = await knex.schema.hasTable(tableName);
    if (!tableExists) {
        return knex.schema.createTable(tableName, function(table) {
            // Primary key
            table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));

            // Foreign key
            table.uuid("user_id").references("id").inTable("user").unique();

            // Other columns
            table.string("password");
            table.string("refresh_token", 1000);

            // Timestamps automatically adds created_at and updated_at columns
            table.timestamps(true, true);
        });
    }
};

exports.down = async function(knex) {
    const tableExists = await knex.schema.hasTable(tableName);
    if (tableExists) return knex.schema.dropTableIfExists(tableName);
  
};
