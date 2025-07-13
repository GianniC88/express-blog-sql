
//require db import
const mysql = require('mysql2')
//stabilizza connessione con db
const credenziali = {
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'db_university_2',
}
const connection = mysql.createConnection(credenziali)

connection.connect(err => {
	if (err) {
		throw err
	}
	console.info('connessione avvenuta')
})
//per collegare al controller
module.exports = connection