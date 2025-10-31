const http = require ('http');


const server = http.createServer ((request,response) => {

    let statusCode = 200 ;
    let contentType = 'text/html; charset=utf-8';
    let content = '';

     if (request.url === '/') {
        content = '<h1>Choose Your Pokemon</h1><p> Pikachu OR Syvleon</p> <img src="https://wallpapers.com/images/featured/pokemon-va6139eg5csznzmw.jpg"></img>';
    } else if (request.url === '/Pikachu') {
        content = '<h1>Selected Pikachu</h1><p>"Pika Pika!"</p><img src="https://i.pinimg.com/736x/bf/95/34/bf953419d76bf747cba69b55e6e03957.jpg"></img>';
    } else if (request.url === '/Syvleon') {
        content = '<h1>Select Syvleon</h1><p> "Sylv Sylv!</p><img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/700.png"></img>';
    } else {
        // If the route doesn't match, send a 404 error
        statusCode = 404;
        content = '<h1>404 Not Found</h1><p>Page does not exist.</p>';
    }

    response.writeHead(statusCode, { 'Content-Type': contentType });
    response.end(content);


});




server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
