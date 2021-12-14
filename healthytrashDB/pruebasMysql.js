const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Baluchillo1992',
    port: 3306,
    database: 'healthytrash'
});


conn.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        //coger todos los usuarios
        /* conn.query('SELECT * FROM healthytrash.usuarios', (err, result) => {
            console.log(result);
        }) */
        /* const nombre = 'javier'
        const apellidos = 'espigares'
        const email = 'javi@gmail.com'
        const password = '12345'
        const username = 'javi777'
        //para inserta un nuevo usuario
        conn.query('INSERT INTO usuarios(nombre,apellidos,email,password,username) VALUES(?,?,?,?,?)', [nombre, apellidos, email, password, username],
            (err, result) => {
                console.log(err);
                console.log(result);
            }) */
        const nuevoUsername = 'javi888'
        const anteriorUsername = 'javi777'
        // para cambiar el usuario
        conn.query('UPDATE usuarios SET username = ? WHERE username =?', [nuevoUsername, anteriorUsername],
            (err, result) => {
                console.log(err);
                console.log(result);
            })
    }
})