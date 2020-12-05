// NOTE: uncomment the lines below for dev env
// // import credentials
// const credentials = require("../credentials.json");
// // retrieve secrets from credentials
// const username = credentials.username;
// const dbname = credentials.dbname;
// const password = credentials.password;
// const secretOrKey = credentials.secretOrKey;

// NOTE: for deployment
const username = process.env.USERNAME;
const dbname = process.env.DBNAME;
const password = process.env.PASSWORD;
const secretOrKey = process.env.SECRET_OR_KEY;
// set up mongodb uri
const mongoURI = `mongodb+srv://${username}:${password}@cluster0.7i9pz.mongodb.net/${dbname}`;

module.exports = {
  mongoURI,
  secretOrKey,
};
