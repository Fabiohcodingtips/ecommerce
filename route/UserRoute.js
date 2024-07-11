const express = require('express');
const router = express.Router();
router.use(express.json());
const {createUser, findUser,deleteUser,updateUser, getUser} = require('../controller/UserController');

// allow url encoding
router.use(express.urlencoded({extened:false}));

// create new user
router.post('/createuser',createUser)
router.get('/finduser/:id',findUser)
router.put('/updateuser/:id',updateUser)
router.delete('/deleteuser/:id',deleteUser)
router.get('/getallusers',getUser)



module.exports = router;
