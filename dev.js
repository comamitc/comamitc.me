var express = require('express'),
  path = require('path'),
  app = express();

// serve static files out of /public
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

var server = app.listen(4442, function() {
  console.log("Server Listening: " + 4442);
});
