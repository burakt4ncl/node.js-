const http = require('http');
let Visitor = 25;




const server = http.createServer((request,response) => {
    let statusCode=200;
    let contentType = 'text/html; charset=utf-8';
    let content = '';

    
    if (request.method === 'GET') {
      if (request.url === ('/') ){
      Visitor++;
      content = `<p>Visitor is ${Visitor}</p>`; }} 
    
    else {
        // If the route doesn't match, send a 404 error
            statusCode = 404;
            content = '<h1>404 Not Found</h1><p>Page does not exist.</p>';
    }
    
    response.writeHead(statusCode, { 'Content-Type': contentType });
    console.log('Visitor counter:',Visitor);
    response.end(content);
})

server.listen(3000, () => {
  console.log('Visitor Counter running at http://localhost:3000');
});