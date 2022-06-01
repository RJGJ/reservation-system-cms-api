module.exports = ({ env }) => ({
  auth: {
    secret: process.env.AUTH_SECRET,
  },
  apiToken: {
    salt: process.env.API_SALT,
  },
});
