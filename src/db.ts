const config = {
    DATABASE_URL: 'postgres://postgres:password@localhost:5432/postgres',
    DB_HOST: 'localhost',
    DB_PORT: 5432,
    DB_USER: 'postgres',
    DB_NAME: 'postgres',
    DB_PASSWORD: 'password',
  };

const db = require('knex')({
    client: 'pg',
    connection: {
      connectionString: config.DATABASE_URL,
      host: config["DB_HOST"],
      port: config["DB_PORT"],
      user: config["DB_USER"],
      database: config["DB_NAME"],
      password: config["DB_PASSWORD"],
    }
  });

  export default db;