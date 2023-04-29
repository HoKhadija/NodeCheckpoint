// Importing the built-in Node.js http module
const http = require("http");

// Defining the port number to listen on
const PORT = 3000;

// Creating a new HTTP server instance with a request listener function
const server = http.createServer((req, res) => {
    // Setting the HTTP response header to specify the content type as HTML
    res.writeHead(200, { "Content-type": "text/html" });

    // Sending the response body as an HTML heading element with the text "Hello Node!!!!"
    res.end("<h1>Hello Node!!!!</h1>\n");
});

// Starting the server and listening for incoming connections on the specified port
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});