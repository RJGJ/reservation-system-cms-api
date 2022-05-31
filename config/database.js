const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: "35.209.1.230",
      port: 3306,
      database: "reservation-system",
      user: "reservation-system",
      password: "reservation-system",
    },
  },
});
