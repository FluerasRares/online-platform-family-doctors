const Pool = require("pg");
const dbConfig = require('../config/db.config')

const pool = new Pool({
    user: dbConfig.USER,
    host: dbConfig.HOST,
    database: dbConfig.DB,
    password: dbConfig.PASSWORD
})

const query = (queryString, values) => {
    return pool.query(queryString, values)
}

module.exports = {
    query
}