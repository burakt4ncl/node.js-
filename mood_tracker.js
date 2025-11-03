const http = require('http');

let mood = 'good' ;

const server = http.createServer((request,response) => {
    if (request.method === 'GET'){
        console.log('Your mood is: ', mood);

        response.writeHead(200 , { 'Content-Type': 'text/plain' } );
        response.end('See your mood in output')
    }
    else if(request.method === 'POST'){
        console.log('Your mood is :' ,mood);

        response.writeHead(200 , { 'Content-Type': 'text/plain' } );
        response.end('See your mood in output')
    }
    else if(request.method === 'DELETE'){
        console.log('Your mood is :' ,mood);
        mood=null;
        console.log('Your mood is :',mood);

        response.writeHead(200 , { 'Content-Type': 'text/plain' } );
        response.end('See yor mood')
    }
    else if(request.method === 'PATCH'){
        let message = '';
        request.on('data',(chunk) => {
        message+=chunk; });

        message+=mood
        request.on('end', () => {
        console.log('Your new mood is:', message);});

        response.writeHead(200 , { 'Content-Type': 'text/plain' } );
        response.end('See yor mood in terminal')
    }else {
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.end('404 ERROR');
    };
    

});

server.listen(3000, () => {
  console.log('Mood feed server running at http://localhost:3000');
});