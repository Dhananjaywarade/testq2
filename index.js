
const express = require('express');


const emps=require("./routes/emps");

const app = express();


app.use((request, response, next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods', "*")
    next();
})

app.use(express.json());

app.use('/emps',emps);



app.listen(9000, () => {
  console.log("Server started");
});
