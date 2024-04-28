const express = require('express');
const mysql = require('mysql');
const cors = require('cors');


const app = express();
app.use(cors())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ajay_db'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
    console.log("Home page");
    res.writeHead(200, { "Content-type": "text/html" })
    res.write("Will get data from db");
    res.end();
})

app.post("/post-data", (req, res) => {
    console.log("post")
    console.log(req.body);
})

