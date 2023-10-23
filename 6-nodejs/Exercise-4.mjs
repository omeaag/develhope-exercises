import { createServer } from "node:http";

const server = createServer((request, response) => {
  console.log("OMER ISTEK ATTI");

  response.statusCode = 200;

  response.setHeader("Content-Type", "text/html");

  response.end("<html><body><h1>OMER CAN SOYU</h1></body></html>");
});

server.listen(3080, () => {
  console.log(`Server running at http://localhost:3080`);
});
