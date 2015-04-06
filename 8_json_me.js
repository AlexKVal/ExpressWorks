'use strict';

var express = require('express');
var fs = require('fs');

var app = express();

app.get('/books', function (req, res) {
  fs.readFile(process.argv[3], function (err, data) {
    if (err) {
      return res.send(500);
    }

    try {
      res.send(JSON.parse(data));
    } catch (e) {
      res.send(500);
    }
  });
});

app.listen(process.argv[2]);
