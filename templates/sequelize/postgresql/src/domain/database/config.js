const environment = process.env.NODE_ENV || 'local';

const credentials = {
  dialect: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

const environmentConfig = {
  production: credentials,
  local: {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'root',
    database: '{{projectName}}-db',
  },
};

module.exports = environmentConfig[environment];
