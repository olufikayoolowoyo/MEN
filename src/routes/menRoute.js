const mongoose = require("mongoose");

import { verify } from "jsonwebtoken";
import {
  getUsers,
  findUserById,loginUser
} from "../controllers/menController";

import securedRoutes from './secureRoute'

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1/MenDb");

//Handles post requests
var bodyParser = require("body-parser");

const routes = (app) => {
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));

  // parse application/json
  app.use(bodyParser.json());

  /****ROUTES****/

  app.use('/secured', verifyToken, securedRoutes)

  app.route("/login").post(loginUser);
  app.route("/user/:id").get(findUserById);
  app.route("/user").get(getUsers);
};

function verifyToken(req, res, next){

  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    req.token = bearerToken;
    next();
  } else {
    res.status(403).send("Unauthorized User");
  }
};

export default routes;
