const express = require('express');
const moveRoute = express.Router();

const moveController = require('../controllers/move');

moveRoute.route('/move').get(moveController.showDataJson);

module.exports = moveRoute;
