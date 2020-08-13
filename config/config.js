require('dotenv').config(); // this is important!
module.exports = {
  "development": {
    "username": process.env.dbusername,
    "password": process.env.dbpassword,
    "database": process.env.dbdatabase,
    "host": process.env.dbhost
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