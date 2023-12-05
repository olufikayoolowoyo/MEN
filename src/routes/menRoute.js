const mongoose = require("mongoose");

import { verify } from "jsonwebtoken";
import {
  addUser,
  getUsers,
  findUserById,
  removeUser,
  updateUser,loginUser
} from "../controllers/menController";

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
  app.use(verifyToken).route("/user").get(getUsers).post(addUser);
  app.route("/login").post(loginUser);
  app.route("/user/:id").get(findUserById).put(updateUser).delete(removeUser);
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
