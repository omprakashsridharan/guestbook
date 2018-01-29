const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12qwmn09',
    database:'guestbook'
})
module.exports = connection