const express = require('express');
const mainsiteRouter = express.Router();

mainsiteRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the mainsites to you');
})
.post((req, res) => {
    res.end(`Will add the mainsite: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /mainsites');
})
.delete((req, res) => {
    res.end('Deleting all mainsites');
});

module.exports = mainsiteRouter;