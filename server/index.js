const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hLWF5EBGdQp4NS',
    database: 'Janus'
});

// db.connect(err => {
//     if (err) {
//         console.log(err)
//     } else if (!err) {
//         console.log('We did it!')
//     }
    
// })

app.use(cors());
app.use(express.json);

app.get('/', (req, res) => {
    console.log('hello world');
})

app.get('/prints', (req, res) => {
    let reqItem = 'SELECT * FROM prints';
    let query = db.query(reqItem, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('we got it');
    })
})

app.listen(4000, () => {
    console.log('running on 4000');
})