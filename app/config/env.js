//settings for sequalize connection

const env = {
  database: "postgres",
  username: "postgres",
  password: "postgres", //test
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = env;
