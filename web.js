var express = require('express');

var app = express.createServer(express.logger());

var fileBuf = new Buffer(fs.readFileSync("index.html","utf-8"));
fileBuf.write(fs.readFileSync("index.html","utf-8"));

var fileString = fileBuf.toString();

app.get('/', function(request, response) {
  response.send(fileString);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
