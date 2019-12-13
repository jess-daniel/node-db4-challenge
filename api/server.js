const express = require('express');
const helmet = require('helmet');

const recipeRouter = require('../recipe-book/recipeRouter');

const server = express();

// global middleware
server.use(helmet());
server.use(express.json());

// Routes
server.use("/api/recipes", recipeRouter);

module.exports = server;