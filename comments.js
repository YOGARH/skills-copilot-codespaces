// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the comments.html file from the previous exercise.

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream('./comments.html').pipe(res);
});

server.listen(3000, function() {
  console.log('Server listening on port 3000');
});