// Import required modules
//import  express  from "express"; 
const express = require('express');

// Create an instance of the Express application
const app = express();  
const PORT = 3000;

/****ROUTES****/
app.get('/', (req,res)=>{

   res.send(`Node and Nodemon from port ${PORT}`);
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});