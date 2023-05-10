const express = require('express');
const mysql=require('mysql')
const app = express();

const port = 8089;


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database:'metromarket'
  
});



connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});





app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

