const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const e = require("express");

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
  credentials: true,
  origin: "*"
}));

const http = require("http").createServer(app);

/*
Local host XHAMM
host : "localhost",
user: "root",
password: "",
database: "",
port: 8080
*/
const connection = mysql.createConnection({
  host : "remotemysql.com",
  user: "wym4khPjwJ",
  password: "IpVePeo1GV",
  database: "wym4khPjwJ",
  port: 3306
});

connection.connect((error) => {
  if(error){
    throw error;
  }
  else{
    console.log("MySql databse is connected succssfully");
  }
})

const port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log("Node JS server is running on port 4000");
}) 
