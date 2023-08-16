const pg = require("pg");
const db = new pg.Client("postgresql:///yodlr");

db.connect();

module.exports = db;
