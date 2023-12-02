// Import required modules
//import  express  from "express"; 
const express = require('express');

// Create an instance of the Express application
const app = express();  
const PORT = 3000;

/****ROUTES****/
const _route = require('./src/routes/menRoute')

app.use('/men',_route);



  
app.get('/', (req,res)=>{
    res.send(`App Base Url`);
 })

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});