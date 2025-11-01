const http = require('http');

let bio = 'Hi , I am T4 .';

const server =  http.createServer((request,response) => {

    if (request.method === 'PATCH'){
        let patchData = '';

        request.on('data', (chunk) => {
            patchData += chunk ;
        });
        
        request.on ('end', () => {
            console.log('Bio:',bio);
            bio += patchData;
            console.log('New Bio: ',bio);

            response.writeHead(200 , {'Content-Type': 'text/plain'});
            response.end('Bio is changed!!');
            });}
    else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('Go back to your terminal!');
        }
});
    
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});