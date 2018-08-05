var mysql = require('mysql');

function createDBConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'username',
        password: 'password',
        database: 'payfaster'
    })
}

module.exports = function(){
    return createDBConnection;
}