// đầu tiên require module mysql đã cài vào.
// step1: tạo connect đến database
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'demo_node_api',
  port: '3306'
});

connection.connect(function (err) {
  if (err) {
    console.log('ket noi CSDL khong thanh cong', err);
  } else {
    console.log('Conect thanh cong');
  }
});

module.exports = connection;
