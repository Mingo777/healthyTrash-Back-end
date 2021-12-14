const mysql = require('mysql2');



const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'Baluchillo1992',
    port: 3306,
    database: 'healthytrash'
});



global.db = pool;