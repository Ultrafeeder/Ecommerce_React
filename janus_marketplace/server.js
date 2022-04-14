const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const bodyparser = require('body-parser')
const app = express();
require("dotenv").config()

const SQL_PORT = process.env.SQL_PORT;
const SQL_PASSWORD = process.env.SQL_PASSWORD;

app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }))

const db = mysql.createConnection({
    host: 'janus-ecommerce.cla8t54tzdnx.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: SQL_PASSWORD,
    database: 'Janus'
});


db.connect(err => {
    if (err) {
        console.log(err)
    } else if (!err) {
        console.log('We did it!')
    }
    
})



app.get('/', (req, res) => {
    res.send('hello')
    console.log('hello world');
})

app.get('/prints', (req, res) => {
    let reqItem = 'SELECT * FROM prints';
    db.query(reqItem, (err, result) => {
        if (err) throw err;
        res.status(200).json(result)
        // res.send('we got it');
    })
})
app.get('/commissions', (req, res) => {
    let reqItem = 'SELECT * FROM commissions';
    db.query(reqItem, (err, result) => {
        if (err) throw err;
       res.send(result)
        // res.send('we got it');
    })
})

app.listen(SQL_PORT, () => {
    console.log(`listening on ${SQL_PORT}`);
})