module.exports = {
  // HOST: "localhost",
  HOST: "10.10.12.77",
  USER: "root",
  PASSWORD: "",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
