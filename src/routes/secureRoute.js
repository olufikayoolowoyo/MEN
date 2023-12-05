const express = require('express')
const router = express.Router()
import { addUser,updateUser,removeUser } from '../controllers/menController';

router.post('/',addUser).put('/:id',updateUser).delete('/:id',removeUser);

module.exports = router