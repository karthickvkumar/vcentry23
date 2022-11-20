const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

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
database: ""
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
});

const tableName = "vcentry23";
const serverError = "Sorry something went wrong in Server, pls contact Admin";

//https://domainName.com/user
// http://localhost:4000/user 
app.get("/user", (request, response) => {
  const sqlQuery = `SELECT * FROM ${tableName}`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send({
        actualError : error,
        message : serverError
      })
    }
    else{
      response.status(200).send(result);
    }
  })
});

//https://domainName.com/create
// http://localhost:4000/create 
/*
{
  "name" : "Kumar",
  "age": 26,
  "email": "k@gmail.com",
  "location" : "Chennai",
  "mobile": 47526555
}
*/
app.post("/create", (request, response) => {
  const name = request.body.name;
  if(name == "" || name == undefined){
    response.status(400).send({
      message: "Invalid Name"
    });
    return;
  }
  const age = request.body.age;
  if(age == undefined || age == "" || typeof age != 'number'){
    response.status(400).send({
      message: "Invalid Age"
    });
    return;
  }
  const email = request.body.email;
  const location = request.body.location;
  const mobileNumber = request.body.mobile;

  const sqlQuery = `INSERT INTO ${tableName} (name, age, email, location, mobile_number) VALUES ('${name}', ${age}, '${email}', '${location}', ${mobileNumber})`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send({
        actualError : error,
        message : serverError
      })
    }
    else{
      response.status(200).send({
        actualResult : result,
        message : "Successfully user profile has been saved"
      });
    }
  })
  
})

//https://domainName.com/edit/2
// http://localhost:4000/edit/2

/*
{
  "name" : "Kumar",
  "age": 26,
  "email": "k@gmail.com",
  "location" : "Chennai",
  "mobile": 47526555
}
*/
app.put("/edit/:id", (request, response) => {
  const id = request.params.id;

  const name = request.body.name;
  const age = request.body.age;
  const email = request.body.email;
  const location = request.body.location;
  const mobileNumber = request.body.mobile; 

  const sqlQuery = `UPDATE ${tableName} SET name='${name}', age=${age}, email='${email}', location='${location}', mobile_number=${mobileNumber} WHERE id=${id}`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send({
        actualError : error,
        message : serverError
      })
    }
    else{
      response.status(200).send({
        actualResult : result,
        message : "Successfully user profile has been Modified"
      });
    }
  })
})

//https://domainName.com/delete/2
// http://localhost:4000/delete/2
app.delete("/delete/:id", (request, response) => {
  const id = request.params.id;

  const sqlQuery = `DELETE FROM ${tableName} WHERE id=${id}`;

  connection.query(sqlQuery, (error, result) => {
    if(error){
      response.status(500).send({
        actualError : error,
        message : serverError
      })
    }
    else{
      response.status(200).send({
        actualResult : result,
        message : "Successfully user profile has been Deleted"
      });
    }
  })
})

const port = process.env.PORT || 4000;
http.listen(port, () => {
  console.log("Node JS server is running on port 4000");
}) 
