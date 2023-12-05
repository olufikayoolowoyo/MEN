const mongoose = require("mongoose");

import { addUser,getUsers,findUserById ,removeUser,updateUser} from "../controllers/menController";

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
    .get(getUsers)
    .post(addUser);

  app
    .route("/user/:id")
    .get(findUserById)
    .put(updateUser)
    .delete(removeUser);
};

export default routes;

