const http = require('http');

let username = 't4ncl';

const server = http.createServer((request, response) => {
  if (request.method === 'PUT') {
    let newUsername = '';

    request.on('data', (chunk) => {
      newUsername += chunk;
    });

    request.on('end', () => {
      console.log('Original Username:', username);
      username = newUsername;
      console.log('Updated Username:', username);

      response.writeHead(200, { 'Content-Type': 'text/plain' });
      response.end('Username updated!');
    });
  } else {
    response.writeHead(404, { 'Content-Type': 'text/plain' });
    response.end('Go back to your terminal!');
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});