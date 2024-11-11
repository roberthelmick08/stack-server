const express = require('express');
const GenerationEngine = require('./generation/engine');
const userRouter = require('./api/user');
const generationRouter = require('./api/generation');

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use('/user', userRouter);
app.use('/generation', generationRouter);

engine.start();

module.exports = app;
