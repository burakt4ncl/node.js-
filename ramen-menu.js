const http = require('http'); // Import the http module

// Create a server

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.write(`
                  Welcome to Neon Noodles! 

                    ==============
                    LATE NITE MENU
                    ==============

                    RAMEN 
                    1. Quantum Truffle Ramen 

                    EXTRA TOPPINGS 
                    1. Hacktivist Pork 
                    2. Cybernetic Egg
                    3. Glowing Scallions
                                          `);                                              
  
  response.end();                                                                           // Ends the response
 });


// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});


