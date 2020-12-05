// import credentials
const credentials = require("../credentials.json");
// retrieve secrets from credentials
const username = credentials.username;
const dbname = credentials.dbname;
const password = credentials.password;
const secretOrKey = credentials.secretOrKey;

// set up mongodb uri
const mongoURI = `mongodb+srv://${username}:${password}@cluster0.7i9pz.mongodb.net/${dbname}`;

module.exports = {
  mongoURI,
  secretOrKey,
};
