'use strict';

var express = require('express');
var http = require('http');

var app = express();
app.get('/', function(req, res){
    res.end('release: ' + process.release.name);
});

http.createServer(app).listen(process.env.PORT || 8080, function() {
    console.log('Listening on %d', this.address().port);
});