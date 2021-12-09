const mysql = require('mysql');
const { connect } = require('./routes/users');


const connect = () => {
    const pool = mysql.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: 'Baluchillo1992',
        port: 3306,
        database: 'healthyTrash'
    })
}






module.exports = connect;