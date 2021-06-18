const express = require('express');
const usersRoute = express.Router();

const userController = require('../controllers/user');

usersRoute.route('/users').get(userController.chuog);

module.exports = usersRoute;
