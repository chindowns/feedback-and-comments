require('dotenv').config(); // this is important!
module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "events_db"

  },
  "production": {
    "use_env_variable": "JAWSDB_URL"
  }
};