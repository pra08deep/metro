const express = require('express');
const mysql=require('mysql')
const app = express();

const port = 8089;


const connection = mysql.createConnection({
  host: 'localhost:3305',
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

app.get('/images', (req, res) => {
  const query = 'SELECT * FROM header';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.sendStatus(500);
    } else {
      res.json(results);
    }
  });
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

