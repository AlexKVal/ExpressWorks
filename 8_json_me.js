'use strict';

var express = require('express');
var fs = require('fs');

var app = express();

app.get('/books', function (req, res) {
  res.json(JSON.parse(fs.readFileSync(process.argv[3])));
});

app.listen(process.argv[2]);
