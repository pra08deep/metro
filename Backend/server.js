const express = require('express');  //use express fetch
const mysql=require('mysql') //use mysql 
const app = express();   //declare variable express
const bodyParser=require('body-parser');  //required to field bodyparser
const cors=require('cors'); //declaring cors
const port = 8089; //asigning port number

//database connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database:'metromarket'
   
}); 

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});




app.use(cors());     //express use cors function
app.use(express.json());  //express us express.json

app.use(bodyParser.urlencoded({ extended: true })); //use as extend


app.get("/api/get",(req,res)=>{
 const sqlGet="SELECT * FROM header"
 db.query(sqlGet,(error,result)=>{
  res.send(result)
 }) 

})



app.get('/', (req, res) => {
  //  const sqlInsert="INSERT INTO header(header_text1,header_text2,header_image1,header_image2) VALUES('Nepal Best Super Market','Metro Market contains large amount of grocery and home appliance. High quality and located in many places and growing and connect in all Nepal.','F:\Metromart\frontEnd\src\Components\Body\img\trolley-shopping.gif','F:\Metromart\frontEnd\src\Components\Body\img\11697.jpg')";
      //db.query(sqlInsert,(err,result)=>{
        //console.log("Error",err);
        //console.log("sucess",result);
        //res.send('Hello World!');
      //});
});




app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//