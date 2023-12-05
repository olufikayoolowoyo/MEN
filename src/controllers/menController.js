import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserSchema } from "../models/menModel";

const User = mongoose.model("User", UserSchema);

//Delete User by Id
export const removeUser = (req, res) => {
  let _id = req.params.id;
  User.deleteOne({ _id: _id })
    .then((user) => {
      res.send(`User (${_id}) successfully deleted`);
    })
    .catch((err) => {
      res.status(400).send("Error deleting user!");
    });
};

//Update User By Id
export const updateUser = (req, res) => {
  let id = req.params.id;

  User.findOneAndUpdate({ _id: id }, req.body, { new: true })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.send(err);
    });
};

//Find User by Id
export const findUserById = (req, res) => {
  let id = req.params.id;
  User.findById(id)
    .then((user) => {
      if (!user) {
        res.status(404).send("User not found!");
      }
      res.json(user);
    })
    .catch((err) => {
      res.status(400).send("Bad Request");
    });
};

//Get all User
export const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
};

//Create new User
export const addUser = (req, res) => {
  let newUser = new User(req.body);
  newUser
    .save()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.send(err);
    });
};

//Create new User
export const loginUser = (req, res) => {
  jwt.sign({ user: req.body }, "secretKey", (err, token) => {
    console.log(token);
    res.json({ token });
  });
};


