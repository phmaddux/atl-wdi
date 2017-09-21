const http = require('http');
const urlParser = require('url'); // Adds urlParser
const server = http.createServer().listen(3001);

console.log('I\'m listening on port: 3001');

server.on('request', function(request, response) {
  var urlObj  = urlParser.parse( request.url ); //
  var pathname = urlObj.pathname; // parsing our the important info in the url
  
  console.log("requested: " + pathname);
  response.writeHead(200, {'Content-Type': 'text/html'});

  response.write('<html>');
  const message = "fun times";

if (pathname === '/fun-times') {
    response.write('<h1>Fun times!</h1>')
}
if (pathname === '/movies') {
    response.write('<h1>Favorite Movies</h1>') 
}
if (pathname === '/portfolio') {
    response.write('<h1>Coming Soon!</h1>') 
}
// else (response.write('<h1>Error 404</h1>'))

  response.write('<script>console.log("I  \'m client-side JavaScript being sent via server-side JavaScript");</script>');
  response.write('</html>');
  response.end();
});
    // 10.1.4.117:3001
