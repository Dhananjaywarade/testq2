const express = require('express');
const appForEmpsRouter = express.Router();

const mySql = require('mysql');

var connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'manager',
    database: 'exam'
});


appForEmpsRouter.get("/", (req, res) => {
   
    connection.query('SELECT * FROM Book_Tb', (error, result) => {
        if (error == null) {
            var data = JSON.stringify(result);
         
            res.setHeader("content-type", "application/json");
           
            res.send(data);
        }
    });
});


appForEmpsRouter.post("/", (req, res) => {
   
    var query = `INSERT INTO Book_Tb VALUES (${req.body.id}, '${req.body.b_name}', '${req.body.author}','${req.body.book_type}','${req.body.price}','${req.body.language}')`;
  
    
    connection.query(query, (error, result) => {
      if (error == null) {
       
        var data = JSON.stringify(result);
        res.setHeader('content-type', 'application/json');
        res.send(data);
      }
    });
  });
  


  

  appForEmpsRouter.put("/:id", (req, res) => {
    
    var query = `UPDATE Book_Tb SET b_name = '${req.body.b_name}', author = '${req.body.author}',book_type = '${req.body.book_type}',price = '${req.body.price}',language = '${req.body.language}', WHERE id = ${req.params.id}`;
  
    connection.query(query, (error, result) => {
      if (error == null) {
        var data = JSON.stringify(result);
        res.setHeader('content-type', 'application/json');
        res.send(data);
      }
    });
  });
  

module.exports = appForEmpsRouter;
