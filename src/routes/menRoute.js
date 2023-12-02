const express = require('express');
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
  })


 
  // men
  router.get('/', (req, res) => {
    res.send('MEN home page')
  })

  // men/about
  router.get('/about', (req, res) => {
    res.send('About MEN')
  })

  // Define a route with a dynamic parameter
  //man/4
router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Hello, user ${userId}!`);
});

// Define a route that handles POST requests
//men/new
router.post('/new', (req, res) => {
    res.send('This is a POST request example!');
});

  module.exports = router