var http = require("http");


const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { "Content-Type": "text/html" });

  // Set the response body
  res.write("<h1>Hello Node!!!!</h1>\n");

  // End the response
  res.end();
});





// Make the server listen on port 3000
server.listen(3000, "localhost", () => {
  console.log("Server running at http://localhost:3000/");
});
