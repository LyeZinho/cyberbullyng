const express = require('express');
const pagerouter = express.Router();
const path = require('path');


pagerouter.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/home/home.html'));
});

pagerouter.get('/about', function(req, res){
    res.sendFile(path.join(__dirname, '/about/about.html'));
});


module.exports = pagerouter;