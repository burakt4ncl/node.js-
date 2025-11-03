const http = require('http');

const server = http.createServer((request,response) => {

    if (request.method === 'DELETE'){
        console.log('Username: ',username);
        username = null;
        console.log('Username deleted');

        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Username deleted!');

    } else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Username deleted!');


    }

});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});