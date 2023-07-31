const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'bzpsidwqqrr1ihqhketf-mysql.services.clever-cloud.com',
    user:'uwo5zhnexmavvyts',
    password:'59YmvsoF1T0wrpudO3iT',
    database:'bzpsidwqqrr1ihqhketf',
    port:'3306',
})

connection.connect((err)=>{
    if(err) throw err;
    console.log('database connected');
})

module.exports={connection};