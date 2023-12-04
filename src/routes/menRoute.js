import users from "../data/users";
const uuid = require("uuid");
const token = require('jsonwebtoken');
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/MenDb')

//Handles post requests
var bodyParser = require("body-parser");



const routes = (app) => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  /****ROUTES****/
  app
    .route("/user")
    .get((req, res) => {
      res.send(users);
    })
    .post((req, res) => {
      // // Validate if required form entries are sent
      if (!req.body.name || !req.body.age || parseInt(req.body.age) == 0) {
        res.sendStatus(400);
      }

      const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        age: parseInt(req.body.age),
      };

      users.push(newUser);
      res.json(users);
    });

  app
    .route("/user/:id")
    .get((req, res) => {
      const id = req.params.id;
      let _user = users.filter((user) => user.id === parseInt(id));

      if (_user.length > 0) {
        res.json(_user);
      } else {
        res.sendStatus(400);
      }
    })
    .delete((req, res) => {
      const id = req.params.id;
      let _user = users.filter((user) => user.id === parseInt(id));

      if (_user.length > 0) {
        users = users.filter((user) => user.id != parseInt(id));
        res.json({ msg: "User deleted", users });
      } else {
        res.sendStatus(400);
      }
    });
};

export default routes;

