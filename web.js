var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());


var file = fs.readFileSync("index.html","utf-8");

var buffer = new Buffer(file,"utf-8");
buffer.write(file,"utf-8");

var fileString = buffer.toString("utf-8");

app.get('/', function(request, response) {
  response.send(fileString);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
