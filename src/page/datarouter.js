const express = require('express');
const datarouter = express.Router();
const path = require('path');


datarouter.get('/home/css', function(req, res){
    res.sendFile(path.join(__dirname, '/home/style.css'));
});

datarouter.get('/about/css', function(req, res){
    res.sendFile(path.join(__dirname, '/about/style.css'));
});

datarouter.get('/howwork/css', function(req, res){
    res.sendFile(path.join(__dirname, '/howwork/style.css'));
});

datarouter.get('/imgsrc/:imagesrc', function(req, res){
    res.sendFile(path.join(__dirname, '/imgsrc/' + req.params.imagesrc));
});


module.exports = datarouter;