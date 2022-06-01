const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    // client: "postgres",
    // connection: {
      // host: env('DB_HOST'),
      // port: env('DB_PORT'),
      // database: env('DB_NAME'),
      // user: env('DB_USER'),
      // password: env('DB_PASSWORD'),
      // ssl: env('DATABASE_SSL', false),
    // },

    client: 'sqlite',
    connection: {
    	filename: env('DATABASE_FILENAME', './db.sqlite')
    },
    useNullAsDefault: true,
    debug: true,
  },
});
