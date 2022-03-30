const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: 'database-1.cluster-ch3mflwsxarx.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'IcfCIPnGR1DvwzAXjgCy',
    database: 'database-1'
});


db.connect(err => {
    if (err) {
        console.log(err)
    } else if (!err) {
        console.log('We did it!')
    }
    
})

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello')
    console.log('hello world');
})

app.get('/prints', (req, res) => {
    let reqItem = 'SELECT * FROM prints';
    db.query(reqItem, (err, result) => {
        if (err) throw err;
        res.send(result)
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

app.listen(4000, () => {
    console.log('running on 4000');
})