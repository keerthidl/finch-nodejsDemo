const { Router } = require('express');
const express = require('express')
const mysql = require('mysql')
// const 

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : 'L@nnisport@1',
    database : 'finch_nodejs'
  });

  async function dbConnection() {
    try {
        var db = await connection.connect()
        console.log("db connected successfully");
    } catch (error) {
        console.log("DB connection failed.");
    }  

  }
  dbConnection()

const app = express()
app.use(express.json({limit:"50mb"}))

// API to the users data
app.get("/getUsers", async (req, res)=>{
       connection.query("SELECT * FROM user", function (err, results,fields) {
            if (err){
                res.status(400).json({Message:"Error"})
            }else{
                res.status(200).json({Message:"success", result:results})
            }
        })
})

const port = 4000 
app.listen(port, ()=>{
    console.log(`server running on port: ${port}`);
})