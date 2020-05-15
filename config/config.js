module.exports = {
  "development": {
    "username": process.env.DB_USER || "root",
    "password": process.env.DB_PW || "password",
    "database": process.env.DB_NAME || "witter_db",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
}
