const mysql = require('mysql2');

// variaveis de ambiente
var pool = mysql.createPool({
    "user": process.env.MYSQL_USER,
    "password": process.env.MYSQK_PASSWORD,
    "database": process.env.MYSQL_DATABASE,
    "host": process.env.MYSQL_HOST,
    "port": process.env.MYSQL_PORT,
});

console.log("eee"+pool.host);

exports.pool = pool;