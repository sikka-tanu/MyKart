//code to connect to the database and returns a database connection

const mysql = require('mysql2');

/**
 * create a pool of connections. A pool manages multiple connections, we can get a connection from the pool when needed and 
 * then after job is done, the connection is returned to the pool.
 * The connection will then be available for a new query.
 * 
 * This was we won't have to open or close connections every time a query is executed
 */

const pool = mysql.createPool({
    host: 'localhost',
    database: 'my_kart_data',
    user: 'root',
    password: 'password'
});

module.exports = pool.promise();