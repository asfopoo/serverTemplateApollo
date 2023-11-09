import knex from 'knex';

const DB_CONSTANTS = {
  DATABASE_URL: 'postgres://postgres:password@db:5432/postgres',
  DB_PORT: 5432,
  DB_USER: 'postgres',
  DB_NAME: 'postgres',
  DB_PASSWORD: 'password',
};

const config = {
  client: 'pg',
  connection: { 
    host : 'db', // from docker-compose.yml
    user : DB_CONSTANTS.DB_USER, 
    password : DB_CONSTANTS.DB_PASSWORD,  
    database : DB_CONSTANTS.DB_NAME,
  },
}

  const db = knex(config)


  export default db;