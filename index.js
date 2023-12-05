// Import required modules
//import  express  from "express"; 
const express = require('express');

// Create an instance of the Express application
const app = express();  
const PORT = 3000;



import routes  from './src/routes/menRoute';
routes(app);

//Serve Static files from this folder
app.use(express.static('assets'));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});